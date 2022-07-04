import styled from 'styled-components';

export const Container = styled.div`
margin-top: 2%;
width: 27%;
display: flex;
flex-wrap: wrap;
flex-direction: row;
height: 300px;
box-sizing: border-box;
`


export const TitleDiv = styled.div`
margin-top: 2%;
background-color: #C4AAD3;
width: 100%;
height: 17%;
text-align: center;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
font-family: 'Inter', sans-serif;
font-weight: 500;
font-size: 16px;
color: white;
box-sizing: border-box;
`;

export const Title = styled.p`
text-align: center;
font-family: 'Inter', sans-serif;
font-weight: 500;
font-size: 16px;
color: white;
box-sizing: border-box;
`


export const CartWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: #f5f5f5;
height: max-content;
text-align: center;
box-sizing: border-box;
`

export const CartCard = styled.div`
    margin-top: -3%;
    margin-bottom: 3%;
    box-sizing: border-box;
    text-align: center;

    img{
        display: flex;
        height: auto;
        width: 23%;
        margin-top: 7%;
        margin-left: 8%;
        background-color: white;
        box-sizing: border-box;
        text-align: center;
    }
`

export const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -26%;
    box-sizing: border-box;
    text-align: center;
`



export const ProdTitle = styled.p`
font-family: 'Inter', sans-serif;
font-weight: 700;
font-size: 18px;
color: #333333;
margin-top: 3%;
margin-bottom: -0.5%;
margin-left: 45%;
text-align: left;
`

export const PriceQuant = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
box-sizing: border-box;
text-align: center;
`


export const CartPrice = styled.p`
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: #9363AC;
        max-width: 0px;
        margin-right: -40px;
        margin-top: 3%;
        margin-bottom: -0.5%;
        margin-left: 45%;
        text-align: left;
        box-sizing: border-box;

        ::before{
            content: "R$";
        }
`

export const Quant = styled.input`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #9363AC;
  margin-right: -40px;
  margin-top: 3%;
  margin-bottom: -0.5%;
  margin-left: 45%;
  text-align: left;
  border: none;
  background-color: #F5F5F5;
  width: 85%;
  height: 15%;
  text-align: center;
  border-radius: 5px;
  box-sizing: border-box;
`

export const Button = styled.button`
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 12px;
color: #828282;
margin-top: 3%;
margin-bottom: -0.5%;
margin-left: 45%;
text-align: left;
background: rgba(0,0,0,0);
border: none;
box-sizing: border-box;
:hover{
    cursor:pointer;
}
`


export const DefaultInfo = styled.div`
  margin-top: 5%;
  box-sizing: border-box;
  text-align: center;
`

export const Cart = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: #333333;
    box-sizing: border-box;
    text-align: center;
    }
`


    export const CartDesc = styled.p`
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #828282;
        box-sizing: border-box;
        text-align: center;

`