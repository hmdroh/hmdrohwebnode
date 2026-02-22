import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";
import { ClockIcon } from "lucide-react";
export function TimeClock() {
  const [time, setTime] = useState(() => moment().clone().toLocaleString());
  const [is12HourFormat, setIs12HourFormat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().clone().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="momentTimer">
      <div className="momentTimerContent">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setIs12HourFormat(!is12HourFormat)}
          className="momentTimerText"
        >
          <ClockIcon
          className="momentIcon"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          {moment(time).format(is12HourFormat ? "h:mm:ss A" : "HH:mm:ss")}
        </div>
        <div>
          {moment(time).format("dddd, MMMM D, YYYY")}
        </div>
      </div>
    </div>
  );
}
