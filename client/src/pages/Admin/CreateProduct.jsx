import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Select as ChakraSelect,
  Button,
  Input,
  Textarea,
  ChakraProvider,
  useToast,
} from "@chakra-ui/react";

axios.defaults.baseURL = "http://localhost:8080";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState(null);
  const toast = useToast()

  // get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast({
        title: data.message,
        description:"Something went wrong while getting category",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // create product function
  const handleCreate = async () => {
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast({
          title: "Product Created Successfully",
        
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/dashboard/admin/products");
      } else {
        toast({
          title: data.message,
       description:"Something went wrong ",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
       
      }
    } catch (error) {
      console.log(error);
      toast({
        title:"Something went wrong",
  
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <ChakraProvider>

      <Box
        className="container-fluid m-3 p-3 dashboard"
        textAlign="center"
        display="flex"
      >
        <Box
          width="250px"
          minWidth="250px"
          borderWidth="1px"
          borderRadius="lg"
        
          borderColor="gray.200"
          bg="white"
          marginRight="20px"
        >
          <AdminMenu />
        </Box>
        <Box
          flex="1"
          borderWidth="1px"
          borderRadius="lg"
      
          borderColor="gray.200"
          bg="white"
        >
          <Heading as="h1" size="xl" mb={4} color="teal.500">
            Create Product
          </Heading>
          <Box m="auto" w="75%">
            <ChakraSelect
              placeholder="Select a category"
              size="lg"
              onChange={(e) => setCategory(e.target.value)}
              mb={3}
            >
              {categories?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </ChakraSelect>
            <Box mb={3}>
              <label className="btn btn-outline-secondary col-md-12">
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </Box>
            {photo && (
              <Box mb={3}>
                <img
                  src={URL.createObjectURL(photo)}
                  alt="product_photo"
                  height="200px"
                  className="img img-responsive"
                />
              </Box>
            )}
            <Input
              type="text"
              value={name}
              placeholder="Write a name"
              onChange={(e) => setName(e.target.value)}
              mb={3}
            />
            <Textarea
              value={description}
              placeholder="Write a description"
              onChange={(e) => setDescription(e.target.value)}
              mb={3}
            />
            <Input
              type="number"
              value={price}
              placeholder="Write a Price"
              onChange={(e) => setPrice(e.target.value)}
              mb={3}
            />
            <Input
              type="number"
              value={quantity}
              placeholder="Write a quantity"
              onChange={(e) => setQuantity(e.target.value)}
              mb={3}
            />
            <ChakraSelect
              placeholder="Select Shipping"
              size="lg"
              onChange={(e) => setShipping(e.target.value)}
              mb={3}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </ChakraSelect>
            <Button
              colorScheme="blue"
              onClick={handleCreate}
              mb={3}
              size="lg"
            >
              CREATE PRODUCT
            </Button>
          </Box>
        </Box>
      </Box>
      </ChakraProvider>
    </Layout>
  );
};

export default CreateProduct;
