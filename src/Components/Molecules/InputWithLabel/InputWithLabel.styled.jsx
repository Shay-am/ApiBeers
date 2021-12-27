import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  font-size: ${({ theme }) => theme.size.m};
  color: ${({ theme }) => theme.color.text_blue};
  font-weight: ${({ theme }) => theme.weight.bold};
  bottom: 1rem;
  left: 1rem;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
