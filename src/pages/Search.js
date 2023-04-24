import { useState } from "react";
import { Box, HStack, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import SearchResults from "../components/SearchResults";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const handleChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        axios({
            method: "get",
            url: "http://localhost:3000/search/",
            params: {
                search_term: searchTerm,
            },
        })
            // .get(`http://localhost:3000/search/?search_term=${searchTerm}`)
            .then((response) => {
                console.log(response);
                let items = response.data.results.map((item) => {
                    return {
                        name: item.premise_name,
                        score: item.score_recent,
                        grade: item.grade_recent,
                        date: item.date_recent,
                        address: item.premise_address,
                        city: item.premise_city,
                        state: item.premise_state,
                        zip: item.premise_zip,
                    };
                });
                console.log(items);
                setResults(items);
            });
    };
    return (
        <>
            <Box w="full">
                <Box>
                    <form onSubmit={handleSearch}>
                        <HStack>
                            <Input
                                placeholder="Search for a restaurant by name"
                                size="lg"
                                onChange={handleChangeSearchTerm}
                                value={searchTerm}
                            />
                            <Button
                                size="lg"
                                onClick={handleSearch}
                                type="submit"
                            >
                                Search
                            </Button>
                        </HStack>
                    </form>
                </Box>
                {results.length} results found
                <SearchResults items={results} />
            </Box>
        </>
    );
};

export default Search;
