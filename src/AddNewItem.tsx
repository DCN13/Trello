import { useState } from "react";
import { AddItemButton } from "./styles";
import NewItemForm from "./NewItemForm";

interface Props {
  onAdd: (text: string) => void;
  toggleButtonText: string;
  dark?: boolean;
}
const AddNewItem = ({ onAdd, toggleButtonText, dark }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  if (showForm) {
    // render the form
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <>
      <AddItemButton
        onClick={() => {
          setShowForm(true);
        }}
        dark={dark}
      >
        {toggleButtonText}
      </AddItemButton>
    </>
  );
};
export default AddNewItem;
