import { extendTheme, textDecoration } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Link: {
            baseStyle: {
                color: "teal.500",
            },
            variants: {
                siteName: {
                    color: "black",
                    _hover: {
                        textDecoration: "none",
                    },
                },
                nav: {
                    color: "black",
                },
            },
        },
    },
});

export default theme;