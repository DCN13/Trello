import { findItemIndexById, moveItem } from "../utils/arrayUtils";
import { Action } from "./actions";
import { nanoid } from "nanoid";
import { DragItem } from "../DragItem";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);

      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }
    case "MOVE_LIST": {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);

      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
      break;
    }
    case "SET_DRAGGED_ITEM": {
      draft.draggedItem = action.payload;
      break;
    }
    case "MOVE_TASK": {
      const { draggedItemId, hoverItemId, sourceColumnId, targetColumnId } =
        action.payload;

      const sourceListIndex = findItemIndexById(draft.lists, sourceColumnId);
      const targetListIndex = findItemIndexById(draft.lists, targetColumnId);

      const dragIndex = findItemIndexById(
        draft.lists[sourceListIndex].tasks,
        draggedItemId
      );
      const hoverIndex = hoverItemId
        ? findItemIndexById(draft.lists[targetListIndex].tasks, hoverItemId)
        : 0;

      const item = draft.lists[sourceListIndex].tasks[dragIndex];

      draft.lists[sourceListIndex].tasks.splice(dragIndex, 1);

      draft.lists[targetListIndex].tasks.splice(hoverIndex, 0, item);

      break;
    }
    case "DELETE_LIST": {
      draft.lists = draft.lists.filter((list) => list.id !== action.payload);
      break;
    }
    case "DELETE_TASK": {
      const { taskId, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);
      draft.lists[targetListIndex].tasks = draft.lists[
        targetListIndex
      ].tasks.filter((task) => task.id !== taskId);
      break;
    }
    
    
    default: {
      break;
    }
  }
};
