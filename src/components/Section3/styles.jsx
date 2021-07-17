import styled from "styled-components";
import { Container } from "../container";
import planta from "../../assets/imgs/planta1.png";
import jardinagem from "../../assets/imgs/jardinagem2.png";
import regar from "../../assets/imgs/regar.png";
import regar2 from "../../assets/imgs/regar2.png";

export const ContainerMain = styled(Container)`
  padding-top: 3.4613rem;
  padding-bottom: 1.25rem;
`;

export const WrapperTitle = styled.div`
  margin-bottom: 1rem;

  h3 {
    text-align: left;
    font: 2rem;
    font-weight: bold;
    color: #f15a24;
    opacity: 1;
  }

  p {
    text-align: left;
    font-size: 1.25rem;
    color: #585858;
    opacity: 1;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 14.9375rem;
  height: 19.8125rem;
  border-radius: 0.5rem;

  background: #ffffff;
  border: 0.0625rem solid #e8e8e8;
`;

export const Image = styled.div`
  width: 14.9375rem;
  height: 12.5625rem;
  background-image: url(${planta});
  background-repeat: no-repeat;
  background-size: cover;

  span {
    text-align: left;
    font: 0.875rem;
    color: #585858;
    margin-top: 1.125rem;
    margin-left: 0.5rem;
  }
`;

export const Image2 = styled(Image)`
  background-image: url(${jardinagem});
`;

export const Image3 = styled(Image)`
  background-image: url(${regar});
`;

export const Image4 = styled(Image)`
  background-image: url(${regar2});
`;

export const Gradient = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 0.6875rem;
  padding-bottom: 0.75rem;
  background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0%
    0% no-repeat padding-box;
  height: 100%;
  width: 100%;
`;

export const WrapperCurseTitle = styled.div`
  width: 11.625rem;
  height: 2.75rem;

  h3 {
    text-align: left;
    font: bold 1.125rem;
    color: #ffffff;
  }
`;

export const WrapperMatricula = styled.div`
  width: 100%;
  padding-top: 1.125rem;
  padding-left: 0.5rem;
  padding-right: 0.6875rem;
  padding-bottom: 1.020625rem;

  h4 {
    text-align: left;
    font: 14px;
    color: #585858;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.75rem;

  a:nth-child(1) {
    text-align: left;
    text-decoration: underline;
    font: 0.875rem;
    font-weight: bold;
    color: #4285f4;
    cursor: pointer;
  }

  a:nth-child(2) {
    line-height: 2.25rem;
    background: #f15a24;
    border-radius: 0.25rem;
    padding: 0 0.9375rem;
    cursor: pointer;
    text-align: center;
    font: 0.875rem;
    font-weight: bold;
    color: #ffffff;
  }
`;
