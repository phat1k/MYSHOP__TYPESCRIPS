import { useEffect, useState } from "react";
import { useAuth } from "../../hook/authentication";
import {
  CategoryData,
  Pagination,
  Product,
} from "../../services/product";
import { getProducts, getCategory } from "../../services/product";
export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [paginate, setPaginate] = useState<Pagination>();
  const [category, setCategory] = useState<CategoryData[]>();
  const context  = useAuth()
  console.log('secondddddd', context)
  console.log('first', context.tokenLogin)
  console.log('firsttttttt', context.tokenContext)

  const nameCard = context.tokenLogin
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
  const onLogin = () => {
    context.setTokenLogin({
            user: "phat",
    })
}
  useEffect(() => {
    fetchData();
  }, []);
  return(

  <div>
    {/* <p>{nameCard?.user}</p> */}
    {products?.map((v) => (
      <div key={v.id}>{v.id}</div>
    ))}
    {
    category?.map((v)=> (<div key={v.id}>{v.title}</div>))
    }
    <button onClick={onLogin}>setToken</button>
  </div>
  )
};
export default Home;
