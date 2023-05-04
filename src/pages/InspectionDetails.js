import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import Violation from "../components/Violations";

const InspectionDetails = () => {
    const [inspectionViolations, setInspectionViolations] = useState([]);

    const location = useLocation();
    const { establishment_id, inspection_id } = location.state;

    useEffect(() => {
        getInspectionVioloations();
    }, [establishment_id, inspection_id]);

    const getInspectionVioloations = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/violations`,
            params: {
                establishment_id: establishment_id,
                inspection_id: inspection_id,
            },
        }).then((response) => {
            let items = response.data.results.map((item) => {
                return {
                    description: item.ViolationDesc,
                    critical: item.critical_yn,
                    comments: item.Insp_Viol_Comments,
                };
            });
            setInspectionViolations(items);
        });
    };

    return (
        <>
            <Box w="full" paddingLeft={2} paddingRight={2}>
                Showing the latest {inspectionViolations.length} inspections
                <Violation items={inspectionViolations} />
            </Box>
        </>
    );
};

export default InspectionDetails;
