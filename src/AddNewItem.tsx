import { useState } from "react";
import { AddItemButton } from "./styles";

interface Props {
  onAdd: (text: string) => void;
  toggleButtonText: string;
  dark?: boolean;
}
const AddNewItem = ({ onAdd, toggleButtonText, dark }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  if (showForm) {
    // render the form
  }
  return (
    <>
      <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
        {toggleButtonText}
      </AddItemButton>
    </>
  );
};
export default AddNewItem;
