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
                    This is a portfolio project that in a work in progress and
                    is being updated regularly. Using publicly availabile
                    Louisville, KY restaurant inspection data sets published at{" "}
                    <Link color="teal.500" href="https://data.louisvilleky.gov">
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
                            >
                                Louisville Metro KY - Restaurant Inspection
                                Scores
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                color="teal.500"
                                href="https://data.louisvilleky.gov/datasets/LOJIC::louisville-metro-ky-inspection-violations-of-failed-restaurants/explore"
                            >
                                Louisville Metro KY - Inspection Violations of
                                Failed Restaurants
                            </Link>
                        </ListItem>
                    </UnorderedList>
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
                                    >
                                        ReactJS
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        color="teal.500"
                                        href="https://chakra-ui.com"
                                    >
                                        Chakra UI
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        color="teal.500"
                                        href="https://axios-http.com"
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
                                    >
                                        NodeJS
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        color="teal.500"
                                        href="https://expressjs.com"
                                    >
                                        Express
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
