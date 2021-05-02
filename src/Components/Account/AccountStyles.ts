import styled from "styled-components";
import {Card} from 'antd';
import * as variables from '../../assets/styles/variables';

export const AccountWrapper = styled.div`
  height: 100%;
  background: ${variables.primaryGray};
`;

export const AccountCard = styled(Card)`
  box-shadow: ${variables.boxShadowSecondary};
  margin-top: 5rem;
`;