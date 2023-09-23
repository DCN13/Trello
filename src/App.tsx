import AddNewItem from "./AddNewItem";
import Column from "./Column";
import { AppContainer } from "./styles";

function App() {
  return (
    <>
      <AppContainer>
        <Column text="Todo:" />
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(msg) => console.log("Item created : ", msg)}
        />
      </AppContainer>
    </>
  );
}

export default App;
