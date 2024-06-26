import styled from "@emotion/styled";
import { getMonthAndDate } from "@/utils";

interface SearchedItemProps {
  keyword: string;
  date: string;
  onDeleteClick: (event: React.MouseEvent, clickedKeyword: string) => void;
  onSelectClick: (clickedKeyword: string) => void;
}

export default function SearchedItem({
  keyword,
  date,
  onDeleteClick,
  onSelectClick,
}: SearchedItemProps) {
  const { month, date: currentDate } = getMonthAndDate(date);

  return (
    <Container onClick={() => onSelectClick(keyword)}>
      <KeywordBox>{keyword}</KeywordBox>
      <DateAndButtonArea>
        <DateBox>{`${month}.${currentDate}`}</DateBox>
        <DeleteButton onClick={(event) => onDeleteClick(event, keyword)}>
          x
        </DeleteButton>
      </DateAndButtonArea>
    </Container>
  );
}

const Container = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const KeywordBox = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const DateAndButtonArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DateBox = styled.span`
  margin-top: 5px;
`;

const DeleteButton = styled.button`
  border: 0px;
  cursor: pointer;
`;
