import styled from "styled-components";
import { Container } from "../../components/container";

export const ContainerMain = styled(Container)`
  padding-top: 1.875rem;
  display: flex;
  gap: 2.4044rem;
`;

export const WrapperImage = styled.div`
  width: 36.1875rem;
  height: 36.75rem;
  position: relative;
  margin-left: -3.6875rem;

  img {
    position: absolute;
  }
`;

export const Text1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  position: absolute;
  width: 100%;
  max-width: 11.3125rem;
  height: 3.5625rem;
  background: #ffffff;
  box-shadow: 0rem 0.1875rem 0.375rem #00000029;
  border-radius: 0.5rem;
  top: 1.875rem;
  left: 11rem;

  text-align: left;
  font-size: 0.875rem;
  color: #f15a24;

  img {
    position: relative;
  }
`;

export const Text2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  position: absolute;
  width: 100%;
  max-width: 11.3125rem;
  height: 3.5625rem;
  background: #ffffff;
  box-shadow: 0rem 0.1875rem 0.375rem #00000029;
  border-radius: 0.5rem;
  top: 7.375rem;
  right: 4.5rem;

  text-align: left;
  font-size: 0.875rem;
  color: #f15a24;

  img {
    position: relative;
  }
`;

export const Text3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  position: absolute;
  width: 100%;
  max-width: 11.3125rem;
  height: 3.5625rem;
  background: #ffffff;
  box-shadow: 0rem 0.1875rem 0.375rem #00000029;
  border-radius: 0.5rem;
  top: 9.6875rem;
  left: 6.75rem;

  text-align: left;
  font-size: 0.875rem;
  color: #f15a24;

  img {
    position: relative;
  }
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 28.875rem;
  height: 29.1875rem;

  background: #ffffff;
  border: 0.0625rem solid #e8e8e8;
  border-radius: 0.5rem;
  padding: 2.75rem 3.625rem 2.5625rem 3.625rem;

  label {
    text-align: left;
    font-size: 0.875rem;
    font-weight: bold;
    color: #585858;
  }

  p {
    text-align: center;
    font-size: 1.125rem;
    font-weight: bold;
    color: #f15a24;
    margin-bottom: 1.75rem;
  }
`;

export const Form = styled.form`
  span {
    margin-top: 2rem;
    display: block;
    margin: 2rem auto;
    text-align: center;
    font-size: 0.75rem;
    color: #677975;

    a {
      text-decoration: underline;
      font: 0.75rem;
      font-weight: bold;
      letter-spacing: 0rem;
      color: #f15a24;
    }
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    max-width: 21.625rem;
    height: 3rem;
    background: #ffffff;
    border: 0.0625rem solid #e8e8e8;
    padding-left: 18px;
  }

  a {
    color: #677975;
  }

  :nth-child(1) {
    margin-bottom: 1.5rem;
  }
`;

export const WrapperForgotPassword = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: underline;
    font-size: 0.75rem;
    color: #677975;
  }
`;

export const Button = styled.button`
  width: 100%;
  line-height: 2.5625rem;
  background: transparent linear-gradient(270deg, #f15a24 0%, #fd6d36 100%) 0%
    0% no-repeat padding-box;

  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  margin-top: 2.8844rem;
`;
