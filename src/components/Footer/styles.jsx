import styled from "styled-components";
import { Container } from "../container/index.jsx";

export const ExternalContainer = styled.div`
  background-color: #292828;
`;

export const ContainerMain = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292828;
  padding-top: 2.0625rem;
  padding-bottom: 2.125rem;

  span {
    text-align: left;
    font: 0.875rem;
    color: #ffffff;
  }
`;
