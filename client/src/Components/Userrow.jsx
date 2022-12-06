import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Viewmodal from "./Viewmodal";
const Userrow = ({
  user,
  setOp,
  onOpen,
  setUser,
  setEm,
  onDeleteOpen,
  onEditOpen,
  setEditt,
}) => {
  return (
    <>
      <Tr>
        <Td>{user.user_name}</Td>
        <Td>{user.email}</Td>
        <Td>
          <Button
            onClick={() => {
              setUser(user);
              setOp(true);
              onOpen();
            }}
          >
            View
          </Button>
        </Td>
        <Td>
          <Button
            onClick={() => {
              setUser(user);
              setEditt(true);
              onEditOpen();
            }}
          >
            Edit
          </Button>
        </Td>

        <Td>
          <Button
            onClick={() => {
              setUser(user);
              setEm(true);
              onDeleteOpen();
            }}
          >
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default Userrow;
