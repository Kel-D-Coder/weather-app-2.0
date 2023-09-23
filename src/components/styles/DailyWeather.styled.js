import { styled } from "styled-components";

export const StyledDailyWeather = styled.section`
    display: flex;
    gap: 20px;
    margin-top: 15px;

  div {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 20px;
    width: 7rem;
    height: 7rem;
    border-radius: 30%;
    display: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  img {
    width: 50px;
    height: 50px;
  }
`;