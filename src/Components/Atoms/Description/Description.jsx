import styled from 'styled-components';

export const Description = styled.span`
  color: ${({ theme }) => theme.color.text_blue};
  font-size: ${({ theme, size }) => (size ? size : theme.size.m)};
  font-weight: ${({ theme, bold }) => (bold ? theme.weight.bold : theme.weight.regular)};
`;
