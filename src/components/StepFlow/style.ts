import { styled } from "~/theme";

export const Root = styled("nav", {
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
});

export const List = styled("ul", {
  display: "flex",
  margin: 0,
  padding: 0,
  flex: 1,
  justifyContent: "space-between",
  flexDirection: "row",
});

export const MarkFlow = styled("div", {
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$white",
  zIndex: 9,
  backgroundColor: "$mediumGray",
  fontWeight: "500",
  fontX: "$body4",
});

export const Item = styled("li", {
  display: "flex",
  alignItems: "center",
  fontWeight: "600",
  margin: "5px 0",
  position: "relative",

  "&:before": {
    left: 0,
    transform: "translate(-90%,0)",
    backgroundColor: "$mediumGray",
    content: "",
    width: "130px",
    height: "2px",
    position: "absolute",
  },

  "&:first-child:before": {
    content: "unset",
  },

  variants: {
    active: {
      true: {
        "&:before": {
          backgroundColor: "$pastureGreen",
        },
        [`${MarkFlow}`]: {
          backgroundColor: "$pastureGreen",
        },
      },
    },
  },
});
