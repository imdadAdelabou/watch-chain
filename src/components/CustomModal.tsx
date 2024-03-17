import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface ModalType {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: JSX.Element;
}

const CustomModal: React.FC<ModalType> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const haveTitle = () =>
    !title ? null : <ModalHeader textAlign="center">{title}</ModalHeader>;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent backgroundColor="#212938">
        {haveTitle()}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
