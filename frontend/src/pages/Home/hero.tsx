import { Button } from "@components/ui/button";
import { project } from "@constants";
import { NavLink } from "react-router-dom";
import { mockLobbyCountDownTimer, Path } from "@models";
import { LoginSimplified } from "@pages/auth/login-simplified";
import { GradientText } from "@components/common/gradient-text";
import { CountdownTimer } from "@components/timer/countdown-timer";
import { Modal } from "@components/common/Modal";
import { useState } from "react";
import { ReserveSpotModal } from "./reserve-spot-modal";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between gap-4 mt-[6rem] mb-[4rem] h-full">
      <div className="flex flex-col justify-center items-center grow">
        <h1 className="text-7xl ">{project.best}</h1>
        {/* <h1 className='text-3xl text-gray-300'>{project.record}</h1> */}

        <div className="mt-[4rem] flex flex-col items-center gap-8 ">
          <CountdownTimer expiryDateTime={mockLobbyCountDownTimer} />
          <small className="text-gray-200">
            Kick off the new year with our exclusive <span>90 day</span>{" "}
            challenge
          </small>
          <Button
            color="major"
            variant="outlined"
            className="px-[4rem] py-[2rem] rounded-full flex flex-col items-center"
            onClick={() => setIsOpen(true)}
          >
            <span>Reserve Your Spot Now</span>
            {/* <GradientText
                text="Reserve your spot"
                bgcolor1="#a3ff84"
                bgcolor2="#a3ff84"
                bgcolor3="#a3ff84"
              /> */}
          </Button>
        </div>
      </div>

      <div className="">
        <div className="size-[500px] border border-grass rounded-md">
          <LoginSimplified />
        </div>
      </div>

      <ReserveSpotModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
