import useAddClassroom from "@/api/use-add-classroom";
import { Button, Input, useDisclosure } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogBackdrop,
} from "@/components/ui/dialog";
import { useState } from "react";

const AddClassroomModal = () => {

  const addClassroom = useAddClassroom();

  const [newClassroomName, setNewClassroomName] = useState("");


  const { open, onOpen, onClose } = useDisclosure();

  return (
    <DialogRoot open={open}>
      <DialogBackdrop />
      <DialogTrigger onClick={onOpen}>
        Add Classroom
      </DialogTrigger>
      <DialogContent>
        <DialogCloseTrigger onClick={onClose} />
        <DialogHeader>
          <DialogTitle>Add Classroom</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Input
            placeholder="Classroom Name"
            value={newClassroomName}
            onChange={(e) => setNewClassroomName(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              addClassroom({ name: "Classroom Name" });
              onClose();
            }}
          >
            Add
          </Button>
        </DialogFooter>
        <DialogFooter />
      </DialogContent>
    </DialogRoot>
  );
};

export default AddClassroomModal;
