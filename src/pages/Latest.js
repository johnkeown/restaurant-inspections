import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import SearchResults from "../components/SearchResults";

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    const doSearch = () => {
        axios.get(`https://api.johnkeown.com/latest.php`).then((response) => {
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
            setSearchResults(items);
        });
    };
    useEffect(() => {
        doSearch();
    });
    return (
        <>
            <Box w="full" paddingLeft={2} paddingRight={2}>
                Showing the latest {searchResults.length} inspections
                <SearchResults items={searchResults} />
            </Box>
        </>
    );
};

export default Search;
