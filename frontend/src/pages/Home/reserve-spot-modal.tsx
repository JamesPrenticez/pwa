import { Modal } from "@components/common/Modal";
import { type Dispatch, type SetStateAction } from "react";

import FemaleIcon from "../../assets/images/female.svg?react";
import MaleIcon from "../../assets/images/male.svg?react";
import { Label } from "@components/ui/label";
import { InputText } from "@components/ui/input-text";
import { ErrorMessage } from "@components/ui/error-message";

import {
  useForm,
  createValidationSchema,
  resolver,
  v,
} from "@utils/formValidation";
import { InputTextArea } from "@components/ui/input-text-area";
import { Button } from "@components/ui/button";

interface ReserveModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface FormDetails {
  firstname: string;
  lastname: string;
  email: string;
  dob: string;
  gender: "male" | "female" | null;
  goal: string;
}

export const ReserveSpotModal = ({ isOpen, setIsOpen }: ReserveModalProps) => {
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
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="h-auto top-[20%]">
      <div>
        <h4 className="text-lg font-medium text-mist">
          RESERVE YOUR SPOT FOR:
        </h4>
        <h1 className="text-5xl font-bold text-sage mb-12">
          The 90 Day Challenge!
        </h1>
        <form className="grid gap-4">
          <Label value="Why do you want to join this programme?" htmlFor="goal">
            <InputTextArea
              id="goal"
              placeholder="Quit smoking and get fit and healthy again"
              value={formData.goal}
              onChange={() => {}}
              className="focus-visible:ring-2 focus-visible:ring-major"
              autoFocus
            />
            <ErrorMessage message={formErrors.goal.errorMessage} />
          </Label>

          <div className="flex">
            <div className="flex flex-col w-full">
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
          </div>

          <Button variant="filled" color="cta" className="w-full py-4">
            Register your interest
          </Button>
        </form>
      </div>
    </Modal>
  );
};
