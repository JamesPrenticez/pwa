import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Label } from "@components/ui/label";
import { InputText } from "@components/ui/input-text";
import { Button } from "@components/ui/button";
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

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useLoginMutation } from "@redux/services/authApi";

import { Path } from "@models/paths";
import type { LoginDetails } from "@models/auth";
import type { ErrorResult } from "@models/api";
import { setSpaToken, updateUser } from "@redux/slices";
import { get, getById, insert, StoreName, update } from "@db";
import { AccountType, User } from "@models";
import dayjs from "dayjs";
import { generateSPAToken } from "@utils/generate-spa-token";

export const LoginSimplified = () => {
  const isOnline = useAppSelector((state) => state.user.isOnline);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const validationSchema = createValidationSchema({
    email: v.required().email().minLength(3),
    password: v.required().string(),
  });

  const initialState = {
    email: "",
    password: "",
  };

  const { formData, formErrors, handleChange, setFieldValue, handleSubmit } =
    useForm<LoginDetails>({
      initialState: initialState,
      validationSchema: validationSchema,
      validatorFn: resolver,
      onSubmit: handleLogin,
    });

  async function handleLogin() {
    try {
      if (isOnline) {
        console.log("Logging in online mode");

        const response = await login(formData).unwrap();
        // Update redux
        dispatch(updateUser(response.data));
        // dispatch(response.spaToken); TODO backend to send this
        dispatch(setSpaToken(generateSPAToken()));

        // set cookie here if required
        navigate(Path.SETTINGS);
        console.log("Login successful. Redirecting...");
      } else {
        console.log("Logging in offline mode");

        // Retrieve stored user credentials from IndexedDB
        const storedUserData = await getById<{
          email: string;
          password: string;
        }>(
          StoreName.USER_DATA,
          formData.email, // as the ID
        );
        console.log(storedUserData);

        // Check if credentials match
        if (storedUserData) {
          if (storedUserData.password !== formData.password) {
            console.error("Invalid credentials");
            setInvalidCredentials(true);
            return;
          }

          console.log("successfull retried storedUserData", storedUserData);

          // Dispatch Redux state update for offline user
          const offlineUserData: User = {
            id: storedUserData.email,
            email: storedUserData.email,
            dateCreated: dayjs().toISOString(),
            lastModified: dayjs().toISOString(),
            type: AccountType.OFFLINE,
          };

          dispatch(updateUser(offlineUserData));
          dispatch(setSpaToken(generateSPAToken()));
          navigate(Path.SETTINGS);
          console.log("Offline login successful. Redirecting...");
        } else {
          setInvalidCredentials(true);
          console.error("No stored data avaliable");
        }
      }
    } catch (error: any) {
      if (error.status === 401) {
        setInvalidCredentials(true);
      }
      console.error("Error during login:", error);
    }
  }

  // TODO remove this!
  function autoFillDetails() {
    setFieldValue("email", "jamesprenticez@gmail.com");
    setFieldValue("password", "password123");
  }

  // Redirect if user already logged in
  // useEffect(() => {
  //   if (user.email) {
  //     navigate(Paths.SETTINGS);
  //   }
  // }, [user.email, navigate]);

  return (
    <div className="text-muted p-6 flex flex-col grow h-full items-center  bg-shadow rounded-md ">
      <div className="w-full max-w-[460px] rounded mx-auto overflow-hidden p-4 ">
        <form>
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
            <Link to="/password-reset" tabIndex={-1}>
              <p className="absolute top-[2px] right-0 text-[11px] text-mist hover:text-sage">
                Forgot password?
              </p>
            </Link>
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
            className="w-full mt-4 text-[1.4rem] font-light"
            onClick={handleSubmit}
          >
            Sign In
          </Button>

          <div className="font-light text-xl leading-3 text-center mt-12 flex items-center justify-center flex-col">
            <p>Dont have an account?</p>
            <NavLink to={Path.REGISTER}>
              <Button
                variant="link"
                className="flex items-center text-minor text-lg "
              >
                Register now
                <ArrowLeftIcon
                  width={18}
                  strokeWidth={2}
                  className="ml-2 rotate-[120deg]"
                />
              </Button>
            </NavLink>

            {/* TODO - add modal for this */}
            <ErrorMessage
              message={invalidCredentials ? "Invalid email or password" : ""}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
