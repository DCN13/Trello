import { CardContainer, ColumnContainer, ColumnTitle } from "./styles";

type Props = {
  text: string;
};
const Column = ({ text }: Props) => {
  return (
    <>
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        <CardContainer>App Scafold</CardContainer>
        <CardContainer>Use TypeScript</CardContainer>
        <CardContainer>Use styled component</CardContainer>
      </ColumnContainer>
    </>
  );
};
export default Column;
