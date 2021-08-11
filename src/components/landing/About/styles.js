import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Details = styled.div`
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 12pt;
    font-weight: normal;
    line-height: 1.6;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }

`;

