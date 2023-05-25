import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
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
            <Td>
                <Button
                    variant="link"
                    onClick={() => {
                        handleItemClick(establishment_id, inspection_id, name);
                        onOpen();
                    }}
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
            <Td>{grade}</Td>
            <Td>{score}</Td>
        </Tr>
    );
};

export default SearchResult;
