import { useRef } from "react";
import { useAppState } from "./state/AppStateContext";
import { CardContainer, DeleteCardButton } from "./styles";  // importă butonul
import { isHidden } from "./utils/isHidden";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { deleteTask, moveTask, setDraggedItem} from "./state/actions";

type Props = {
  text: string;
  id: string;
  columnId: string;
  isPreview?: boolean;
};
const Card = ({ text, id, columnId, isPreview }: Props) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

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


  

  return (
    <>
      <CardContainer
        ref={ref}
        isPreview={isPreview}
        isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
      >
        {text}
          <DeleteCardButton onClick={() => dispatch(deleteTask(id, columnId))}>
            X
          </DeleteCardButton>
      </CardContainer>
    </>
  );
};

export default Card;
