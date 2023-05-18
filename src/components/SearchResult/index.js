import React from "react";
import { Tr, Td, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Address from "../Address";

const SearchResult = ({
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
                <Link
                    as={RouterLink}
                    to="/inspection-details"
                    state={{
                        establishment_id: establishment_id,
                        inspection_id: inspection_id,
                    }}
                >
                    {name}
                </Link>
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
