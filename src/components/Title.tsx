import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl">{title}</h2>
        <div className="h-[0.3rem] w-[60%] bg-blue-900"></div>
      </div>
    </div>
  );
};

export default Title;
