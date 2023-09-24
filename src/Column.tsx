import AddNewItem from "./AddNewItem";
import Card from "./Card";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";
import { ColumnContainer, ColumnTitle } from "./styles";

type Props = {
  text: string;
  id: string;
};
const Column = ({ text, id }: Props) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <>
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {tasks.map((task) => (
          <Card text={task.text} key={task.id} id={task.id} />
        ))}
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
