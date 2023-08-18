import React, { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  ChakraProvider,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  axios.defaults.baseURL = "http://localhost:8080";
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast({
          title: "Password Reset",
          description: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        navigate("/login");
      } else {
        toast({
          title: "Error",
          description: res.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout title={"Forgot Password - SaleXpress"}>
      <ChakraProvider>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="90vh"
          bg="gray.100"
          borderRadius="md"
        >
          <form  style={{ width: "300px" }} onSubmit={handleSubmit}>

            <FormControl mb="3" isRequired>
            <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                isRequired
              />
            </FormControl>

            <FormControl mb="3" isRequired>
            <FormLabel>Answer</FormLabel>

              <Input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Favorite Sport Name"
                isRequired
              />
            </FormControl>

            <FormControl mb="3" isRequired>
            <FormLabel>Password</FormLabel>

              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter Your New Password"
            
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" size="md" width="full">
              Reset Password
            </Button>
          </form>
        </Box>
      </ChakraProvider>
    </Layout>
  );
};

export default ForgotPassword;
