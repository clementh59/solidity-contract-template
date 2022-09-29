import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";
import {withTheme} from "@emotion/react";

const Loader = () => {
    return (
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' width='100%' height='100%'>
            <CircularProgress/>
        </Box>
    );
}

export default withTheme(Loader);