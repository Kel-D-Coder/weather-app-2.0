import { styled } from "styled-components";

export const Details = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 50px;
  width: 35rem;
  border-radius: 15px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.1);

  & > div {
    display: inherit;
    justify-content: space-around;
  }

  & > div > img {
    width: 150px;
    height: 150px;
  }

  p {
    font-weight: bold;
  }
`;