import AddNewItem from "./AddNewItem";
import Card from "./Card";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

type Props = {
  text: string;
  id: string;
};
const Column = ({ text, id }: Props) => {
  const { getTasksByListId } = useAppState();
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
          onAdd={(msg) => console.log("New item created ", msg)}
          dark
        />
      </ColumnContainer>
    </>
  );
};
export default Column;
