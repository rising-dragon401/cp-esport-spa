import { FormLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { DivTextInputContainer } from "./styles";
import { Option } from "@/providers/types";

type Props = {
  label: string;
  value: string;
  name?: string;
  options: Option[];
  onChange: (event: SelectChangeEvent) => void;
};

function SelectInput({ label, value, name, options, onChange }: Props) {
  return (
    <DivTextInputContainer>
      <FormLabel>{label}:</FormLabel>
      <Select
        labelId="demo-simple-select-label"
        value={value}
        name={name}
        onChange={onChange}
      >
        {options.map((option, idx) => (
          <MenuItem key={idx} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </DivTextInputContainer>
  );
}

export default SelectInput;
