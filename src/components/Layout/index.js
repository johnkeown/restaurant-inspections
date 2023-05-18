import React from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import {
    Flex,
    Box,
    Center,
    HStack,
    Link,
    Text,
    Spacer,
} from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <Flex padding="5px" gap="20px">
                <Center width="350px">
                    <Link as={RouterLink} to="/" variant="siteName">
                        <Text fontWeight="bold" fontSize="xl">
                            Louisville Restaurant Inspections
                        </Text>
                    </Link>
                </Center>
                <Spacer />
                <HStack>
                    <Center width="100px">
                        <Link as={RouterLink} to="/" variant="nav">
                            <Text fontWeight="bold">Search</Text>
                        </Link>
                    </Center>
                    <Center width="100px">
                        <Link as={RouterLink} to="/latest" variant="nav">
                            <Text fontWeight="bold">Latest</Text>
                        </Link>
                    </Center>
                    <Center width="100px">
                        <Link as={RouterLink} to="/danger-zone" variant="nav">
                            <Text fontWeight="bold">Danger Zone</Text>
                        </Link>
                    </Center>
                    <Center width="100px">
                        <Link as={RouterLink} to="/about" variant="nav">
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
