"use client";

import { partySize, times } from "../../../../data";
import DatePicker from "react-datepicker";
import React, { useState } from "react";

export default function ReservationCard({
  open_time,
  close_time,
}: {
  open_time: string;
  close_time: string;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const filterTimesByRestaurantOpenWindow = () => {
    // open_time = 14:30:00.000Z
    //close_time = 21:30:00.000Z

    const timesInWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (!isWithinWindow && time.time === open_time) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesInWindow.push(time);
      }
      if (time.time === close_time) {
        isWithinWindow = false;
      }
    });

    return timesInWindow;
  };

  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make Link Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">Party size</label>
        <select name="" className="py-3 border-b font-light" id="">
          {partySize.map((size) => (
            <option value={size.value}>{size.label}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleChangeDate}
            className="py-3 border-b font-light text-reg w-28"
            dateFormat="MMM d"
            wrapperClassName="w-[48%]"
          />
          <input type="text" className="py-3 border-b font-light w-22" />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select name="" id="" className="py-3 border-b font-light">
            {filterTimesByRestaurantOpenWindow().map((time) => (
              <option value={time.time}>{time.displayTime}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Find Link Time
        </button>
      </div>
    </div>
  );
}
