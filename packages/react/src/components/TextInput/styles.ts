import { styled } from "../../styles";

export const TextInputContainter = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  display: "flex",
  border: "2px solid $gray900",
  alignItems: "baseline",

  "&:has(input:focus)": {
    borderColor: "$ignite300",
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});
export const Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular",
});
export const Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "White",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: 0,
  },
  "&:disabled": {
    cursor: "not-allowed",
  },
  "&:placeholder": {
    colort: "$gray400",
  },
});
