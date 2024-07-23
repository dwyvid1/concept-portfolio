import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#418e3e',
      },
    },

    typography: {
      fontFamily: 'Helvetica Neue',
            // '-apple-system',
            // 'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'Roboto',
            // '"Helvetica Neue"',
            // 'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
    },
  });

  theme = responsiveFontSizes(theme);

  export default theme;