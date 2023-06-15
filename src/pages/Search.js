import { useState } from "react";
import { Box, HStack, Input, Button, Image } from "@chakra-ui/react";
import axios from "axios";
import ReactGA from "react-ga4";
import SearchResults from "../components/SearchResults";

const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // log event in Google Analytics
        if (process.env.NODE_ENV === "production")
            ReactGA.event("search", { search_term: searchTerm });

        // perform search against API
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/search`,
            params: {
                search_term: searchTerm,
            },
        }).then((response) => {
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
            setResults(items);
            setIsLoading(false);
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
                        {results.length} results found
                        <SearchResults items={results} />
                    </>
                )}
            </Box>
        </>
    );
};

export default Search;
