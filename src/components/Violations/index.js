import Violation from "../Violation";
import { Table } from "@chakra-ui/react";

const Violations = ({ items }) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Description</Table.ColumnHeader>
          <Table.ColumnHeader>Critical?</Table.ColumnHeader>
          <Table.ColumnHeader>Comments</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items &&
          items.map((item, i) => (
            <Violation
              key={i}
              description={item.description}
              critical={item.critical}
              comments={item.comments}
            />
          ))}
      </Table.Body>
    </Table.Root>
  );
};

export default Violations;
