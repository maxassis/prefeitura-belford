import styled from "styled-components";
import { Container } from "../container/index.jsx";
import media from "styled-media-query";

export const ExternalContainer = styled.div`
  background-color: #f5f5f5;
`;

export const ContainerMain = styled(Container)`
  padding-top: 2.75rem;
  padding-bottom: 2.625rem;
  background-color: #f5f5f5;

  ${media.lessThan("medium")`
    img{
      margin: 0 auto;
      width: 45px;
    }
  `}
`;

export const Title = styled.div`
  h3 {
    text-align: left;
    font: 2rem;
    font-weight: bold;
    color: #f15a24;
  }

  p {
    text-align: left;
    font: 1.6875rem;
    color: #585858;
    margin-bottom: 2.4456rem;
  }

  ${media.lessThan("medium")`
    h3{
      text-align: center;
    }
    p{
      text-align: center;
    }
  `}
`;
