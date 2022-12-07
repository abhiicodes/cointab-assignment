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

import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "./../redux/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <Box margin={"auto"}>
      <FormControl isRequired>
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
      </FormControl>
      <Button
        colorScheme="teal"
        onClick={() => {
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

          axios
            .post("https://cointab-hdsd.onrender.com/login", {
              email,

              password,
            })
            .then((res) => {
              dispatch({ type: LOGIN, payload: res.data.token });
              toast({
                title: `Logged in successfully`,
                status: "success",
                isClosable: true,
              });
              return navigate("/");
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
        Log In
      </Button>
      <br />
      <Link to={"/signup"}>New here - Sign up</Link>
    </Box>
  );
};

export default Login;
