import { useState } from "react";
import SearchResult from "../SearchResult";
import InspectionDetailsModal from "../InspectionDetailsModal";
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

const SearchResults = ({ items }) => {
    const [establishmentId, setEstablishmentId] = useState(null);
    const [inspectionId, setInspectionId] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleItemClick = (
        itemEstablishmentId,
        itemInspectionId,
        itemName
    ) => {
        // log event in Google Analytics
        ReactGA.event("view_establishment_details", {
            establishment_id: itemEstablishmentId,
            inspection_id: itemInspectionId,
            establishment_name: itemName,
        });

        // set state values
        setEstablishmentId(itemEstablishmentId);
        setInspectionId(itemInspectionId);
    };

    return (
        <>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Address</Th>
                        <Th>Date</Th>
                        <Th>Grade</Th>
                        <Th>Score</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {items &&
                        items.map((item, i) => (
                            <SearchResult
                                handleItemClick={handleItemClick}
                                onOpen={onOpen}
                                onClose={onClose}
                                key={i}
                                establishment_id={item.establishment_id}
                                inspection_id={item.inspection_id}
                                name={item.name}
                                score={item.score}
                                grade={item.grade}
                                date={item.date}
                                address={item.address}
                                address2={item.address2}
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
