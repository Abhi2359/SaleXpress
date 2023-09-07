import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout>
      <ChakraProvider>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <AdminMenu />
            </Box>
            <Box>
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="lg" color="teal.500">
                  Admin Dashboard
                </Heading>
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  borderColor="gray.200"
                  bg="white"
                >
                  <Text fontSize="xl" color="blue.500">
                    Admin Name: <strong>{auth?.user?.name}</strong>
                  </Text>
                  <Text fontSize="xl" color="blue.500">
                    Admin Email: <strong>{auth?.user?.email}</strong>
                  </Text>
                  <Text fontSize="xl" color="blue.500">
                    Admin Contact: <strong>{auth?.user?.phone}</strong>
                  </Text>
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </ChakraProvider>
    </Layout>
  );
};

export default AdminDashboard;
