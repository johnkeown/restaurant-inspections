import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Address from "../Address";

const SearchResult = ({
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
                        premise_name: name,
                        premise_address: address,
                        premise_city: city,
                        premise_state: state,
                        premise_zip: zip,
                        inspection_date: date,
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
