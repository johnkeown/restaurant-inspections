import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import SearchResults from "../components/SearchResults";

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    const doSearch = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/dangerZone`)
            .then((response) => {
                let items = response.data.results.map((item) => {
                    return {
                        establishment_id: item.EstablishmentID,
                        inspection_id: item.InspectionID,
                        name: item.EstablishmentName,
                        score: item.score,
                        grade: item.Grade,
                        date: item.InspectionDate,
                        address: item.Address,
                        address2: item.Address2,
                        city: item.City,
                        state: item.State,
                        zip: item.Zip,
                    };
                });
                setSearchResults(items);
            });
    };
    useEffect(() => {
        doSearch();
    }, []);
    return (
        <>
            <Box w="full" paddingLeft={2} paddingRight={2}>
                <Text>
                    {searchResults.length} inspections found with a "C" grade
                </Text>
                <SearchResults items={searchResults} />
            </Box>
        </>
    );
};

export default Search;
