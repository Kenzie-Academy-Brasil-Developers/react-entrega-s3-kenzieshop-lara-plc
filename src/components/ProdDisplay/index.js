import React from 'react';
import { Container } from './styles';
import ProdCard from '../ProdCard';
import {useSelector} from 'react-redux'
import { productData } from '../../products';


function ProdDisplay() {

  const products = productData
  console.log(productData)

  return (
    <Container>
      {products.map((prod)=>
      <ProdCard key={prod.id} prod = {prod}></ProdCard>)}
    </Container>
  );
}

export default ProdDisplay;