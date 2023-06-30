import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  min-height: 100px;
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  justify-content: flex-end;
  align-content: center;
  padding: 1rem 0rem;

  @media (max-width: 768px) {
    width: 95%;
  }

  .contact {
    display: grid;
    grid-template-columns: repeat(auto-fill, 16px);
    column-gap: 1rem;
    align-items: center;
    justify-content: flex-start;

    * {
      user-select: none;
    }

    @media (max-width: 768px) {
      column-gap: 0.5rem;
    }
  }

  p {
    display: inline;
    text-align: right;
    font-weight: bold;
  }
`;
