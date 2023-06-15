import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import axios from "axios";
import Violation from "../components/Violations";

const InspectionDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [inspectionViolations, setInspectionViolations] = useState([]);

    const location = useLocation();
    const { establishment_id, inspection_id } = location.state;

    useEffect(() => {
        getInspectionVioloations();
    }, [establishment_id, inspection_id]);

    const getInspectionVioloations = () => {
        setIsLoading(true);
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
            setIsLoading(false);
        });
    };

    return (
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
                    {inspectionViolations.length > 0 ? (
                        <>
                            Showing {inspectionViolations.length} inspections
                            from the latest inspection
                            <Violation items={inspectionViolations} />
                        </>
                    ) : (
                        <>No violations found</>
                    )}
                </>
            )}
        </Box>
    );
};

export default InspectionDetails;
