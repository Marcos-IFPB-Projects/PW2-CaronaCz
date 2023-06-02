import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 56px 253px;
    gap: 99px;
    
    margin-left: 25vw;
    justify-content: center;

    position: absolute;
    width: 50vw;
    height: 100vh;

    background: var(--white);
    border-radius: 40px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 6vw;
    height: 5vh;
    position: absolute;
    top: 2vh;

    border-radius: 999px;

    background: var(--gray03);
`;

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    position: absolute;
    left: 3vw;
    top: 15vh;
    width: 880px;
    height: 82px;
    
`;

export const Title = styled.text`
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
`;

export const TitleSpan = styled.span`
    color: var(--purple);
`;

export const SubTitle = styled.text`
    width: 421px;
    height: 30px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 10px;

`;

export const DriverInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 105px;

    position: absolute;
    left: 2vw;
    top: 30vh;

`;

export const MainInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 105px;

    width: 889px;
    height: 170.29px;


`;

export const Driver =  styled.div`
    position: absolute;
    width: 137px;
    height: 141.37px;
`;

export const Rating =  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7.84309px 21.5685px;
    gap: 19.61px;

    position: absolute;
    left: 8px;
    width: 80px;
    height: 26px;
    top: 12vh;
    z-index: 2;


    background: var(--black);
    border-radius: 15.6862px;
`;

export const RatingText = styled.text`
    color: var(--white);
`;

export const DriverPic = styled.img`
    position: absolute;
    height: 97px;
    z-index: 1;
`;

export const SmallDriverName =  styled.text`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7.84309px 21.5685px;
    gap: 19.61px;

    position: absolute;
    top: 15vh;
`;

export const CarPic = styled.img`
    position: absolute;
    left: 5vw;
    right: 57.48%;
    top: 18px;
    bottom: 17%;
    height: 97px;

    z-index: 0;
`;

export const CarInfo = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12.33px;

    position: absolute;
    left: 30vw;
    top: 3vh;
`;


export const CarID =  styled.text`    

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 41.0955px;
    line-height: 50px;
`;

export const CarModel = styled.text`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24.6573px;
    line-height: 30px;
`;

export const SenderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    padding: 0px;
    gap: 32px;

    bottom: 30vh;
    left: 3vw;


`;

export const SenderInput = styled.input`
    width: 26vw;
    height: 6vh;

    background: var(--white);
    border-color: var(--black);
    border-radius: 10px;
`;

export const SendButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px 14px;
    gap: 10px;

    width: 80px;
    height: 7vh;

    color: var(--white);
    /* Brand Colors/Ignite/mid */
    background: var(--green01);
    border-radius: 8px;

    :hover
    {
        background: var(--green02); 
    }
`;

export const IconButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;

    width: 30px;
    height: 5vh;
    border: 0;
    background: var(--white);
    
    :hover
    {
        background: var(--white);
    }

    

`;

export const CommentContainer = styled.div`
   box-sizing: border-box;

    width: 49vw;
    height: 10vh;

    position: absolute;

    bottom: 18vh;

    background: var(--gray01);
    border: 1px solid var(--gray02);
    border-radius: 9px; 
`;

export const AnswerContainer = styled.div`
   box-sizing: border-box;

    width: 49vw;
    height: 10vh;

    position: absolute;

    bottom: 6vh;

    background: var(--gray01);
    border: 1px solid var(--gray02);
    border-radius: 9px; 
`;

export const ClientPic = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 9px;
    top: 5px;
    
    border-radius: 8px;
`;

export const ClientMsgDiv = styled.div`
    position: absolute;
    left: 5vw;

`;

export const ClientMsg = styled.text`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
`;



