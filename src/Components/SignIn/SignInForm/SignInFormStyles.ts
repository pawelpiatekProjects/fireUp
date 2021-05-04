import styled from "styled-components";
import {Space, Card} from 'antd';
import * as variables from '../../../assets/styles/variables'

export const CardWrapper = styled(Card)`
  box-shadow: ${variables.boxShadowSecondary};
  padding: 3rem 0;
`;

export const SpaceWrapper = styled(Space)`
  width: 100%;
`;

export const FieldWrapper = styled.div``;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: .5rem;
  color: ${variables.primaryRed};
  font-weight: bold;
  height: 2rem;
`;