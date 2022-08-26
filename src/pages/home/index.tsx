import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../hook/authentication";
import {
  Category,
  Pagination,
  Product,
} from "../../services/product";
import { getProducts, getCategory } from "../../services/product";
export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [paginate, setPaginate] = useState<Pagination>();
  const [category, setCategory] = useState<Category[]>();
  const context = useAuth()
  console.log('context', context)
  const fetchData = async () => {
    //   axios.get('http://cfd-reactjs.herokuapp.com/product')
    // .then(response => {
    //   console.log(response.data);
    // }, error => {
    //   console.log(error);
    // })
    //    productService.getProduct()
    // .then(res=>{
    //     // console.log(`res`, res)
    //     setProducts(res.data)
    //     setPaginate(res.pagination)
    //     console.log("thanhcong")
    // })
    // const res = await productService.getProduct()
    //   setProducts(res.data.data)
    //   setPaginate(res.pagination)
    //   console.log('res', res)

    const ress = await getCategory();
    setCategory(ress)
    const res = await getProducts();
    setProducts(res.data);
    setPaginate(res.paginate);
    console.log("res", res.paginate);
    console.log("resssssss", ress);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return(

  <div>
    {products?.map((v) => (
      <div key={v.id}>{v.id}</div>
    ))}
    {
    category?.map((v)=> (<div key={v.id}>{v.title}</div>))
    }
  </div>
  )
};
export default Home;
