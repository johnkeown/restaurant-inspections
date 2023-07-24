import { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import axios from "axios";
import SearchResults from "../components/SearchResults";
import { SearchResultResponse } from "../inc/typescript/interfaces";

const Latest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [latestItems, setLatestItems] = useState([]);

    const getLatest = () => {
        setIsLoading(true);
        axios
            .get(`${process.env.REACT_APP_API_URL}/latest`)
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
                setLatestItems(items);
                setIsLoading(false);
            });
    };
    useEffect(() => {
        getLatest();
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
                        Showing the latest {latestItems.length} inspections
                        <SearchResults items={latestItems} />
                    </>
                )}
            </Box>
        </>
    );
};

export default Latest;
