import {
  Container,
  ContainerText,
  Darkness,
  Stars,
  StarsContainer,
  SubTitle,
  Title,
} from "./style";
import GlobalStyle from "./styles/global";
import gif from "./assets/imgs/gif.gif";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ContainerText>
          <Title>Paulo Marioto</Title>
          <SubTitle>FullStack Developer</SubTitle>
        </ContainerText>

        <StarsContainer>
          <Stars src={gif} />
          <Darkness />
        </StarsContainer>
      </Container>
    </>
  );
}

export default App;
