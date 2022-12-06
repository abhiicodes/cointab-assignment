import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Editmodal = ({ isOpen, onClose, setOp, handleForm, edit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const toast = useToast();
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{edit ? "Edit User" : "Add User"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
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
              value={edit ? "Email cannot be edited" : email}
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
            <Button
              colorScheme="teal"
              mr={3}
              onClick={() => {
                if (!edit) {
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
                } else {
                  if (password != cpassword) {
                    return toast({
                      title: `Password and confirm password does not match`,
                      status: "warning",
                      isClosable: true,
                    });
                  }
                }

                handleForm({ edit, user_name: username, email, password });
                setEmail("");
                setUsername("");
                setPassword("");
                setCpassword("");
                onClose();
              }}
            >
              Submit
            </Button>
          </FormControl>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Editmodal;
