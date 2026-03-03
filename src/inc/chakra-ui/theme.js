import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
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
      Button: {
        variants: {
          link: {
            color: "teal.500",
          },
        },
      },
      Text: {
        variants: {
          gradeLetterA: {
            color: "green",
            fontWeight: "bold",
            fontSize: "28px",
            paddingBottom: "5px",
          },
          gradeLetterC: {
            color: "red",
            fontWeight: "bold",
            fontSize: "24px",
            paddingBottom: "5px",
          },
          gradeA: {
            color: "green",
            fontWeight: "bold",
          },
          gradeC: {
            color: "red",
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

export default system;
