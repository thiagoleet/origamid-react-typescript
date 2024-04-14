import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ label, setState, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={props.id}>{label}</label>
      <input
        id={props.id}
        name={props.id}
        type="text"
        onChange={({ currentTarget }) => setState(currentTarget.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
