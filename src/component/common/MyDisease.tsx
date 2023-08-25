import styled from 'styled-components';
import Icon from './Icon';

const Controller = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-sub-2);
  margin-bottom: 5px;
  span {
    font-size: 0.875rem;
  }
`;

const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  border: none;
  text-align: center;
  color: var(--color-sub-2);
  svg {
    margin-left: 5px;
  }
`;

const ListContainer = styled.ul`
  width: 290px;
  display: flex;
  overflow-x: auto;
  list-style: none;
`;

interface ListProps {
  mode: 'select' | 'result';
}

const List = styled.li<ListProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-main);
  white-space: nowrap;
  font-size: 1rem;
  border: 1px solid var(--color-main);
  border-radius: 1.875rem;
  padding: 5px 15px;
  box-sizing: border-box;
  cursor: ${(props) => (props.mode === 'select' ? 'pointer' : 'default')};
  margin-right: 5px;
  svg {
    margin-top: 3px;
    margin-left: 5px;
  }
`;

interface MyDiseaseProps {
  mode: 'select' | 'result';
  selectedList: string[];
  onDelete?: (item: string) => void;
  reset?: () => void;
}

const MyDisease = ({ mode, selectedList, onDelete, reset }: MyDiseaseProps) => {
  return (
    <>
      <Controller>
        <span> {mode === 'select' ? '나의 질환' : '보유 질환'}</span>
        {mode === 'select' ? (
          <ResetButton onClick={reset}>
            초기화
            <Icon icon="reset" size={13.5} color="var(--color-sub-2)" />
          </ResetButton>
        ) : null}
      </Controller>
      <ListContainer>
        {selectedList.map((item) => (
          <List key={item} mode={mode} onClick={() => onDelete?.(item)}>
            {item} <Icon icon="close" size={13.5} color="var(--color-sub-2)" />
          </List>
        ))}
      </ListContainer>
    </>
  );
};
export default MyDisease;