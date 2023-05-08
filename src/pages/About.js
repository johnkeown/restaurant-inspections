import React from "react";
import {
    Box,
    Text,
    Heading,
    Link,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";

const About = () => {
    return (
        <>
            <Box paddingLeft="20px" paddingRight="20px">
                <Heading>About</Heading>
                <Box paddingTop="15px">
                    This is a portfolio project that is a work in progress and
                    is being updated regularly. Using publicly availabile
                    Louisville, KY restaurant inspection data sets published at{" "}
                    <Link
                        color="teal.500"
                        href="https://data.louisvilleky.gov"
                        target="_blank"
                    >
                        Louisville Metro Open Data
                    </Link>
                    , it allows the user to search restaurant health inspection
                    data and view scores, location information, and inspection
                    violations. It also includes{" "}
                    <Link color="teal.500" href="/latest">
                        Latest
                    </Link>{" "}
                    and{" "}
                    <Link color="teal.500" href="/danger-zone">
                        Danger Zone
                    </Link>{" "}
                    views, which includes all restaurants with a C rating.
                </Box>
                <Box paddingTop="15px">
                    Data sets used include:
                    <UnorderedList paddingLeft="20px">
                        <ListItem>
                            <Link
                                color="teal.500"
                                href="https://data.louisvilleky.gov/datasets/LOJIC::louisville-metro-ky-restaurant-inspection-scores/explore"
                                target="_blank"
                            >
                                Louisville Metro KY - Restaurant Inspection
                                Scores
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                color="teal.500"
                                href="https://data.louisvilleky.gov/datasets/LOJIC::louisville-metro-ky-inspection-violations-of-failed-restaurants/explore"
                                target="_blank"
                            >
                                Louisville Metro KY - Inspection Violations of
                                Failed Restaurants
                            </Link>
                        </ListItem>
                    </UnorderedList>
                </Box>
                <Box paddingTop="15px">
                    Data was last refreshed on 5/4/2023.
                </Box>
                <Box paddingTop="15px">
                    <Text>Technologies used include</Text>
                    <UnorderedList paddingLeft="20px">
                        <ListItem>
                            Front End:
                            <UnorderedList>
                                <ListItem>
                                    <Link
                                        color="teal.500"
                                        href="https://react.dev"
                                        target="_blank"
                                    >
                                        ReactJS
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        color="teal.500"
                                        href="https://chakra-ui.com"
                                        target="_blank"
                                    >
                                        Chakra UI
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        color="teal.500"
                                        href="https://axios-http.com"
                                        target="_blank"
                                    >
                                        Axios
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            API
                            <UnorderedList>
                                <ListItem>
                                    <Link
                                        color="teal.500"
                                        href="https://nodejs.org/en"
                                        target="_blank"
                                    >
                                        NodeJS
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        color="teal.500"
                                        href="https://expressjs.com"
                                        target="_blank"
                                    >
                                        Express
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Database
                            <UnorderedList>
                                <ListItem>
                                    <Link
                                        color="teal.500"
                                        href="https://www.mysql.com"
                                        target="_blank"
                                    >
                                        MySQL
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </UnorderedList>
                </Box>
                <Box paddingTop="15px">
                    Future updates will include:
                    <UnorderedList paddingLeft="20px">
                        <ListItem>Table pagination and sorting</ListItem>
                        <ListItem>
                            Improved state management to retain the search term
                            and search results when returning from viewing
                            inspection details
                        </ListItem>
                        <ListItem>
                            Add location and general inspection information on
                            the inspection details page
                        </ListItem>
                        <ListItem>Improved styling and site design</ListItem>
                        <ListItem>Improved reactive layouts</ListItem>
                    </UnorderedList>
                </Box>
            </Box>
        </>
    );
};

export default About;
