import React from "react";
import { Stack, Text } from "@chakra-ui/react";

const SearchResult = ({ name, score }) => {
    return (
        <Stack direction="row">
            <Text>{name}</Text>
            <Text>{score}</Text>
        </Stack>
    );
};

export default SearchResult;
