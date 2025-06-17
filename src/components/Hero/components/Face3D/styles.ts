import styled from "styled-components";

export const Container = styled.div`
  min-width: 682px;

  @media (max-width: 768px) {
    position: absolute;
    min-width: 682px;
    transform: translateX(-10%);
  }
  @media (max-width: 1020px) {
    position: absolute;
    min-width: 682px;
    left: 30%;

    transform: translateX(-20%);
  }

  @media (max-width: 400px) {
    position: absolute;
    min-width: 682px;
    left: 60%;
    transform: translateX(-40%);
  }
`;

export const SceneContainer = styled.div`
  margin-top: 100px;
  height: 712px;
`;
