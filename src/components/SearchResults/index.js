import SearchResult from "../SearchResult";
import { Table, Tr, Th, Thead, Tbody } from "@chakra-ui/react";

const SearchResults = ({ items }) => {
    return (
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
    );
};

export default SearchResults;
