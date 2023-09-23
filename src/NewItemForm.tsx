import React, { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";

type Props = {
  onAdd(text: string): void;
};
const NewItemForm = ({ onAdd }: Props) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <>
      <NewItemFormContainer>
        <NewItemInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
          onKeyUp={handleAddText}
        />
        <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
      </NewItemFormContainer>
    </>
  );
};
export default NewItemForm;
