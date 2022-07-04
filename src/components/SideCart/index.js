import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delProdThunk } from "../../store/modules/cart/thunks";
import { Button, CartWrapper, CartDesc, Quant, PriceQuant, Container, ProdTitle, Title, CartCard, TitleDiv, DefaultInfo, Cart, CartPrice, InfoWrap } from './styles';

function SideCart() {

    const cartArray = useSelector((state) => state.cart.prods)
    const dispatch = useDispatch();

  return (
    <Container>
        <TitleDiv>
            <Title>Carrinho</Title>
        </TitleDiv>
        <CartWrapper>
                {cartArray.lenght===0?
                <DefaultInfo>
                    <Cart>Carrinho Vazio</Cart>
                    <CartDesc>Adicione Produtos</CartDesc>
                </DefaultInfo>
                :
                cartArray.map((prod)=>
                <CartCard key={prod.id}>
                    <img src={prod.imageSource}/>
                    <InfoWrap>
                        <ProdTitle>{prod.productName}</ProdTitle>
                        <PriceQuant>
                            <CartPrice>{prod.price}</CartPrice>
                            <Quant type="number" min="1" defaultValue={prod.qtd}></Quant>
                        </PriceQuant>
                        <Button onClick={() => dispatch(delProdThunk(prod.id))}>Remover Item</Button>
                    </InfoWrap>
                </CartCard>)
                                
                }
        </CartWrapper>
    </Container>
  );
}

export default SideCart;