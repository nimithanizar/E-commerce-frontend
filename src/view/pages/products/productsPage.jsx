
import React from 'react';
import { useProducts } from '../../../model/QueryCalls'; 
import ProductTable from '../../components/ProductTable/ProductTable';
import './productspage.scss'; 

const ProductsPage = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="products-page">
      <h1>Products</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
