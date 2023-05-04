import Violation from "../Violation";
import { Table, Tr, Th, Thead, Tbody } from "@chakra-ui/react";

const Violations = ({ items }) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Description</Th>
                    <Th>Critical?</Th>
                    <Th>Comments</Th>
                </Tr>
            </Thead>
            <Tbody>
                {items &&
                    items.map((item, i) => (
                        <Violation
                            key={i}
                            description={item.description}
                            critical={item.critical}
                            comments={item.comments}
                        />
                    ))}
            </Tbody>
        </Table>
    );
};

export default Violations;
