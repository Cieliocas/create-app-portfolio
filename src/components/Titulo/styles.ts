import styled from 'styled-components';

import { Props } from './index.tsx';

export const Titulo = styled.h3<Props>`
  color: #282A35;
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
  margin-bottom: 16px;
`;

// font-size: ${props => props.fontSize ? props.fontSize + 'px' : '14px'};
