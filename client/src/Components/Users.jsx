import { Box, Button, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USERS } from "./../redux/actions";
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
} from "@chakra-ui/react";
import Userrow from "./Userrow";
import Viewmodal from "./Viewmodal";
import Deletemodal from "./Deletemodal";
import Editmodal from "./Editmodal";
const Users = () => {
  const users = useSelector((store) => store.users);
  console.log(users)
  const token = useSelector((store) => store.token);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();

  const [op, setOp] = useState(false);
  const [em, setEm] = useState(false);
  const [dm, setDm] = useState(false);
  const [editt, setEditt] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const toast = useToast();
  const handleForm = (data) => {
    if (data.edit) {
      axios
        .patch(`http://localhost:8080/edit/${user._id}`, data, {
          headers: {
            authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          toast({
            title: `User Edited successfully`,
            status: "success",
            isClosable: true,
          });
          setEditt(false);
          getUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(`http://localhost:8080/add`, data, {
          headers: {
            authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          toast({
            title: `User Added successfully`,
            status: "success",
            isClosable: true,
          });
          setEditt(false);
          getUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/delete/${user._id}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        toast({
          title: `User deleted successfully`,
          status: "success",
          isClosable: true,
        });
        getUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUsers = () => {
    axios
      .get("http://localhost:8080", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: UPDATE_USERS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Box>
      <Button
        colorScheme="teal"
        onClick={() => {
          onAddOpen();
        }}
      >
        Add User
      </Button>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>User Name</Th>
              <Th>Email</Th>
              <Th>View</Th>
              <Th>Edit</Th>

              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((el) => (
              <Userrow
                key={el.email}
                user={el}
                isOpen={isOpen}
                onClose={onClose}
                setOp={setOp}
                setUser={setUser}
                onOpen={onOpen}
                onDeleteOpen={onDeleteOpen}
                setEm={setEm}
                handleDelete={handleDelete}
                onEditOpen={onEditOpen}
                setEditt={setEditt}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {op && (
        <Viewmodal
          isOpen={isOpen}
          onClose={onClose}
          user={user}
          setOp={setOp}
        />
      )}
      {em && (
        <Deletemodal
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
          user={user}
          setEm={setEm}
          handleDelete={handleDelete}
        />
      )}
      <Editmodal
        isOpen={isEditOpen}
        onClose={onEditClose}
        user={user}
        edit={editt}
        handleForm={handleForm}
      />
      <Editmodal
        isOpen={isAddOpen}
        onClose={onAddClose}
        edit={editt}
        handleForm={handleForm}
      />
    </Box>
  );
};

export default Users;
