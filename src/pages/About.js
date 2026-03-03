import React from "react";
import { Box, Text, Heading, Link, List } from "@chakra-ui/react";
import ExternalLinkIconCustom from "../components/ExternalLinkIconCustom";

const About = () => {
  return (
    <>
      <Box paddingLeft="20px" paddingRight="20px">
        <Heading>About</Heading>
        <Box paddingTop="15px">
          This is a portfolio project that is a work in progress and is being
          updated regularly. Using publicly availabile Louisville, KY restaurant
          inspection data sets published at{" "}
          <Link href="https://data.louisvilleky.gov" target="_blank">
            Louisville Metro Open Data <ExternalLinkIconCustom />
          </Link>
          , it allows the user to search restaurant health inspection data and
          view scores, location information, and inspection violations. It also
          includes <Link href="/latest">Latest</Link> and{" "}
          <Link href="/danger-zone">Danger Zone</Link> views, which includes all
          restaurants with a C rating.
        </Box>
        <Box paddingTop="15px">
          Data sets used include:
          <List.Root as="ul" paddingLeft="20px">
            <List.Item>
              <Link
                href="https://data.louisvilleky.gov/datasets/LOJIC::louisville-metro-ky-restaurant-inspection-scores/explore"
                isExternal
                target="_blank"
              >
                Louisville Metro KY - Restaurant Inspection Scores{" "}
                <ExternalLinkIconCustom />
              </Link>
            </List.Item>
            <List.Item>
              <Link
                href="https://data.louisvilleky.gov/datasets/LOJIC::louisville-metro-ky-inspection-violations-of-failed-restaurants/explore"
                isExternal
                target="_blank"
              >
                Louisville Metro KY - Inspection Violations of Failed
                Restaurants <ExternalLinkIconCustom />
              </Link>
            </List.Item>
          </List.Root>
        </Box>
        <Box paddingTop="15px">Data was last refreshed on 5/4/2023.</Box>
        <Box paddingTop="15px">
          <Text>Technologies used include:</Text>
          <List.Root as="ul" paddingLeft="20px">
            <List.Item>
              Front End
              <List.Root as="ul" paddingLeft="20px">
                <List.Item>
                  <Link href="https://react.dev" isExternal target="_blank">
                    ReactJS <ExternalLinkIconCustom />
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="https://chakra-ui.com" isExternal target="_blank">
                    Chakra UI <ExternalLinkIconCustom />
                  </Link>
                </List.Item>
                <List.Item>
                  <Link
                    href="https://axios-http.com"
                    isExternal
                    target="_blank"
                  >
                    Axios <ExternalLinkIconCustom />
                  </Link>
                </List.Item>
              </List.Root>
            </List.Item>
            <List.Item>
              API
              <List.Root as="ul" paddingLeft="20px">
                <List.Item>
                  <Link href="https://nodejs.org/en" isExternal target="_blank">
                    NodeJS <ExternalLinkIconCustom />
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="https://expressjs.com" isExternal target="_blank">
                    Express <ExternalLinkIconCustom />
                  </Link>
                </List.Item>
              </List.Root>
            </List.Item>
            <List.Item>
              Database
              <List.Root as="ul" paddingLeft="20px">
                <List.Item>
                  <Link href="https://www.mysql.com" isExternal target="_blank">
                    MySQL <ExternalLinkIconCustom />
                  </Link>
                </List.Item>
              </List.Root>
            </List.Item>
          </List.Root>
        </Box>
        <Box paddingTop="15px">
          Future updates will include:
          <List.Root as="ul" paddingLeft="20px">
            <List.Item>Table pagination and sorting</List.Item>
            <List.Item>
              Improved state management to retain the search term and search
              results when returning from viewing inspection details
            </List.Item>
            <List.Item>
              Add location and general inspection information on the inspection
              details page
            </List.Item>
            <List.Item>Improved styling and site design</List.Item>
            <List.Item>Improved reactive layouts</List.Item>
          </List.Root>
        </Box>
      </Box>
    </>
  );
};

export default About;
