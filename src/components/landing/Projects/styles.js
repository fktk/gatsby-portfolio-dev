import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
    margin-bottom: 0.5rem;
    font-size: 12pt;
    font-weight: normal;
    line-height: 1.6;
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;

		@media (max-width: 960px) {
			color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
		}
  }

`;

export const TextWrapper = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    order: 1;
  }
`

export const Grid = styled.div`
  padding-right: 1rem;
  padding-top: 2.5rem;
  flex: 1;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1rem 1rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    order: 2
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 100px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;
`;
