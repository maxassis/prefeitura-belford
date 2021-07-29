import styled from "styled-components";
import media from "styled-media-query";

export const ContainerMain = styled.div`
  background-color: #f5f5f5;

  h2 {
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    color: #f15a24;
    opacity: 1;
  }

  p {
    text-align: left;
    font: 1.25rem;
    color: #585858;
    opacity: 1;
  }
`;

export const Title = styled.div`
  margin-bottom: 1rem;

  @media (max-width: 680px) {
    h2 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  gap: 2.3125rem;
  margin-bottom: 2.9375rem;

  ${media.lessThan("large")`
    gap: 10px;
  `}

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 1.125rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 19.6875rem;
  height: 15.8125rem;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0.5rem;
  opacity: 1;
  padding-top: 1.875rem;
  padding-left: 1.17rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;

  img {
    margin-bottom: 2.0281rem;

    @media (max-width: 900px) {
      margin-bottom: 1.5rem;
    }
  }

  span {
    text-align: left;
    font-size: 1.125rem;
    font-weight: bold;
    color: #208e76;
  }

  @media (max-width: 900px) {
    height: 18.3125rem;
  }

  @media (max-width: 680px) {
    max-width: 100%;
    height: 14.3125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.875rem;
  }
`;

export const Text = styled.div`
  p {
    text-align: left;
    font-size: 1.125rem;
    color: #585858;

    @media (max-width: 680px) {
      text-align: center;
    }
  }
`;

export const WrapperGreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.021875rem;
  padding-bottom: 2rem;
  padding-left: 1.7606rem;
  padding-right: 2.5rem;

  background: #208e76;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  gap: 1.35375rem;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
  }

  span {
    text-align: left;
    color: #ffffff;
  }
`;

export const SolicitacionButton = styled.a`
  background: #f15a24;
  border-radius: 0.25rem;
  opacity: 1;
  line-height: 2.1875rem;
  padding: 0 1.1875rem;

  font-size: 0.875rem;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 900px) {
    margin-top: 1.5625rem;
  }
`;
