import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Address from "../Address";

const Violation = ({ description, critical, comments }) => {
    return (
        <Tr>
            <Td>{description}</Td>
            <Td>{critical}</Td>
            <Td>{comments}</Td>
        </Tr>
    );
};

export default Violation;
