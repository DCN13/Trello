import AddNewItem from "./AddNewItem";
import Column from "./Column";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

function App() {
  const { lists } = useAppState();
  return (
    <>
      <AppContainer>
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id} />
        ))}

        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(msg) => console.log("Item created : ", msg)}
        />
      </AppContainer>
    </>
  );
}

export default App;
