import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #4c8bf5; 
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
  border-radius: 8px; 
`;


interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}
export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
  transform: ${(props) => (props.isPreview ? "rotate(6deg)" : undefined)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #f4f5f7; 
  width: 320px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 6px; /* Colțuri mai rotunjite */
  padding: 12px;
  flex-grow: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
`;


export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #ffffff; 
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 1rem;
  max-width: 300px;
  border-radius: 6px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); 
  }
`;


type AddItemButtonProps = {
  dark?: boolean;
};
export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ff9800; 
  border-radius: 6px; /* Colțuri mai rotunjite */
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 12px 16px;
  text-align: center;
  width: 100%;
  transition: background 150ms ease-in, transform 0.2s ease;

  &:hover {
    background-color: #ff5722; 
    transform: scale(1.05);
  }
`;


export const NewItemFormContainer = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8; 
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;


export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e424 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0rem;
  width: 100%;
`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  width: 100%;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white; 
  border: none; 
  border-radius: 6px;
  padding: 10px 20px; 
  font-size: 14px;
  cursor: pointer; 
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 10px; 
  
  &:hover {
    background-color: #e53935; 
    transform: scale(1.05); 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
  }
`;

export const DeleteCardButton = styled.button`
  background-color: #ff4d4d; 
  color: white;
  border: none;
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 10px;

  &:hover {
    background-color: #e53935;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;
export const EditCardButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

export const SaveButton = styled.button`
  background-color: #008CBA;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: #007bb5;
  }
`;


type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
};
export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y } }) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`,
    },
  })
)<DragPreviewWrapperProps>``;
