import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.4rem;
  width: 36rem;
  height: 6rem;
  color: white;
  font-weight: bold;
  padding: 1.7rem;
  margin: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.btn};
  text-transform: uppercase;

  @media (max-width: 520px) {
    width: 25rem;
    height: 5rem;
  }
  @media (max-width: 360px) {
    width: 18rem;
  }
`;
