import { useState, useRef } from "react";
import { useAppState } from "./state/AppStateContext";
import { CardContainer, DeleteCardButton, EditCardButton, SaveButton } from "./styles"; // Asigură-te că stilurile sunt corect importate
import { isHidden } from "./utils/isHidden";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { deleteTask, moveTask, setDraggedItem, updateTask } from "./state/actions"; // importă acțiunea de actualizare

type Props = {
  text: string;
  id: string;
  columnId: string;
  isPreview?: boolean;
};

const Card = ({ text, id, columnId, isPreview }: Props) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);  // Starea de editare
  const [editedText, setEditedText] = useState(text);  // Stocăm textul editat

  const { drag } = useItemDrag({
    type: "CARD",
    id,
    text,
    columnId,
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type !== "CARD") return;
      if (draggedItem.id === id) return;

      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));
      dispatch(setDraggedItem({ ...draggedItem, columnId }));
    }),
  });

  drag(drop(ref));

  const handleSaveEdit = () => {
    dispatch(updateTask(id, columnId, editedText));  // Dispecer pentru a actualiza sarcina
    setIsEditing(false);  // Ieși din modul de editare
  };

  return (
    <CardContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}  // Actualizează textul pe măsură ce utilizatorul scrie
          />
          <SaveButton onClick={handleSaveEdit}>Salvează</SaveButton>
        </>
      ) : (
        <>
          {text}
          <EditCardButton onClick={() => setIsEditing(true)}>Edit</EditCardButton>
        </>
      )}
      <DeleteCardButton onClick={() => dispatch(deleteTask(id, columnId))}>
        X
      </DeleteCardButton>
    </CardContainer>
  );
};

export default Card;
