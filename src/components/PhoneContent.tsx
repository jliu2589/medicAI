import React from "react";

type PhoneProps = {
  stemi: string;
  stroke: string;
  baseHospital: string;
  dispatch: string;
};
const PhoneContent: React.FC<PhoneProps> = ({
  stemi,
  stroke,
  baseHospital,
  dispatch,
}) => {
  return (
    <div
      className="fixed left-1/2 top-1/2 z-30 flex h-[55vh] min-w-[70vw] -translate-x-1/2
-translate-y-1/2 flex-col items-center justify-center overflow-auto rounded-lg py-32  backdrop-blur-md"
    >
      <p className="mb-2">
        STEMI:{" "}
        <a className="text-blue-600" href={`tel:${stemi}`}>
          {stemi}
        </a>
      </p>
      <p className="mb-2">
        STROKE:{" "}
        <a className="text-blue-600" href={`tel:${stroke}`}>
          {stroke}
        </a>
      </p>
      <p className="mb-2">
        DISPATCH:{" "}
        <a className="text-blue-600" href={`tel:${dispatch}`}>
          {dispatch}
        </a>
      </p>
      <p className="mb-2">
        BASE HOSPITAL:{" "}
        <a className="text-blue-600" href={`tel:${baseHospital}`}>
          {baseHospital}
        </a>
      </p>
    </div>
  );
};

export default PhoneContent;
