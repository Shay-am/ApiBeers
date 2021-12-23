import styled from 'styled-components';

export const Description = styled.span`
  color: ${({ theme }) => theme.color.text_blue};
  font-size: calc(${({ theme }) => theme.size.m});
  font-weight: ${({ theme, bold }) => (bold ? theme.weight.bold : theme.weight.regular)};
`;
