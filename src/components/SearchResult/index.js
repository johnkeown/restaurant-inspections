import React from "react";
import { Text, Tr, Td, Button } from "@chakra-ui/react";
import Address from "../Address";

const SearchResult = ({
    handleItemClick,
    onOpen,
    establishment_id,
    inspection_id,
    name,
    score,
    grade,
    date,
    address,
    city,
    state,
    zip,
}) => {
    return (
        <Tr>
            <Td textAlign="center">
                <Text variant={grade === "C" ? "gradeLetterC" : "gradeLetterA"}>
                    {grade}
                </Text>
                <Text variant={grade === "C" ? "gradeC" : "gradeA"}>
                    {score}
                </Text>
            </Td>
            <Td>
                <Button
                    variant="link"
                    onClick={() => {
                        handleItemClick(establishment_id, inspection_id, name);
                        onOpen();
                    }}
                    maxWidth={{ sm: "150px", md: "250px", lg: "100%" }}
                    whiteSpace="normal"
                    blockSize="auto"
                    textAlign="left"
                >
                    {name}
                </Button>
            </Td>
            <Td>
                <Address
                    address={address}
                    city={city}
                    state={state}
                    zip={zip}
                />
            </Td>
            <Td>{new Date(date).toLocaleDateString("en-us")}</Td>
        </Tr>
    );
};

export default SearchResult;
