import { useState } from "react";
import SearchResult from "../SearchResult";
import InspectionDetailsModal from "../InspectionDetailsModal/index.js";
import {
    Button,
    Table,
    Tr,
    Th,
    Thead,
    Tbody,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
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
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th width="71px">Grade</Th>
                        <Th>Restaurant Name</Th>
                        <Th>Address</Th>
                        <Th>Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
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
                </Tbody>
            </Table>
            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Inspection Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <InspectionDetailsModal
                            establishmentId={establishmentId}
                            inspectionId={inspectionId}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default SearchResults;
