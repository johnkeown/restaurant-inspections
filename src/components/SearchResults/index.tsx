import { useState } from "react";
import SearchResult from "../SearchResult";
import InspectionDetailsModal from "../InspectionDetailsModal/index.js";
import { Button, Table, Dialog, useDisclosure } from "@chakra-ui/react";
import ReactGA from "react-ga4";
import {
  SearchResultsProps,
  HandleEstablishmentClickFunction,
} from "../../inc/typescript/interfaces.tsx";

const SearchResults = ({ items }: SearchResultsProps) => {
  const [establishmentId, setEstablishmentId] = useState<number | null>(null);
  const [inspectionId, setInspectionId] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleItemClick = (fn: HandleEstablishmentClickFunction) => {
    // log event in Google Analytics
    ReactGA.event("view_establishment_details", {
      establishment_id: fn.itemEstablishmentId,
      inspection_id: fn.itemInspectionId,
      establishment_name: fn.itemName,
    });

    // set state values
    setEstablishmentId(fn.itemEstablishmentId);
    setInspectionId(fn.itemInspectionId);
  };

  return (
    <>
      <Table.Root variant="striped">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader width="71px">Grade</Table.ColumnHeader>
            <Table.ColumnHeader>Restaurant Name</Table.ColumnHeader>
            <Table.ColumnHeader>Address</Table.ColumnHeader>
            <Table.ColumnHeader>Date</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items &&
            items.map((item, i) => (
              <SearchResult
                handleItemClick={handleItemClick}
                onOpen={onOpen}
                key={i}
                establishment_id={item.establishment_id}
                inspection_id={item.inspection_id}
                name={item.name}
                score={item.score}
                grade={item.grade}
                date={item.date}
                address={item.address}
                city={item.city}
                state={item.state}
                zip={item.zip}
              />
            ))}
        </Table.Body>
      </Table.Root>
      <Dialog.Root size="xl" isOpen={isOpen} onClose={onClose}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>Inspection Details</Dialog.Header>
            <Dialog.CloseTrigger />
            <Dialog.Body>
              <InspectionDetailsModal
                establishmentId={establishmentId}
                inspectionId={inspectionId}
              />
            </Dialog.Body>
            <Dialog.Footer>
              <Button onClick={onClose}>Close</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};

export default SearchResults;
