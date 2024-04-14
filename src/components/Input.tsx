import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={props.id}>
        {label}
        <input id={props.id} name={props.id} type="text" {...props} />
      </label>
    </div>
  );
};

export default Input;
