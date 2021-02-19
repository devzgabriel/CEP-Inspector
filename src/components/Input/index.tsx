import React from "react";

import { TextInput } from "./styles";

interface InputInterface {
  placeholder: string;
  ref: any;
}

export default function Input({ placeholder, ref }: InputInterface) {
  return <TextInput placeholder={placeholder} ref={ref} />;
}
