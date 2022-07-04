import React from 'react';
import { Button, Caption, Container, InfoWrap, Price, Title, InnerDiv, WrapDiv } from './styles';
import { useDispatch } from "react-redux";
import { addProdThunk } from "../../store/modules/cart/thunks";


function ProdCard({prod, ...rest}) {
  const dispatch = useDispatch();



  return (
    <Container key={prod.id}>
        <img src={prod.imageSource}/>
        <InfoWrap>
            <InnerDiv>
                <Title>{prod.productName}</Title>
                <Caption>{prod.description}</Caption>
                <WrapDiv>
                    <Price>{prod.price}</Price>
                    <Button {...rest} onClick={() => dispatch(addProdThunk(prod))}>Adicionar</Button>
                </WrapDiv>
            </InnerDiv>
        </InfoWrap>
    </Container>
  );
}

export default ProdCard;