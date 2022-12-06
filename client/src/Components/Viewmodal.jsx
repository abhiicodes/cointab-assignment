import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Viewmodal = ({ isOpen, onClose, user, setOp }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setOp(false);
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>More Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>User Name : {user.user_name}</Text>
          <Text>Email : {user.email}</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            onClick={() => {
              setOp(false);
              onClose();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Viewmodal;
