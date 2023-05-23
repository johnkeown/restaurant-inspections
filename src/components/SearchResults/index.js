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

const SearchResults = ({ items }) => {
    const [establishmentId, setEstablishmentId] = useState(null);
    const [inspectionId, setInspectionId] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleItemClick = (itemEstablishmentId, itemInspectionId) => {
        console.log("establishmentId:  " + itemEstablishmentId);
        console.log("inspectionId:  " + itemInspectionId);
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
