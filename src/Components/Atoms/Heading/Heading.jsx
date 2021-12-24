import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: ${({ theme, small }) => (small ? theme.size.x : theme.size.xl)};
  color: ${({ theme }) => theme.color.text_blue};
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: 0px;
  text-transform: uppercase;
`;

export const HeadingH3 = styled.h3`
  font-size: 2vmin;
  color: ${({ theme }) => theme.color.text_blue};
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: 0px;
  text-transform: uppercase;
`;
