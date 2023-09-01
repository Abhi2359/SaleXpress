import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import zxcvbn from "zxcvbn";
//import "../../styles/AuthStyles.css";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
  ChakraProvider,
  useToast
} from "@chakra-ui/react";
import ModalComponent from "./Modal";
const Register = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerError, setAnswerError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();
  axios.defaults.baseURL = "http://localhost:8080";

  const handleNameChange = (e) => {
    const value = e.target.value;

    setName(value);
    setNameError("");
    validateForm();
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError("");
    validateForm();
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(" ");
    // Calculate password strength using zxcvbn
    const passwordStrengthResult = zxcvbn(value);
    const score = passwordStrengthResult.score;

    // Map the score to labels for display
    let strengthLabel = "Weak";
    if (score >= 3) {
      strengthLabel = "Stronger";
    } else if (score >= 2) {
      strengthLabel = "Strong";
    } else {
      strengthLabel = "Weak";
    }

    setPasswordStrength(strengthLabel);

    validateForm();
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneError("");
    validateForm();
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    setAddressError("");
    validateForm();
  };
  const handleAnswerChange = (e) => {
    const value = e.target.value;
    setAnswer(value);
    setAnswerError("");
    validateForm();
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //Form Validation
  const validateForm = () => {
    const isNameValid = /^[A-Za-z\s]+$/.test(name);
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= 8;
    const isPhoneValid = /^[0-9]+$/.test(phone);
    const isAddressValid = address.trim() !== "";
    const isAnswerValid = answer.trim() !== "";

    setAnswerError(isAnswerValid ? "" : "Answer is required");
    setPhoneError(isPhoneValid ? "" : "Invalid Phone");
    setAddressError(isAddressValid ? "" : "Address is required");
    setNameError(isNameValid ? "" : "Invalid  Name");
    setEmailError(isEmailValid ? "" : "Invalid Email");
    setPasswordError(
      isPasswordValid ? "" : "Password must be at least 8 characters"
    );

    const formIsValid =
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPhoneValid &&
      isAddressValid &&
      isAnswerValid;
    setIsFormValid(formIsValid);

    return formIsValid;
  };
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      setShowSuccessModal(true);
    } else {
      console.log("Form is not valid. Please fill in all fields.");
    }

    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast({
          title: "Registration Successful",
          description: res.data && res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        toast({
          title: "Registration Error",
          description: res.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
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

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
  return (
    <Layout>
      <ChakraProvider>
        <Box
          maxW="400px"
          m="auto"
          p="4"
          my="40px"
          bg="gray.100"
          borderRadius="md"
        >
          <FormControl isRequired isInvalid={nameError !== ""}>
            <FormLabel> Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter Your FullName"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 2px rgba(0, 0, 255, 0.3)",
              }}
            />
            <Text color="red.500" fontSize="sm" mt="1">
              {nameError}
            </Text>
          </FormControl>
          <FormControl isRequired my="4" isInvalid={emailError !== ""}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="user@example.com"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 2px rgba(0, 0, 255, 0.3)",
              }}
            />
            <Text color="red.500" fontSize="sm" mt="1">
              {emailError}
            </Text>
          </FormControl>
          <FormControl isRequired my="4" isInvalid={passwordError !== ""}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                onChange={handlePasswordChange}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 2px rgba(0, 0, 255, 0.3)",
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text color="red.500" fontSize="sm" mt="1">
              {passwordError}
            </Text>
            {passwordStrength && (
              <Text
                mt={2}
                fontSize="sm"
                color={
                  passwordStrength === "Stronger"
                    ? "green"
                    : passwordStrength === "Strong"
                    ? "blue"
                    : "red"
                }
              >
                Password Strength: {passwordStrength}
              </Text>
            )}
          </FormControl>
          <FormControl isRequired my="4" isInvalid={phoneError !== ""}>
            <FormLabel>Phone</FormLabel>
            <Input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter Phone Number"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 2px rgba(0, 0, 255, 0.3)",
              }}
            />
            <Text color="red.500" fontSize="sm" mt="1">
              {phoneError}
            </Text>
          </FormControl>

          <FormControl isRequired my="4" isInvalid={addressError !== ""}>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter Address"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 2px rgba(0, 0, 255, 0.3)",
              }}
            />
            <Text color="red.500" fontSize="sm" mt="1">
              {addressError}
            </Text>
          </FormControl>
          <FormControl isRequired my="4" isInvalid={answerError !== ""}>
            <FormLabel>Answer</FormLabel>
            <Input
              type="text"
              value={answer}
              onChange={handleAnswerChange}
              placeholder="Enter Your Answer"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 2px rgba(0, 0, 255, 0.3)",
              }}
            />
            <Text color="red.500" fontSize="sm" mt="1">
              {answerError}
            </Text>
          </FormControl>

          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            style={{
              backgroundColor: isFormValid ? "orange" : "gray",
              color: "black",
              borderRadius: "5px",
              padding: "10px",
              cursor: isFormValid ? "pointer" : "not-allowed",
              width:"fit-content"
            }}
          >
            Register
          </button>
          {/* <ModalComponent
            isOpen={showSuccessModal}
            onClose={handleCloseSuccessModal}
            Name={name}
          /> */}
        </Box>
      </ChakraProvider>
    </Layout>
  );
};

export default Register;
