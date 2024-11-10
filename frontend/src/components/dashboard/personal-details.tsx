import React from "react";
import {
  useForm,
  createValidationSchema,
  resolver,
  v,
} from "@utils/formValidation";

// import FemaleIcon from "../../assets/images/female.svg?react";
// import MaleIcon from "../../assets/images/male.svg?react";

import { Label } from "@components/ui/label";
import { InputText } from "@components/ui/input-text";
import { ErrorMessage } from "@components/ui/error-message";

interface FormDetails {
  firstname: string;
  lastname: string;
  email: string;
  dob: string;
  gender: "male" | "female" | null;
  goal: string;
}

export default function PersonDetails() {
  const initialState: FormDetails = {
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    gender: null,
    goal: "",
  };

  const validationSchema = createValidationSchema({
    firstname: v.required().string(),
    lastname: v.required().string(),
    email: v.required().string().minLength(3),
    dob: v.required().string(),
    gender: v.required().string(),
    goal: v.required().string().minLength(3),
  });

  const { formData, formErrors, handleChange } = useForm<FormDetails>({
    initialState: initialState,
    validationSchema: validationSchema,
    validatorFn: resolver,
    onSubmit: handleSubmit,
  });

  async function handleSubmit() {
    // try {
    //   await login(formData).unwrap();
    //   // set cookie
    //   navigate(Path.SETTINGS);
    //   console.log("Login successful. Redirecting...");
    // } catch (error: any) {
    //   if (error.status === 401) {
    //     setInvalidCredentials(true);
    //   }
    //   console.error("Error during login:", error);
    // }
  }

  return (
    <div>
      <h1>Person Details</h1>

      <Label value="Email" htmlFor="email">
        <InputText
          id="email"
          type="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
        />
        <ErrorMessage message={formErrors.email.errorMessage} />
      </Label>
    </div>
  );
}
