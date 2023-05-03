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
