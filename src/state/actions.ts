import { DragItem } from "../DragItem";

export type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; listId: string } }
  | { type: "MOVE_LIST"; payload: { draggedId: string; hoverId: string } }
  | { type: "SET_DRAGGED_ITEM"; payload: DragItem | null }
  | {
      type: "MOVE_TASK";
      payload: {
        draggedItemId: string;
        hoverItemId: string | null;
        sourceColumnId: string;
        targetColumnId: string;
      };
    }
  | { type: "DELETE_LIST"; payload: string } 
  | { type: "DELETE_TASK"; payload: { taskId: string; listId: string } };

// Funcție pentru a adăuga o sarcină
export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
});

// Funcție pentru a adăuga o listă
export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

// Funcție pentru a muta o listă
export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: "MOVE_LIST",
  payload: {
    draggedId,
    hoverId,
  },
});

// Funcție pentru a seta elementul tras
export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
});

// Funcție pentru a muta o sarcină
export const moveTask = (
  draggedItemId: string,
  hoverItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string
): Action => ({
  type: "MOVE_TASK",
  payload: {
    draggedItemId,
    hoverItemId,
    sourceColumnId,
    targetColumnId,
  },
});

// Funcție pentru a șterge o listă
export const deleteList = (listId: string): Action => ({
  type: "DELETE_LIST",
  payload: listId,
});

// Funcție pentru a șterge o sarcină
export const deleteTask = (taskId: string, listId: string): Action => ({
  type: "DELETE_TASK",
  payload: {
    taskId,
    listId,
  },
});

