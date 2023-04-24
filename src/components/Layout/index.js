import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Flex, Box, Center, HStack, Text, Spacer } from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <Flex padding="5px" gap="20px">
                <Center width="350px">
                    <Link to="/">
                        <Text fontWeight="bold" fontSize="xl">
                            Louisville Restaurant Inspections
                        </Text>
                    </Link>
                </Center>
                <Spacer />
                <HStack>
                    <Center width="100px">
                        <Link to="/">
                            <Text fontWeight="bold">Search</Text>
                        </Link>
                    </Center>
                    <Center width="100px">
                        <Link to="/latest">
                            <Text fontWeight="bold">Latest</Text>
                        </Link>
                    </Center>
                    <Center width="100px">
                        <Link to="/danger-zone">
                            <Text fontWeight="bold">Danger Zone</Text>
                        </Link>
                    </Center>
                    <Center width="100px">
                        <Link to="/about">
                            <Text fontWeight="bold">About</Text>
                        </Link>
                    </Center>
                </HStack>
            </Flex>
            <Box padding={2}>
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
