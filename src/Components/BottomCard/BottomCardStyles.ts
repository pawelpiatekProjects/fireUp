import styled from "styled-components";
import {Card, Typography} from "antd";
import * as variables from '../../assets/styles/variables';

const {Title, Text} = Typography;

export const BottomCardWrapper = styled(Card)`
  box-shadow: ${variables.boxShadowPrimary};
  border-radius: 2rem;
`;

export const CardHeader = styled.h1`
  color: ${variables.primaryYellow};
`;

