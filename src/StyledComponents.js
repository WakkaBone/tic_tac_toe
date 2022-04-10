import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const ContentWrapper = styled.main`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 50vw;
  min-height: 50vh;
  padding: 1%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const GameContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainHeading = styled.h1`
  font-family: "Rock Salt", cursive;
  font-weight: 600;
`;
export const Subheader = styled.h3`
  font-family: "Rock Salt", cursive;
  font-weight: 300;
`;

export const CellContent = styled.p`
  font-family: "Rock Salt", cursive;
  font-size: 2em;
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CellStyle = styled.div`
  flex: 30%;
  max-height: 60px;
  margin: 0.1%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
display: block;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  padding: 5%;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 2em;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}
`;

export const ResultContainer = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GameStartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
`;

export const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px dashed black;
  border-radius: 50%;
  animation: ${rotation} 2s linear infinite;
`;
