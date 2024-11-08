import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import { Label } from "@components/ui/label";
import { InputText } from "@components/ui/input-text";
import { Button } from "@components/ui/button";
import { Switch } from "@components/ui/switch";
import { ErrorMessage } from "@components/ui/error-message";

import {
  ArrowLeftIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  InfoIcon,
} from "@components/icons";

import {
  useForm,
  createValidationSchema,
  resolver,
  v,
} from "@utils/formValidation";
import { useAppSelector, useAppDispatch } from "@redux/hooks";

import { useRegisterMutation } from "@redux/services/authApi";

import { Path } from "@models/paths";
import { User, AccountType } from "@models/user";
import { RegisterDetails } from "@models/auth";
// import { saveUserDataToLocalStorage, saveUserLoginToLocalStorage } from "@utils"; // TODO convert to indexedDB
import { setSpaToken, updateUser } from "@redux/slices";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";
import { getById, insert, StoreName, update } from "@db";
import { generateSPAToken } from "@utils/generateSpaToken";

export const Register = () => {
  const isOnline = useAppSelector((state) => state.user.isOnline);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [register] = useRegisterMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);

  const validationSchema = createValidationSchema({
    email: v.required().email().minLength(3),
    password: v.required().string(),
  });

  const initialState = {
    email: "",
    password: "",
  };

  const { formData, formErrors, handleChange, setFieldValue, handleSubmit } =
    useForm<RegisterDetails>({
      initialState: initialState,
      validationSchema: validationSchema,
      validatorFn: resolver,
      onSubmit: handleRegister, // hoist
    });

  async function handleRegister() {
    try {
      if (!isOnline) {
        console.log("Registering in offline mode");

        // Check if user already exists in Index DB
        const storedUserData = await getById<{
          email: string;
          password: string;
        }>(
          StoreName.USER_DATA,
          formData.email, // as the ID
        );

        console.log(storedUserData);

        if (!storedUserData) {
          // Save user credentials and user data to IndexedDB
          const newOfflineUserData: User = {
            id: formData.email, // or a generated ID
            email: formData.email,
            dateCreated: dayjs().toISOString(),
            lastModified: dayjs().toISOString(),
            type: AccountType.OFFLINE,
          };

          // Save credentials and user data to IndexedDB
          await insert(
            { ...newOfflineUserData, password: formData.password },
            StoreName.USER_DATA,
            formData.email,
          );
          dispatch(updateUser(newOfflineUserData));
        }

        // Update SPA Token
        const token = generateSPAToken();
        // await ({token: token}, StoreName.SPA_TOKEN, "spa_token");
        const existingSPAToken = await getById<{ token: string }>(
          StoreName.SPA_TOKEN,
          "spa_token",
        );
        console.log("exisiting", existingSPAToken);
        if (existingSPAToken) {
          await update({ token: token }, StoreName.SPA_TOKEN, "spa_token");
        } else await insert({ token: token }, StoreName.SPA_TOKEN, "spa_token");

        dispatch(setSpaToken(token));

        // Navigate
        navigate(Path.SETTINGS);
        console.log("Registration successful. Redirecting...");
      } else {
        console.log("Registering in online mode");
        const response = await register(formData).unwrap(); // API match updates Redux, no need to handle that here

        const storedUserData = await getById<{
          email: string;
          password: string;
        }>(
          StoreName.USER_DATA,
          formData.email, // as the ID
        );

        if (storedUserData?.email !== formData.email) {
          await insert(
            { ...response.data, password: formData.password },
            StoreName.USER_DATA,
            formData.email,
          );
        }

        // Update Redux
        dispatch(updateUser(response.data));
        dispatch(setSpaToken(generateSPAToken()));

        // Navigate
        navigate(Path.SETTINGS);
        console.log("Registration successful. Redirecting...");
      }
    } catch (error: any) {
      if (error.status === 400) {
        setEmailAlreadyExists(true);
      }
      console.error("Error during registration:", error);
    }
  }

  // TODO remove this!
  function autoFillDetails() {
    setFieldValue("email", "jamesprenticez@gmail.com");
    setFieldValue("password", "password123");
  }

  // Redirect if user already logged in
  // TODO update this to check for SPA token instead
  // useEffect(() => {
  //   if (user.email !== "") {
  //     navigate(Paths.SETTINGS);
  //   }
  // }, [user.email, navigate]);

  return (
    <MaxWidthWrapper>
      <div className="mt-4 w-[90%] md:w-full max-w-[460px] bg-shadow rounded mx-auto overflow-hidden">
        <div className="h-[180px]  relative bg-[url('/bg.jpeg')] bg-cover">
          <div className="absolute bg-gradient-to-r from-fern to-moss opacity-80 inset-0" />

          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-light text-muted">Register!</h1>
            <p className="text-lg text-sage font-light">Welcome to the team!</p>
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full  absolute bottom-[-40px] border-2 border-sage/50 bg-black/70">
              <NavLink to={Path.HOME} className="w-[60%] h-[60%]">
                <div className="rounded-full">
                  <img
                    src="/logo-reverse.svg"
                    className="rounded-full"
                    alt=""
                  />
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        <form className="p-6">
          <div className="flex items-center">
            <span className="ml-auto cursor-pointer hover:text-sage">
              <InfoIcon width={24} onClick={() => autoFillDetails()} />
            </span>
          </div>

          <Label value="Email:" htmlFor="email">
            <InputText
              id="email"
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
            <ErrorMessage message={formErrors.email.errorMessage} />
          </Label>

          <Label value="Password:" htmlFor="password">
            <InputText
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div
              className="absolute cursor-pointer right-[10px] bottom-[24px] text-disabled hover:text-mist"
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
            >
              {showPassword ? (
                <EyeClosedIcon height={24} width={24} />
              ) : (
                <EyeOpenIcon height={24} width={24} />
              )}
            </div>
            <ErrorMessage message={formErrors.password.errorMessage} />
          </Label>

          <Button
            color="gangster"
            className="w-full mt-2 text-minor/90 font-light text-xl"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>

          <div className="mt-4 text-[0.7rem] font-light flex flex-wrap items-center leading-3 text-muted">
            By registering you agree to our
            <NavLink to={Path.TERMS_OF_SERVICE}>
              <Button
                variant="link"
                className="inline-flex p-0 m-0 items-center text-sage hover:text-sage/50 font-light"
              >
                Terms of Service
              </Button>
            </NavLink>
            &nbsp;and our&nbsp;
            <NavLink to={Path.PRIVACY_POLICY}>
              <Button
                variant="link"
                className="inline-flex p-0 items-center text-sage hover:text-sage/50 font-light"
              >
                Privacy Policy
              </Button>
            </NavLink>
          </div>

          <div className="text-center mt-4 flex items-center justify-center flex-col text-[1rem] font-light leading-4 text-white">
            <p>Already have an account?</p>
            <NavLink to={Path.LOGIN}>
              <Button
                variant="link"
                className="flex items-center text-sage hover:text-sage/90 font-light"
              >
                Login
                <ArrowLeftIcon
                  width={18}
                  strokeWidth={2}
                  className="ml-2 rotate-[120deg]"
                />
              </Button>
            </NavLink>

            {/* TODO - add modal for this */}
            <ErrorMessage
              message={
                emailAlreadyExists ? "Email address already in user" : ""
              }
            />
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};
