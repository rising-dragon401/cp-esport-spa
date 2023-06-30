import { FormLabel, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { DivTextInputContainer } from "./styles";

type Props = {
  value: string;
  name?: string;
  label: string;
  helperText?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};

function TextInput({ label, helperText, value, name, onChange }: Props) {
  return (
    <DivTextInputContainer>
      <FormLabel>{label}:</FormLabel>
      <TextField
        value={value}
        name={name}
        onChange={onChange}
        variant="outlined"
        helperText={helperText}
      />
    </DivTextInputContainer>
  );
}

export default TextInput;
