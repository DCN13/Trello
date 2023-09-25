import { useRef } from "react";
import AddNewItem from "./AddNewItem";
import Card from "./Card";
import { useAppState } from "./state/AppStateContext";
import { addTask, moveList } from "./state/actions";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { isHidden } from "./utils/isHidden";

type Props = {
  text: string;
  id: string;
  isPreview?: boolean;
};
const Column = ({ text, id, isPreview }: Props) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) return;
        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  drag(drop(ref));

  return (
    <>
      <ColumnContainer
        ref={ref}
        isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
        isPreview={isPreview}
      >
        <ColumnTitle>{text}</ColumnTitle>
        {tasks.map((task) => (
          <Card text={task.text} key={task.id} id={task.id} />
        ))}
        {/* onAdd TODO: validation; use zod */}
        <AddNewItem
          toggleButtonText="+ Add another card"
          onAdd={(add_task) => dispatch(addTask(add_task, id))}
          dark
        />
      </ColumnContainer>
    </>
  );
};
export default Column;
