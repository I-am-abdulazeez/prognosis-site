import { extendTheme } from "@chakra-ui/react";

const FontFamily: string = "Sora";

const theme = extendTheme({
  fonts: {
    body: FontFamily,
    heading: FontFamily,
    mono: FontFamily,
  },
  textStyles: {
    defaultText: {
      lineHeight: "1.7",
      fontSize: ["sm", "15px"],
    },
  },
  colors: {
    primary: {
      50: "#e3ffe2",
      100: "#b9fbb4",
      200: "#8ef985",
      300: "#63f756",
      400: "#3af429",
      500: "#24db14",
      600: "#19aa0c",
      700: "#0f7a06",
      800: "#054901",
      900: "#001900",
    },
    secondary: {
      50: "#deffe9",
      100: "#b3fac9",
      200: "#86f6a9",
      300: "#57f286",
      400: "#2aee65",
      500: "#11d54c",
      600: "#05a63a",
      700: "#007628",
      800: "#004816",
      900: "#001a01",
    },
    success: {
      50: "#ddfff6",
      100: "#b4f9e8",
      200: "#88f4d9",
      300: "#5cf0ca",
      400: "#33ebbb",
      500: "#1dd2a1",
      600: "#0fa37d",
      700: "#03755a",
      800: "#004735",
      900: "#001911",
    },
    error: {
      50: "#ffe6e6",
      100: "#f7bdbd",
      200: "#ec9494",
      300: "#e2696b",
      400: "#d93f40",
      500: "#c02627",
      600: "#961d1d",
      700: "#6b1315",
      800: "#43090a",
      900: "#1d0000",
    },
  },
});

export default theme;
