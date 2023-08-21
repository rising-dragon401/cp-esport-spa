import { styled } from "styled-components";

export const DivTextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 5px;

  .MuiTextField-root {
    width: 100%;
  }
  .MuiInputBase-input {
    background: #fff;
    border-radius: 5px;
  }
  .MuiFormLabel-root {
    color: #ddd;
  }
  .MuiFormHelperText-root {
    color: #ddd;
  }
  .MuiFormHelperText-root.Mui-error {
    color: #d32f2f;
  }
`;
