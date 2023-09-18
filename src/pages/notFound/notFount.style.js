import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotTitle = styled.h2`
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px;
  color: #fff;
  margin-top: 356px;
`;

export const NotText = styled.span`
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  color: #fff;
`;

export const NotTextMini = styled.div`
  margin-top: 19px;
  widht: 431px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.054px;
  color: #4e4e4e;
  text-align: center;
`;

export const NotButton = styled.button`
  border-radius: 6px;
  background: var(--palette-purple-90, #580ea2);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.054px;
  color: #fff;
  width: 278px;
  height: 52px;
  margin-top: 36px;
  border: none;

  &:hover {
    background: #3f007d;
  }

  &:active {
    background: var(--palette-purple-100, #271a58);
  }
`;

export const NotImgBox = styled.div`
  display: flex;
  align-items: center;
`;

export const NotImg = styled.img`
  margin-left: 8px;
  width: 52px;
  height: 52px;
`;
