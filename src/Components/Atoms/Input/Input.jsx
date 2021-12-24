import styled from 'styled-components';

export const Input = styled.input`
  font-size: ${({ theme }) => theme.size.m};
  width: calc(36rem - 1vmin);
  height: 5rem;
  color: ${({ theme }) => theme.color.text_blue};
  font-weight: ${({ theme }) => theme.size.regular};
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => theme.color.border_light_blue};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.border_light_blue};
  }

  @media (max-width: 520px) {
    width: 25rem;
    height: 4rem;
  }
  @media (max-width: 360px) {
    width: 18rem;
  }
`;
