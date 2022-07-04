import styled from 'styled-components';

export const Container = styled.div`
border: 1px solid #F5F5F5;
margin-right: 3%;
margin-top: 2%;
display: flex;
flex-wrap: wrap;
width: 29.3%;
height: 280px;
background-color: #F5F5F5;
border-radius: 15px;
box-sizing: border-box;

img{
    display: flex;
    vertical-align: middle;
    height: auto;
    width: 40%;
    margin-top: 0%;
    margin-left: 30%;
}
`;

export const InfoWrap = styled.div`
background-color: white;
display: flex;
height: 60%;
width: 100%;
border-bottom-right-radius: 15px;
border-bottom-left-radius: 15px;
box-sizing: border-box;

`

export const InnerDiv = styled.div`
padding-left: 5%;
padding-right: 5%;
line-break: auto;
box-sizing: border-box;`

export const Title = styled.p`
font-family: 'Inter', sans-serif;
font-weight: 700;
font-size: 18px;
color: #333333;
box-sizing: border-box;
line-break: auto;
`

export const Caption = styled.p`
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 12px;
color: #828282;
box-sizing: border-box;
line-break: auto;
`

export const WrapDiv = styled.div`
display:flex;
flex-directio:row;
`



export const Price = styled.p`
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 14px;
color: #9363AC;
max-width: 0px;
box-sizing: border-box;
line-break: auto;
::before{
    content: "R$";
}
`
export const Button = styled.button`
width: 50px;
font-family: 'Inter', sans-serif;
font-weight: 500;
font-size: 14px;
color: #828282;
text-decoration: underline;
background: rgba(0,0,0,0);
border: none;
box-sizing: border-box;
line-break: auto;
margin-left: 50%;
:hover{
    cursor:pointer;
}
`