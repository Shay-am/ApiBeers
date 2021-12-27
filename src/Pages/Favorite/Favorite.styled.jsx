import styled from 'styled-components';
import { Button, Input } from '../../Components';

export const StyledForm = styled.form`
  display: flex;
  font-size: 1.5rem;
  width: 90%;
  height: 5rem;
  align-items: center;
  color: ${({ theme }) => theme.color.text_blue};

  @media (max-width: 550px) {
    font-size: 1.3rem;
  }
`;

export const StyledInput = styled(Input)`
  width: 23rem;
  height: 3rem;
  margin: 0;
  margin-left: 0.5rem;
`;

export const StyledButton = styled(Button)`
  text-align: center;
  padding: 0;
  margin: 0;
  width: 8rem;
  height: 3rem;
`;
