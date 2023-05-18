import React from "react";
import {
    Box,
    Text,
    Heading,
    Link,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";
import ExternalLinkIconCustom from "../components/ExternalLinkIconCustom";

const About = () => {
    return (
        <>
            <Box paddingLeft="20px" paddingRight="20px">
                <Heading>About</Heading>
                <Box paddingTop="15px">
                    This is a portfolio project that is a work in progress and
                    is being updated regularly. Using publicly availabile
                    Louisville, KY restaurant inspection data sets published at{" "}
                    <Link href="https://data.louisvilleky.gov" target="_blank">
                        Louisville Metro Open Data <ExternalLinkIconCustom />
                    </Link>
                    , it allows the user to search restaurant health inspection
                    data and view scores, location information, and inspection
                    violations. It also includes{" "}
                    <Link href="/latest">Latest</Link> and{" "}
                    <Link href="/danger-zone">Danger Zone</Link> views, which
                    includes all restaurants with a C rating.
                </Box>
                <Box paddingTop="15px">
                    Data sets used include:
                    <UnorderedList paddingLeft="20px">
                        <ListItem>
                            <Link
                                href="https://data.louisvilleky.gov/datasets/LOJIC::louisville-metro-ky-restaurant-inspection-scores/explore"
                                isExternal
                            >
                                Louisville Metro KY - Restaurant Inspection
                                Scores <ExternalLinkIconCustom />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://data.louisvilleky.gov/datasets/LOJIC::louisville-metro-ky-inspection-violations-of-failed-restaurants/explore"
                                isExternal
                            >
                                Louisville Metro KY - Inspection Violations of
                                Failed Restaurants <ExternalLinkIconCustom />
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
                                    <Link href="https://react.dev" isExternal>
                                        ReactJS <ExternalLinkIconCustom />
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        href="https://chakra-ui.com"
                                        isExternal
                                    >
                                        Chakra UI <ExternalLinkIconCustom />
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        href="https://axios-http.com"
                                        isExternal
                                    >
                                        Axios <ExternalLinkIconCustom />
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            API
                            <UnorderedList>
                                <ListItem>
                                    <Link
                                        href="https://nodejs.org/en"
                                        isExternal
                                    >
                                        NodeJS <ExternalLinkIconCustom />
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        href="https://expressjs.com"
                                        isExternal
                                    >
                                        Express <ExternalLinkIconCustom />
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Database
                            <UnorderedList>
                                <ListItem>
                                    <Link
                                        href="https://www.mysql.com"
                                        isExternal
                                    >
                                        MySQL <ExternalLinkIconCustom />
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
