import React, { useState } from "react";
import Autocomplete from "./auto-complete";
import { DatePicker } from "./date-picker";
import { getMonthsArray } from "@utils";
import dayjs from "dayjs";
import { ChevronDownIcon } from "@components/icons";

export const AutoCompleteDate = () => {
  const currentYear = dayjs().year();
  const currentMonth = dayjs().month();
  const currentYearMonths = getMonthsArray(currentYear);
  const nextYearMonths = getMonthsArray(currentYear + 1);
  const previousYearMonths = getMonthsArray(currentYear - 1);

  const [activeMonth, setActiveMonth] = useState(currentMonth);
  const [activeYear, setActiveYear] = useState(currentYear);
  const [datePickerState, setDatePickerState] = useState(currentYearMonths);

  const options = Array.isArray(datePickerState)
    ? datePickerState.map((x) => ({ label: x.label, value: x.label }))
    : [];

  const handleLabelChange = (newLabel: string) => {
    setDatePickerState((prev) => ({
      label: prev.label,
      value: prev.label,
    }));
  };

  return (
    <div>
      <DatePicker
        type="date"
        id="startDate"
        value={datePickerState[activeMonth].startDate}
        onChange={(e) =>
          setDatePickerState((prev) => ({ ...prev, startDate: e.target.value }))
        }
      />

      <div>
        <p>Change Year</p>
        <div>{currentYear}</div>
        <ChevronDownIcon className="transform rotate-90 h-[2rem] w-[2rem]" />
        <ChevronDownIcon className="h-[2rem] w-[2rem]" />
      </div>

      {/* <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={datePickerState.endDate}
          onChange={(e) =>
            setDatePickerState((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div> */}

      <Autocomplete
        value={datePickerState[currentMonth].label ?? ""}
        options={options}
        onChange={handleLabelChange}
        placeholder="Select a week"
      />
    </div>
  );
};
