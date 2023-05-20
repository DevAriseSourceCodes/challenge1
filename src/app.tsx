const Wrapper = styled.div`
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  /* border: 2px solid red; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: relative;

  h1 {
    position: absolute;
    top: 20px;
    font-weight: 600;
    font-size: clamp(2rem, 5vw, 3.5rem);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;

  @media screen and (min-width: 500px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;
