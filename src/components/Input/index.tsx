import React from "react";

import { TextInput } from "./styles";

interface InputInterface {
  placeholder: string;
  value: any;
  onChange: any;
  maxLength?: number;
}

export default function Input({
  placeholder,
  value,
  onChange,
  maxLength,
}: InputInterface) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
}
