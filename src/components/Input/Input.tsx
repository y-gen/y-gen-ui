import { forwardRef } from 'react';
import './Input.css';

interface InputProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value = '', onValueChange = () => {}, placeholder = '', ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange(e.target.value);
    };

    return (
      <input
        className="input"
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
