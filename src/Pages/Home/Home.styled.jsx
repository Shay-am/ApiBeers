import styled from 'styled-components';
import { Logo } from '../../Assets';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledHeading = styled.header`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  height: 6rem;
  margin-top: 7rem;
`;
export const MainWrapper = styled.main`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledDescription = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledLogo = styled(Logo)`
  margin-top: 4rem;
  /* align-items: stretch; */
`;
