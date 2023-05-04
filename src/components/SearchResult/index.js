import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
            <Td>{date}</Td>
            <Td>{grade}</Td>
            <Td>{score}</Td>
        </Tr>
    );
};

export default SearchResult;
