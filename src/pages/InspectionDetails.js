import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import SearchResults from "../components/SearchResults";

const InspectionDetails = () =>
    //     {
    //     premise_name,
    //     premise_address = "",
    //     premise_city,
    //     premise_state,
    //     premise_zip,
    //     inspection_date,
    // }
    {
        const location = useLocation();
        const {
            premise_name,
            premise_address,
            premise_city,
            premise_state,
            premise_zip,
            inspection_date,
        } = location.state;
        const [violations, setViolations] = useState([]);
        const getVioloations = () => {
            let premise_address_number = premise_address.split(" ")[0];
            let premise_address_street = premise_address.substring(
                premise_address.indexOf(" ") + 1
            );
            axios
                .get(
                    `https://api.johnkeown.com/violations.php?premise_name=${premise_name}&premise_address_number=${premise_address_number}&premise_address_street=${premise_address_street}&premise_city=${premise_city}&premise_state=${premise_state}&premise_zip=${premise_zip}&inspection_date=${inspection_date}`
                )
                .then((response) => {
                    let items = response.data.results.map((item) => {
                        return {
                            description: item.violation_desc,
                            critical: item.critical_yn,
                            comments: item.insp_viol_comments,
                        };
                    });
                    setViolations(items);
                });
        };
        useEffect(() => {
            getVioloations();
        }, []);
        return (
            <>
                <Box w="full" paddingLeft={2} paddingRight={2}>
                    Showing the latest {violations.length} inspections
                    <SearchResults items={violations} />
                </Box>
            </>
        );
    };

export default InspectionDetails;
