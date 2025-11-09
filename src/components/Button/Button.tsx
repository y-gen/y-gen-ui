import React from "react";
import "./Button.css";

export const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="btn">{children}</button>
);
