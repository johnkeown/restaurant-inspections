import React from "react";
import { Box } from "@chakra-ui/react";

const Address = ({ address, city, state, zip }) => {
    return (
        <>
            <Box>{address}</Box>
            <Box>
                {city}, {state} {zip}
            </Box>
        </>
    );
};

export default Address;
