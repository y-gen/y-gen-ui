import type { ChangeEvent } from "react";
import "./Input.css";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Input = ({ value, onChange, placeholder }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className="input"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
