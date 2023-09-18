import styled, { css } from "styled-components";

export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  color: #ffffff;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterButtonBoxAuthor = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
`;

export const FilterButtonMixin = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #181818;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;

export const FilterButtonAuthor = styled.button`
  ${FilterButtonMixin}
  border: 1px solid ${(props) => (props.$color ? "#ffffff" : "#ad61ff")};
  color: ${(props) => (props.$color ? "#ffffff" : "#ad61ff")};
`;

export const FilterButtonYear = styled.button`
  ${FilterButtonMixin}
  border: 1px solid ${(props) => (props.$color ? "#ffffff" : "#ad61ff")};
  color: ${(props) => (props.$color ? "#ffffff" : "#ad61ff")};
`;

export const FilterButtonGenre = styled.button`
  ${FilterButtonMixin}
  border: 1px solid ${(props) => (props.$color ? "#ffffff" : "#ad61ff")};
  color: ${(props) => (props.$color ? "#ffffff" : "#ad61ff")};
`;

export const FilterMenu = styled.div`
  padding: 34px;
  border-radius: 12px;
  position: absolute;
  background-color: #313131;
  width: 248px;
  height: 305px;
  visibility: visible;
`;

export const FilterMenuScroll = styled.div`
  width: 180px;
  height: 237px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    margin: 34px;
  }

  &::-webkit-scrollbar-track {
    background: #4b4949;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 20px;
  }
`;

export const FilterButtonBoxYear = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
`;

export const FilterButtonBoxGenre = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
`;

export const FilterMenuLink = styled.a`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #fff;

  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
  }
`;
