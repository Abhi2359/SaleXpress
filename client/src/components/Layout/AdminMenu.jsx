import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Heading,
  List,
  ListItem,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";

const AdminMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveButtonFromPathname = (pathname) => {
    if (pathname.includes("/dashboard/admin/create-category")) return 1;
    if (pathname.includes("/dashboard/admin/create-product")) return 2;
    if (pathname.includes("/dashboard/admin/products")) return 3;
    if (pathname.includes("/dashboard/admin/orders")) return 4;
    if (pathname.includes("/dashboard/admin/users")) return 5;
    return null;
  };

  const [activeButton, setActiveButton] = useState(
    () =>
      JSON.parse(localStorage.getItem("activeButton")) ||
      getActiveButtonFromPathname(location.pathname)
  );

  useEffect(() => {
    const newPathname = location.pathname;
    const newActiveButton = getActiveButtonFromPathname(newPathname);
    setActiveButton(newActiveButton);
    localStorage.setItem("activeButton", JSON.stringify(newActiveButton));
  }, [location.pathname]);

  const handleRedirect = (url, buttonId) => {
    setActiveButton(buttonId);
    localStorage.setItem("activeButton", JSON.stringify(buttonId));
    navigate(url);
  };

  return (
    <ChakraProvider>
      <Box textAlign="center">
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          borderColor="gray.200"
          bg="white"
      
        >
          <Heading as="h4" size="md" mb={4} color="teal.500">
            Admin Panel
          </Heading>
          <List spacing={2}>
            <ListItem>
              <Button
                colorScheme={activeButton === 1 ? "orange" : "gray"}
                onClick={() =>
                  handleRedirect("/dashboard/admin/create-category", 1)
                }
                w="100%"
              >
                Create Category
              </Button>
            </ListItem>
            <ListItem>
              <Button
                colorScheme={activeButton === 2 ? "orange" : "gray"}
                w="100%"
                onClick={() =>
                  handleRedirect("/dashboard/admin/create-product", 2)
                }
              >
                Create Product
              </Button>
            </ListItem>
            <ListItem>
              <Button
                colorScheme={activeButton === 3 ? "orange" : "gray"}
                w="100%"
                onClick={() => handleRedirect("/dashboard/admin/products", 3)}
              >
                Products
              </Button>
            </ListItem>
            <ListItem>
              <Button
                colorScheme={activeButton === 4 ? "orange" : "gray"}
                w="100%"
                onClick={() => handleRedirect("/dashboard/admin/orders", 4)}
              >
                Orders
              </Button>
            </ListItem>
            <ListItem>
              <Button
                colorScheme={activeButton === 5 ? "orange" : "gray"}
                onClick={() => handleRedirect("/dashboard/admin/users", 5)}
                w="100%"
              >
                Users
              </Button>
            </ListItem>
          </List>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default AdminMenu;
