import {Container, Header, TitleDiv, Title}  from './components/style';
import {TitleSpan, SubTitle, DriverInfo, MainInfo} from './components/style'
import {Driver, Rating, DriverPic, SmallDriverName} from './components/style'
import {CarPic, CarInfo, CarID, CarModel, RatingText} from './components/style'
import {SenderContainer, SenderInput, SendButton, IconButton} from './components/style'
import {CommentContainer, ClientPic, ClientMsg, ClientMsgDiv} from './components/style'
import {AnswerContainer} from './components/style'
import carImg from './static/images/carImg.png'
import star from './static/images/star.svg'
import phone from './static/images/phone.svg'
import add from './static/images/Add.svg'



export function App() {

  
  return (
    <div>
      
        <div>
          <main>
          <Container>
            <Header></Header>
            <TitleDiv>
              <Title>Encontre <TitleSpan>Marcos</TitleSpan> no local de partida</Title>
              <SubTitle>Chega em 3 minutos (800 metros)</SubTitle>
              </TitleDiv>
            <DriverInfo>
              <MainInfo>
                <Driver>
                  <Rating>
                    <img src={star} alt="" />
                    <RatingText>5.0</RatingText>
                    
                  </Rating>
                  <DriverPic src='https://github.com/marcoslorhanbs.png'></DriverPic>
                  

                  <SmallDriverName>Marcos</SmallDriverName>
                </Driver>
                <CarPic src={carImg}></CarPic>
              </MainInfo>
              <CarInfo>
                <CarID>BCD0D19</CarID>
                <CarModel>Honda Civic Roxo</CarModel>
              </CarInfo>
            </DriverInfo>

            <SenderContainer>
              <SenderInput placeholder='Enviar Mensagem para Marcos'></SenderInput>
              <SendButton >Publicar</SendButton>
              <IconButton ><img src={phone} alt="" /></IconButton>
              <IconButton><img src={add} alt="" /></IconButton>
            </SenderContainer>

            <CommentContainer>
              <ClientPic src='https://github.com/Rebehk.png'></ClientPic>
              <ClientMsgDiv>
                <ClientMsg>Marcos estou no local já lhe esperando.  Estou com camisa azul e calça jeans.</ClientMsg>
              </ClientMsgDiv>
            </CommentContainer>

            <AnswerContainer>
              <ClientPic src='https://github.com/marcoslorhanbs.png'></ClientPic>
              <ClientMsgDiv>
                <ClientMsg>Acabei de te ver. Vou estacionar o carro proximo.</ClientMsg>
              </ClientMsgDiv>
            </AnswerContainer>
            

          </Container>
          </main>
        </div>
      
    </div>
    
  )
}


