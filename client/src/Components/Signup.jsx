import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  return (
    <Box margin={"auto"}>
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel>Password</FormLabel>

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormLabel>Confirm Password</FormLabel>

        <Input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => {
            setCpassword(e.target.value);
          }}
        />
      </FormControl>
      <Button
        colorScheme="teal"
        onClick={() => {
          if (!username) {
            return toast({
              title: `Please enter Username`,
              status: "warning",
              isClosable: true,
            });
          }
          if (!email) {
            return toast({
              title: `Please enter email`,
              status: "warning",
              isClosable: true,
            });
          }
          if (!password) {
            return toast({
              title: `Please enter password`,
              status: "warning",
              isClosable: true,
            });
          }
          if (!cpassword) {
            return toast({
              title: `Please confirm password`,
              status: "warning",
              isClosable: true,
            });
          }
          if (password != cpassword) {
            return toast({
              title: `Password and confirm password does not match`,
              status: "warning",
              isClosable: true,
            });
          }

          axios
            .post("https://cointab-backend-production.up.railway.app/signup", {
              email,
              user_name: username,
              password,
            })
            .then((res) => {
              toast({
                title: `Account created successfully`,
                status: "success",
                isClosable: true,
              });
              return navigate("/login");
            })
            .catch((err) => {
              console.log(err);

              toast({
                title: err.response.data,
                status: "error",
                isClosable: true,
              });
            });
        }}
      >
        Sign Up
      </Button>
      <br />
      <Link to={"/login"}>Already a user - Login here</Link>
    </Box>
  );
};

export default Login;
