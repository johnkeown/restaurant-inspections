import React from "react";
import { Table } from "@chakra-ui/react";

const Violation = ({ description, critical, comments }) => {
  return (
    <Table.Row>
      <Table.Cell>{description}</Table.Cell>
      <Table.Cell>{critical}</Table.Cell>
      <Table.Cell>{comments}</Table.Cell>
    </Table.Row>
  );
};

export default Violation;
