import { CardContainer } from "./styles";

type Props = {
  text: string;
  id: string;
};
const Card = ({ text }: Props) => {
  return (
    <>
      <CardContainer>{text}</CardContainer>
    </>
  );
};
export default Card;
