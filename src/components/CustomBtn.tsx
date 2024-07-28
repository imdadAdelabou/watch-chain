import { Button } from "@chakra-ui/react";

interface ButtonType {
  label: string;
  onClick: () => void;
  color?: string;
}

const CustomBtn: React.FC<ButtonType> = ({ label, color, onClick }) => {
  return (
    <Button
      colorScheme=""
      backgroundColor={color || "#4E5769"}
      color="white"
      onClick={onClick}
      display={["none", "block"]}
    >
      {label}
    </Button>
  );
};

export default CustomBtn;
