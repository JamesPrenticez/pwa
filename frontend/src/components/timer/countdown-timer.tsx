import React, { useState, useEffect, ReactElement } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

interface Props {
  expiryDateTime: string;
}

export const CountdownTimer = ({ expiryDateTime }: Props) => {
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const melbourneTimeZone = "Australia/Melbourne";

    const calculateTimeLeft = () => {
      const now = dayjs().tz(melbourneTimeZone);
      const targetDate = dayjs(expiryDateTime).tz(melbourneTimeZone);
      const delta = targetDate.diff(now);

      if (delta > 0) {
        const days = targetDate.diff(now, "day");
        const hours = targetDate.subtract(days, "day").diff(now, "hour");
        const minutes = targetDate
          .subtract(days, "day")
          .subtract(hours, "hour")
          .diff(now, "minute");
        const seconds = targetDate
          .subtract(days, "day")
          .subtract(hours, "hour")
          .subtract(minutes, "minute")
          .diff(now, "second");

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [expiryDateTime]);

  const { days, hours, minutes, seconds } = timeRemaining;

  // Determine which time values to display (3 values at a time)
  let displayValues: any[] = [];
  let displayUnits: any[] = [];

  if (days > 0) {
    displayValues = [days, hours, minutes];
    displayUnits = [
      getUnit(days, "day"),
      getUnit(hours, "hour"),
      getUnit(minutes, "minute"),
    ];
  } else if (hours > 0) {
    displayValues = [hours, minutes, seconds];
    displayUnits = [
      getUnit(hours, "hour"),
      getUnit(minutes, "minute"),
      getUnit(seconds, "second"),
    ];
  } else if (minutes > 0) {
    displayValues = [minutes, seconds, 0];
    displayUnits = [getUnit(minutes, "minute"), getUnit(seconds, "second"), ""];
  } else if (seconds > 0) {
    displayValues = [seconds, 0, 0];
    displayUnits = [getUnit(seconds, "second"), "", ""];
  }

  return (
    <div className="flex items-center justify-center">
      {displayValues.map((value, index) => (
        <DigitWrapper
          key={index}
          value={value.toString()}
          unit={displayUnits[index]}
        />
      ))}
    </div>
  );
};

// Helper function to determine the unit based on the displayed value
const getUnit = (value: number, unit: string) => {
  return value > 1 ? `${unit}s` : unit;
};

interface DigitWrapperProps {
  value: string;
  unit?: string;
}

const DigitWrapper = ({ value, unit }: DigitWrapperProps): ReactElement => {
  const digits = value.split("");

  return (
    <div className="custom-text-gradient inline-block font-semibold text-sage/80 p-4">
      <span className="inline-block">
        {digits.map((digit, index) => (
          <span
            key={index}
            className="inline-block text-center w-[4rem] text-[5rem]"
          >
            {digit}
          </span>
        ))}
      </span>
      {unit && (
        <span className="font-[300] inline-block mt-auto pr-2 text-[2rem]">
          {unit}
        </span>
      )}
    </div>
  );
};
