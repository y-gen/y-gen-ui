import { forwardRef, type ReactNode } from 'react';
import './Button.css';

export const Button = forwardRef<HTMLButtonElement, { children: ReactNode }>(
  ({ children, ...props }, ref) => (
    <button ref={ref} {...props} className="btn">
      {children}
    </button>
  ),
);
