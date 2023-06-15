import { useState, useEffect } from "react";
import Violations from "../Violations";
import axios from "axios";
import { Box, Image } from "@chakra-ui/react";

const InspectionDetailsModal = ({ establishmentId, inspectionId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [inspectionViolations, setInspectionViolations] = useState([]);

    useEffect(() => {
        setIsLoading(true);
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
            setIsLoading(false);
        });
    }, [establishmentId, inspectionId]);

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
                        {inspectionViolations.length > 0 ? (
                            <>
                                Showing {inspectionViolations.length} violations
                                from the latest inspection
                                <Violations items={inspectionViolations} />
                            </>
                        ) : (
                            <>No violations found</>
                        )}
                    </>
                )}
            </Box>
        </>
    );
};

export default InspectionDetailsModal;
