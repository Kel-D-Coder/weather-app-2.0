import { styled } from "styled-components";

export const WeatherContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    height: 100vh;

    input[type="text"] {
        min-width: 20rem;
        border-radius: 10px;
        border: none;
        padding: 4px 10px;
        margin: auto;
    }
`;