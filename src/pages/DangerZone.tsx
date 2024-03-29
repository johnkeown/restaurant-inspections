import { useState, useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import SearchResults from "../components/SearchResults";
import { SearchResultResponse } from "../inc/typescript/interfaces";

const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const doSearch = () => {
        setIsLoading(true);
        axios
            .get(`${process.env.REACT_APP_API_URL}/dangerZone`)
            .then((response) => {
                let items = response.data.results.map(
                    (item: SearchResultResponse) => {
                        return {
                            establishment_id: item.EstablishmentID,
                            inspection_id: item.InspectionID,
                            name: item.EstablishmentName,
                            score: item.score,
                            grade: item.Grade,
                            date: item.InspectionDate,
                            address: item.Address,
                            city: item.City,
                            state: item.State,
                            zip: item.Zip,
                        };
                    }
                );
                setSearchResults(items);
                setIsLoading(false);
            });
    };
    useEffect(() => {
        doSearch();
    }, []);
    return (
        <>
            <Box w="full" paddingLeft={2} paddingRight={2}>
                {isLoading && (
                    <Box w="full" textAlign="center">
                        <Image
                            marginLeft="auto"
                            marginRight="auto"
                            src="/Spinner.svg"
                        />
                    </Box>
                )}
                {!isLoading && (
                    <>
                        <Text>
                            {searchResults.length} inspections found with a "C"
                            grade
                        </Text>
                        <SearchResults items={searchResults} />
                    </>
                )}
            </Box>
        </>
    );
};

export default Search;
