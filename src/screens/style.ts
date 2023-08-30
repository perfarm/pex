import { Button } from "~/components/Button";
import { TextField } from "~/components/TextField";
import { Typography } from "~/components/Typography";
import { styled } from "~/theme";

export const Root = styled("div", {
  backgroundColor: "$lighterGray",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Container = styled("div", {
  marginTop: "30px",
  justifyContent: "center",
  backgroundColor: "$white",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  boxShadow:
    "0px 2px 8px 2px rgba(73, 73, 73, 0.06), 0px 14px 28px -9px rgba(0, 0, 0, 0.12)",

  borderRadius: "20px",
  width: "100%",
  maxWidth: "$minScreenWidth",
});

export const Line = styled("div", {
  backgroundColor: "Green",
  height: "30px",
  display: "flex",
});

export const Input = styled(TextField, {
  marginTop: "30px",
});

export const Title = styled(Typography, {
  whiteSpace: "nowrap",
});

export const ButtonNext = styled(Button, {
  marginTop: "30px",
});
