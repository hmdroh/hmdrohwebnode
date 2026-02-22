import React from "react";
import { Front, Back } from "./MakeFlip";

export default function Results() {
  const [shouldShowResult, setShouldShowResult] = React.useState(true);
  const [shouldShowReport, setShouldShowReport] = React.useState(false);

  const toggle = () => {
    setShouldShowResult(shouldShowReport);
    setShouldShowReport(shouldShowResult);
  };

  return (
    <div>
      <div>
        {shouldShowResult ? <Front /> : null}
        {shouldShowReport ? <Back /> : null}
      </div>
      <button type="button" onClick={toggle}>
        toggle
      </button>
    </div>
  );
}

