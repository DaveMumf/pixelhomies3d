import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'


export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          PIXEL
          <br />
          HOMIES
        </h1>
        <p>CHINGAS A TU MADRE!!!!</p>
      </TopLeft>
      <BottomLeft>
        Una creación de <a href="https://sabarobestudios.io">Sabarobe Studios</a>
      </BottomLeft>
      <BottomRight>
        Se parte del HOMIEVERSE
        <br />
        Únete a nuestra comunidad
        <br />
        Colección 100% Mexicana
        <br />
        COMING SOON... 
        <br />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      
    </Container>
  )
}
