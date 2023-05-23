import { useState, useEffect } from "react";
import Violations from "../Violations";
import axios from "axios";
import { Box } from "@chakra-ui/react";

const InspectionDetailsModal = ({ establishmentId, inspectionId }) => {
    const [inspectionViolations, setInspectionViolations] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/violations`,
            params: {
                establishment_id: establishmentId,
                inspection_id: inspectionId,
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
    }, [establishmentId, inspectionId]);

    return (
        <>
            <Box w="full" paddingLeft={2} paddingRight={2}>
                Showing the latest {inspectionViolations.length} violations
                <Violations items={inspectionViolations} />
            </Box>
        </>
    );
};

export default InspectionDetailsModal;
