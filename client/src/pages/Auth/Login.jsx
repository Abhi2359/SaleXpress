import React, { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  ChakraProvider,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  axios.defaults.baseURL = "http://localhost:8080";

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError("");
    validateForm();
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError("");
    validateForm();
  };

  const validateForm = () => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= 8;

    setEmailError(isEmailValid ? "" : "Invalid Email");
    setPasswordError(
      isPasswordValid ? "" : "Password must be at least 8 characters"
    );

    return isEmailValid && isPasswordValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast({
          title: "Login Successful",
          description: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast({
          title: "Login Failed",
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
    <Layout title="Login - Ecommerce App">
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
          <form onSubmit={handleSubmit} style={{ width: "300px" }}>

            <FormControl id="email" mb="3" isRequired isInvalid={emailError !== ""} >
            <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                autoFocus
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Your Email"
               
              />
              <Text color="red.500" fontSize="sm" mt="1">
                {emailError}
              </Text>
            </FormControl>

            <FormControl id="password" mb="3"isRequired my="4" isInvalid={passwordError !== ""}>
            <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Your Password"
                isInvalid={passwordError !== ""}
              />
              <Text color="red.500" fontSize="sm" mt="1">
                {passwordError}
              </Text>
            </FormControl>


            <Button type="submit" colorScheme="orange" size="md" width="full" my='3'>
              LOGIN
            </Button>
            <Button
              type="button"
              colorScheme="blue"
              size="md"
              width='full'
              onClick={() => {
                navigate("/forgot-password");
              }}
              mb="3"
            >
              Forgot Password
            </Button>
          </form>
        </Box>
      </ChakraProvider>
    </Layout>
  );
};

export default Login;
