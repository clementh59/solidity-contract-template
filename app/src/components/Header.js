import { Box } from "@mui/material";
import { ConnectKitButton } from "connectkit";
import React from "react";

const Header = () => {
    return (
        <Box display="flex" flexDirection="row-reverse" width="100vw" mt="24px">
            <Box style={{paddingRight: '24px'}}>
                <ConnectKitButton />
            </Box>
        </Box>
    );
};

export default Header;