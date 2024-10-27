import { Button } from "@components/ui/button";
import { project } from "@constants";
import { mockLobbyCountDownTimer, Path } from "@models";
import { LoginSimplified } from "@pages/auth/login-simplified";
import { CountdownTimer } from "@components/timer/countdown-timer";
import { useState } from "react";
import { ReserveSpotModal } from "./my-reserve-spot-modal";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mt-[2rem] md:mt-[6rem] mb-[4rem] h-full">
      <div className="flex flex-col justify-center items-center grow">
        <h1 className="text-[1.8rem] px-2 text-sage md:text-7xl text-center md:text-left">{project.best}</h1>
        {/* <h1 className='text-3xl text-gray-300'>{project.record}</h1> */}

        <div className="mt-[2rem] md:mt-[4rem] flex flex-col items-center gap-2 md:gap-8">
          <CountdownTimer expiryDateTime={mockLobbyCountDownTimer} />
          <div className="text-muted text-[1.4rem] px-8 text-center md:text-left">
            Kick off the new year with our exclusive <span>90 day</span>{" "}
            challenge
          </div>
          <Button
            color="major"
            variant="outlined"
            className="text-2xl md:text-4xl md:px-[4rem] md:py-[2rem] rounded-full flex flex-col items-center"
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
        <div className="m-2 md:m-0 size:-[3320px] md:size-[500px] border border-grass rounded-md">
          <LoginSimplified />
        </div>
      </div>

      <ReserveSpotModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
