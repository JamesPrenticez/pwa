import {
  ChevronDownIcon,
  CrossIcon,
  MinusIcon,
  TickIcon,
} from "@components/icons";
import { dayLabels, dayLabelsMed } from "@constants";
import { Habit, LabelAndValue, WeekDetails } from "@models";
import { getWeekDateArray } from "@utils";
import dayjs from "dayjs";
import { XIcon } from "@components/icons";
import { PropsWithChildren } from "react";

interface WeeklyView {
  data: Record<string, Habit>;
  weekDetails: WeekDetails;
}
export const WeeklyView = ({ data, weekDetails }: WeeklyView) => {
  const weekDatesArray = getWeekDateArray(weekDetails.week_number); // TODO this could probs be memo'd in state

  return (
    <>
      <WeeklyHeader
        weekNumber={weekDetails.week_number}
        weekDatesArray={weekDatesArray}
      />

      <div className="flex flex-col gap-[2rem] mt-[2rem]">
        {Object.values(data).map((item, index) => (
          <div
            key={item._id + index}
            className="rounded-lg grid overflow-hidden items-center"
            style={{
              gridTemplateColumns: "30% repeat(7, 1fr)",
              gap: "1rem",
            }}
          >
            <h1
              className="overflow-hidden text-[2rem] font-light flex items-center"
              style={{
                color: item.color,
              }}
            >
              {item.title}
            </h1>

            {item.days &&
              Object.values(item.days).map((day, index) => (
                <CheckBox
                  key={day._id + "-" + index}
                  color={item.color ?? "rgb(209 213 219)"}
                  borderColor={item.color ?? "rgb(209 213 219)"}
                  checked={day.measurement?.quantity ? true : false}
                />
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

interface CheckBox {
  color: string;
  borderColor: string;
  checked: boolean;
}

const CheckBox = ({ color, checked, borderColor }: CheckBox) => {
  let icon: React.ReactNode;

  if (checked === null) icon = <MinusIcon />;
  if (checked === true) icon = <TickIcon />;
  if (checked === false) icon = <CrossIcon />;

  return (
    <div
      className="rounded-lg w-[2.2rem] h-[2.2rem]"
      style={{
        color: checked ? color : "#f87171",
        border: `solid 0.1rem ${borderColor}`,
      }}
    >
      {icon}
    </div>
  );
};

interface WeekHeaderProps {
  weekNumber: number;
  weekDatesArray: Date[];
}

const WeeklyHeader = ({ weekNumber, weekDatesArray }: WeekHeaderProps) => {
  return (
    <div
      className="grid items-center mb-[1rem] overflow-hidden"
      style={{
        gridTemplateColumns: "30% repeat(7, 1fr)",
        gap: "1rem",
      }}
    >
      <h1 className="text-[2.2rem] text-muted font-semibold">
        WEEK {weekNumber}
      </h1>

      {weekDatesArray.map((date, index) => (
        <div key={index} className="flex flex-col justify-center text-muted">
          <span className="text-[1.2rem] leading-[1.8rem] text-center">
            {dayLabelsMed[index]}
          </span>
          <span className="text-[1.8rem] leading-[2rem] text-center">
            {dayjs(date).format("D")}
          </span>
        </div>
      ))}
    </div>
  );
};
