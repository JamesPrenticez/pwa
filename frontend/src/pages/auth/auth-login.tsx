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

import { useAppSelector } from "@redux/hooks";
import { useLoginMutation } from "@redux/services/authApi";

import { Path } from "@models/paths";
import type { LoginDetails } from "@models/auth";
import type { ErrorResult } from "@models/api";
import { MaxWidthWrapper } from "@components/layout/max-width-wrapper";

export const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const user = useAppSelector((state) => state.user.data);
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
      // TODO OFFLINE MODE

      await login(formData).unwrap();
      // set cookie
      navigate(Path.SETTINGS);
      console.log("Login successful. Redirecting...");
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
    <MaxWidthWrapper>
      <div className="mt-4 w-[90%] md:w-full max-w-[460px] bg-shadow rounded mx-auto overflow-hidden">
        <div className="h-[180px]  relative bg-[url('/bg.jpeg')] bg-cover">
          <div className="absolute bg-gradient-to-r from-fern to-moss opacity-80 inset-0" />

          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-light text-muted">Welcome Back!</h1>
            <p className="text-lg text-sage font-light">
              Sign in to continue your journey!
            </p>
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
            <NavLink to={Path.PASSWORD_RESET} tabIndex={-1}>
              <p className="absolute top-[2px] right-0 text-[11px] text-mist hover:text-sage">
                Forgot password?
              </p>
            </NavLink>
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
            className="w-full mt-2 text-sage/90 font-light text-xl"
            onClick={handleSubmit}
          >
            Sign In
          </Button>

          <div className="text-center mt-4 flex items-center justify-center flex-col text-[1rem] font-light leading-4 text-white">
            <p>Dont have an account?</p>
            <NavLink to={Path.REGISTER}>
              <Button
                variant="link"
                className="flex items-center text-minor hover:text-minor/90 font-light"
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
    </MaxWidthWrapper>
  );
};
