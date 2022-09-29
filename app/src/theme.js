import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
    palette: {
        primary: {
            main: "#444",
        },
        secondary: {
            main: "#000",
        },
        error: {
            main: "#b00020",
        },
        text: {
            primary: "#000",
            secondary: "#6F6F6F",
            disabled: "#CCCCCC",
        },
        background: {
            default: "#FFF",
            primary: "#000",
            secondary: "#6F6F6F",
            highlight: "#FFF",
            info: "#F5F5F5",
        },
        action: {
            disabledBackground: "#5A87A0",
            disabled: "#B9D7E6",
        },
        link: {
            main: "#0076A9",
        },
    },
    typography: {
        fontFamily: "Montserrat",
        h1: {
            fontSize: "30px",
            fontWeight: "normal",
            lineHeight: "normal",
            letterSpacing: "10px",
        }
    }
});

export default theme;