import { Button } from "@components/ui/button";
import { project } from "@constants";
import { NavLink } from "react-router-dom";
import { mockLobbyCountDownTimer, Path } from "@models";
import { LoginSimplified } from "@pages/auth/login-simplified";
import { GradientText } from "@components/common/gradient-text";
import { CountdownTimer } from "@components/timer/countdown-timer";

export const Hero = () => {
  return (
    <div className="flex justify-between gap-4 mt-12 h-full">
      <div className="flex flex-col justify-center items-center grow">
        <h1 className="text-7xl ">{project.best}</h1>
        {/* <h1 className='text-3xl text-gray-300'>{project.record}</h1> */}

        <div className="mt-12">
          <CountdownTimer expiryDateTime={mockLobbyCountDownTimer} />
          <NavLink to={Path.REGISTER}>
            <Button
              color="major"
              variant="outlined"
              className="px-8 py-2 rounded-full"
            >
              <GradientText
                text="Get Started Today"
                bgcolor1="#a3ff84"
                bgcolor2="#a3ff84"
                bgcolor3="#a3ff84"
              />
            </Button>
          </NavLink>
        </div>
      </div>

      <div className="">
        <div className="size-[500px] border border-grass rounded-md">
          <LoginSimplified />
        </div>
      </div>
    </div>
  );
};
