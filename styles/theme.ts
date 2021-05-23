import { extendTheme } from "@chakra-ui/react";

const FontFamily: string = "Sora";

const theme = extendTheme({
  fonts: {
    body: FontFamily,
    heading: FontFamily,
    mono: FontFamily,
  },
  colors: {
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
