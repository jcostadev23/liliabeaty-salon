import React from "react";

type LabelProps = {
  htmlFor?: string;
  children: React.ReactNode;
};

const Label = ({ htmlFor, children }: LabelProps) => (
  <label className="text-sm font-medium text-zinc-700" htmlFor={htmlFor}>
    {children}
  </label>
);

export default Label;
