import React from "react";
import { Text, Table, Button } from "@chakra-ui/react";
import Address from "../Address";
import { SearchResultProps } from "../../inc/typescript/interfaces";

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
}: SearchResultProps) => {
  return (
    <Table.Row>
      <Table.Cell textAlign="center">
        <Text variant={grade === "C" ? "gradeLetterC" : "gradeLetterA"}>
          {grade}
        </Text>
        <Text variant={grade === "C" ? "gradeC" : "gradeA"}>{score}</Text>
      </Table.Cell>
      <Table.Cell>
        <Button
          variant="link"
          onClick={() => {
            handleItemClick({
              itemEstablishmentId: establishment_id,
              itemInspectionId: inspection_id,
              itemName: name,
            });
            onOpen();
          }}
          maxWidth={{ sm: "150px", md: "250px", lg: "100%" }}
          whiteSpace="normal"
          blockSize="auto"
          textAlign="left"
        >
          {name}
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Address address={address} city={city} state={state} zip={zip} />
      </Table.Cell>
      <Table.Cell>{new Date(date).toLocaleDateString("en-us")}</Table.Cell>
    </Table.Row>
  );
};

export default SearchResult;
