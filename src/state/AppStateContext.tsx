import { Dispatch, createContext, useContext } from "react";
import { AppState, List, Task, appStateReducer } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "t1", text: "Learn React/TypeScript" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "t2", text: "Earn Trillion" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "t3", text: "Learn Happily Ever After" }],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
