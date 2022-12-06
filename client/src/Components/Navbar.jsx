import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import ModeSwitch from "./ModeSwitch";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { LOGOUT } from "../redux/actions";

import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store.token);

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      marginBottom={"10px"}
      marginTop={"10px"}
    >
      <Box p="2">
        <Link to="/">
          <Heading size="md">CoinTab User Database </Heading>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button
          colorScheme="teal"
          onClick={() => {
            if (!token) {
              return navigate("/login");
            } else {
              dispatch({ type: LOGOUT });
              return navigate("/login");
            }
          }}
        >
          {(token && "Log Out") || "Log In"}
        </Button>
        <ModeSwitch />
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
