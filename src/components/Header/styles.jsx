import styled from "styled-components";
import { User } from "@styled-icons/remix-line/User";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";

export const ExternalContainer = styled.div`
  background-color: #ffffff;
`;

export const WrapperMain = styled.div`
  width: 100%;
  height: 4.6875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const Img = styled.img`
  max-width: 100%;
  width: 13.5625rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 1.875rem;
  font-weight: bold;
  color: #585858;
  opacity: 1;
`;

export const SecondList = styled.ul`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #585858;
  opacity: 1;
  margin-right: 1.875rem;

  li:nth-child(2) {
    margin-left: 0.8125rem;
  }
`;

export const Icon = styled(User)`
  color: #585858;
  width: 0.875rem;
  height: 0.875rem;
`;

export const ArrowIcon = styled(DownArrow)`
  width: 0.4375rem;
  height: 0.375rem;
  color: #585858;
  margin-left: 0.4375rem;
`;
