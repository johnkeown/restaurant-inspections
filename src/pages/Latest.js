import { useState, useEffect, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import SearchResults from "../components/SearchResults";

const Latest = () => {
    const [latestItems, setLatestItems] = useState([]);
    const getLatest = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/latest`)
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
                setLatestItems(items);
            });
    };
    useEffect(() => {
        getLatest();
    }, []);
    return (
        <>
            <Box w="full" paddingLeft={2} paddingRight={2}>
                Showing the latest {latestItems.length} inspections
                <SearchResults items={latestItems} />
            </Box>
        </>
    );
};

export default Latest;
