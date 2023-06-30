import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 75vh;
  padding: 1rem 0rem;
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 2rem;

  @media (max-width: 768px) {
    row-gap: 1rem;
  }

  .meta {
    .back {
      cursor: pointer;
      text-align: left;
      display: inline-flex;
      align-items: center;

      span {
        color: ${({ theme }) => theme.colors.blue} !important;
      }
    }

    .image {
      margin: 1rem 0rem;
    }

    h1,
    p {
      text-align: left;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }

  hr {
    height: 0.1rem;
    opacity: 0.3;
    margin: 1rem auto 0rem auto;
  }

  .content {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    & > * {
      margin: 0.5rem 0rem;
    }

    button {
      margin: 1rem 0rem;
    }

    p * {
      width: 100%;
      height: auto;
    }

    ul,
    ol {
      margin-inline-start: 0.5rem;
      list-style-position: inside;
    }

    .showcase-buttons {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
