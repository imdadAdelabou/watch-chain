interface ButtonType {
  label: string;
  onClick: () => void;
}

const CustomBtn: React.FC<ButtonType> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default CustomBtn;
