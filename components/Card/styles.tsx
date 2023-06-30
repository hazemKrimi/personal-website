import styled from 'styled-components';
import Link from 'next/link';

export const StyledCard = styled(Link)<{ image?: boolean }>`
  cursor: pointer;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ image }) => (image ? 'auto 9.375rem' : 'auto')};
  align-items: stretch;
  transition: color 0ms ease-in-out;
  text-decoration: none;
  color: var(--text);

  @media (max-width: 320px) {
    grid-template-columns: ${({ image }) => (image ? 'auto 7.813rem' : 'auto')};
  }

  @media (min-width: 1440px) {
    grid-template-columns: ${({ image }) =>
      image ? 'auto 15.625rem' : 'auto'};
  }

  &:hover {
    & > div {
      background: ${({ theme }) => theme.colors.blue};

      * {
        color: ${({ theme }) => theme.colors.dark.text} !important;
      }
    }

    img {
      filter: ${({ image }) => (image ? 'grayscale(80%)' : 'none')};
    }
  }

  .card-content {
    padding: 1rem 0rem;
    background: var(--secondary-background);
    display: grid;
    row-gap: 0.5rem;

    @media (max-width: 768px) {
      padding: 0.75rem 0rem;
    }
  }

  .card-image {
    position: relative;
    width: 100%;
  }

  h3,
  p,
  .tags-wrapper {
    padding: 0rem 1rem;

    @media (max-width: 768px) {
      padding: 0rem 0.5rem;
    }
  }

  h3 {
    font-size: 1.3rem;
  }

  .tags-wrapper {
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
  }

  span {
    font-size: 0.7rem;
  }
`;
