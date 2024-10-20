import React, { useRef, useState, useEffect, ReactElement } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

type Timer = ReturnType<typeof setInterval>;

interface Props {
  expiryDateTime: string;
}

export const CountdownTimer = ({ expiryDateTime }: Props) => {
  const [timeRemaining, setTimeRemaining] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const melbourneTimeZone = "Australia/Melbourne";

    const calculateTimeLeft = () => {
      const now = dayjs().tz(melbourneTimeZone);
      const targetDate = dayjs(expiryDateTime).tz(melbourneTimeZone);
      const delta = targetDate.diff(now);

      if (delta > 0) {
        const hours = Math.floor(delta / (1000 * 60 * 60));
        const minutes = Math.floor((delta / (1000 * 60)) % 60);
        const seconds = Math.floor((delta / 1000) % 60);
        setTimeRemaining({ hours, minutes, seconds });
      } else {
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 10);

    return () => clearInterval(timer);
  }, [expiryDateTime]);

  const { hours, minutes, seconds } = timeRemaining;

  return (
    <div className="flex items-center justify-center">
      <DigitWrapper value={hours.toString().padStart(2, "0")} unit=":" />
      <DigitWrapper value={minutes.toString().padStart(2, "0")} unit=":" />
      <DigitWrapper value={seconds.toString().padStart(2, "0")} unit="" />
    </div>
  );
};

interface DigitWrapperProps {
  value: string;
  unit?: string;
}

const DigitWrapper = ({ value, unit }: DigitWrapperProps): ReactElement => {
  const digits = value.split("");

  return (
    <div className="inline-block font-semibold text-sage/80">
      <span className="inline-block ">
        {digits.map((digit, index) => (
          <span
            key={index}
            className="inline-block  text-center  w-[4rem] text-[5rem]"
          >
            {digit}
          </span>
        ))}
      </span>
      {unit && (
        <span className=" font-[300] inline-block mt-auto pr-2 text-[7rem]">
          {unit}
        </span>
      )}
    </div>
  );
};
