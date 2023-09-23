import AddNewItem from "./AddNewItem";
import Card from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type Props = {
  text: string;
};
const Column = ({ text }: Props) => {
  return (
    <>
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        <Card text="Component Scafold" />
        <Card text="TypeScript" />
        <Card text="Component React" />
        <AddNewItem
          toggleButtonText="+ Add another card"
          onAdd={() => console.log("New item created")}
          dark="true"
        />
      </ColumnContainer>
    </>
  );
};
export default Column;
