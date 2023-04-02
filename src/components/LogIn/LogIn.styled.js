import ButtonUnstyled from "@mui/base/ButtonUnstyled";

import styled from "@emotion/styled";

export const InputAdornment = styled("div")`
  // margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const IconButton = styled(ButtonUnstyled)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: #a0aec0;
`;

export const ButtonCustom = styled(ButtonUnstyled)`
  height: 56px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 16px;
  border-radius: 12px;
  background-color: #28293d;
  font-size: 16px;
  color: #fff;
  border: 1px solid rgba(40, 41, 61, 1);
  outline: none;
  box-shadow: none;
  text-transform: none;
  &:hover {
    background-color: #121212;
  }
  &:active {
    background-color: #121212;
  }
  &:focus {
    background-color: #121212;
  }
`;
