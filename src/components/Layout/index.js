import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
    Flex,
    Box,
    Input,
    Button,
    Center,
    HStack,
    Text,
} from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <Flex paddingTop="5px" paddingBottom="5px" gap="20px">
                <Center width="350px">
                    <Link to="/">
                        <Text fontWeight="bold">
                            Louisville Restaurant Inspections
                        </Text>
                    </Link>
                </Center>
                <Box w="full">
                    <HStack>
                        <Input
                            placeholder="Search for a restaurant by name"
                            size="lg"
                        />
                        <Button size="lg">Search</Button>
                    </HStack>
                </Box>
                <Center width="100px">
                    <Link to="/about">
                        <Text fontWeight="bold">About</Text>
                    </Link>
                </Center>
            </Flex>
            <Outlet />
        </>
    );
};

export default Layout;
