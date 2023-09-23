import { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";

type Props = {
  onAdd(text: string): void;
};
const NewItemForm = ({ onAdd }: Props) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  return (
    <>
      <NewItemFormContainer>
        <NewItemInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
        <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
      </NewItemFormContainer>
    </>
  );
};
export default NewItemForm;
