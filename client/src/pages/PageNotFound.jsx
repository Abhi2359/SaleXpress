import React from "react";
import { Box, Heading, Text, Button, ChakraProvider } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Heading as="h1" size="xl" mb="4">
          404 - Page Not Found
        </Heading>
        <Text fontSize="lg" mb="8">
          Oops! The page you are looking for does not exist.
        </Text>
        <Button colorScheme="blue" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default PageNotFound;
