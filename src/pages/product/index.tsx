import React, { cloneElement, useEffect, useState } from 'react'
import ProductsCard from "../../components/ProductCard"
import Category from "../../components/Category"
import  { getProducts, Pagination, Product } from "../../services/product"
import Paginationn from "../../components/Pagination"
import { useQueryUrl } from '../../hook/useQueryUrl'
import axios from 'axios'
import api from "../../constants/api"
import { Link, useParams } from 'react-router-dom'
import {debounce} from "lodash"
import { useDispatch, useSelector } from 'react-redux'
import ModalCard from '../../components/ModalPopup'

export default function Shop() {
    const {list} = useSelector((store) => store.OpenRe);
    
    // const [products, setProducts] = useState()
    // const [paginate, setPaginate] = useState()
    const dispatch = useDispatch()
    const [id, setId] = useState("")
    const [products, setProducts] = useState<Product[]>([])
    const [productSearch, setProductSearch] = useState<any>([])
    const [searchValue, setSearchValue] = useState("")
    const [paginate, setPaginate] = useState<Pagination>()
    const search = useQueryUrl()
    const currentPage =  parseInt(search.get('page') || "1")
    console.log( "currentPage",currentPage)
    const { category } = useParams()

    console.log("params category",category)
    const searchParam = useQueryUrl()
    const searchValuee = (searchParam.get('name') || "")
    console.log('first', searchParam)
    console.log('second', searchValuee)
    const debouncing = debounce((v) => setSearchValue(v), 500)
    const fetchData = async(search : string) => { 
        console.log('rerederrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
          const res = await getProducts(`?page=${currentPage}${category ? `&categories=${category}`: ''}${search ? `&name=${search}`: ''}`);
          console.log('res', res)
        //   setProducts(res.data)
          setPaginate(res.paginate)
          dispatch({
            type:"LISH_PRODUCT",
            payload:res.data,
          })
        //   localStorage.setItem("listProdct",JSON.stringify(res.data))
      }
      console.log('firsttttttttttttt', products)
    useEffect(()=>{
        console.log('1111111111111111')
        // debounce(()=>fetchData(searchValue),500,{ 'maxWait': 1000 })
        fetchData(searchValue)
    },[currentPage, searchValue,category])
    useEffect(()=>{
        console.log('22222222222222222222')
        if(searchValue.length === 0){
            fetchData(searchValuee)
        }
        // dispatch({
        //     type:"LISH_PRODUCT",
        //     payload:products,
        //   })
        //   localStorage.setItem("listProdct",JSON.stringify(products))
    },[currentPage,searchValuee,category])
    // const onSearch = async (ev) => {
    
    //     ev.preventDefault()
    //     console.log(searchValue)
    //     if (searchValue?.trim()) {
    //         const data = await getProducts(`?name=${searchValue}`)
    //         setProductSearch(data.data)
    //     }
    // 
    const onRemove = (_id:string) => { 
        setId(_id)
        console.log('_id', _id)
     }
    return (
        <div>
            <div>
                <section className="py-11">
                    <div className="container">
                        <div className="row">
                          <Category/>
                            <div className="col-12 col-md-8 col-lg-9">
                                {/* Slider */}
                                <div className="flickity-page-dots-inner mb-9" data-flickity="{&quot;pageDots&quot;: true}">
                                    {/* Item */}
                                    <div className="w-100">
                                        <div className="card bg-h-100 bg-left" style={{ backgroundImage: 'url(/img/covers/cover-24.jpg)' }}>
                                            <div className="row" style={{ minHeight: '400px' }}>
                                                <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                                                    <div className="card-body px-md-10 py-11">
                                                        {/* Heading */}
                                                        <h4>
                                                            2019 Summer Collection
                                                        </h4>
                                                        {/* Button */}
                                                        <a className="btn btn-link px-0 text-body" href="shop.html">
                                                            View Collection <i className="fe fe-arrow-right ml-2" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-16.jpg)' }} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Item */}
                                    <div className="w-100">
                                        <div className="card bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-29.jpg)' }}>
                                            <div className="row align-items-center" style={{ minHeight: '400px' }}>
                                                <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                                                    <div className="card-body px-md-10 py-11">
                                                        {/* Heading */}
                                                        <h4 className="mb-5">Get -50% from Summer Collection</h4>
                                                        {/* Text */}
                                                        <p className="mb-7">
                                                            Appear, dry there darkness they're seas. <br />
                                                            <strong className="text-primary">Use code 4GF5SD</strong>
                                                        </p>
                                                        {/* Button */}
                                                        <a className="btn btn-outline-dark" href="shop.html">
                                                            Shop Now <i className="fe fe-arrow-right ml-2" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Item */}
                                    <div className="w-100">
                                        <div className="card bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-30.jpg)' }}>
                                            <div className="row align-items-center" style={{ minHeight: '400px' }}>
                                                <div className="col-12">
                                                    <div className="card-body px-md-10 py-11 text-center text-white">
                                                        {/* Preheading */}
                                                        <p className="text-uppercase">Enjoy an extra</p>
                                                        {/* Heading */}
                                                        <h1 className="display-4 text-uppercase">50% off</h1>
                                                        {/* Link */}
                                                        <a className="link-underline text-reset" href="shop.html">Shop Collection</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Header */}
                                <div className="row align-items-center mb-7">
                                    <div className="col-12 col-md">
                                        {/* Heading */}
                                        <h3 className="mb-1">Womens' Clothing</h3>
                                        {/* Breadcrumb */}
                                        <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                                            <li className="breadcrumb-item">
                                                <a className="text-gray-400" href="index.html">Home</a>
                                            </li>
                                            <li className="breadcrumb-item active">
                                                Women's Clothing
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="col-12 col-md-auto">
                                        {/* Select */}
                                        <select className="custom-select custom-select-xs">
                                            <option selected>Most popular</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Tags */}
                                <div className="row mb-7">
                                    <div className="col-12">
                                        <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                            Shift dresses <a className="text-reset ml-2" href="#!" role="button">
                                                <i className="fe fe-x" />
                                            </a>
                                        </span>
                                        <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                            Summer <a className="text-reset ml-2" href="#!" role="button">
                                                <i className="fe fe-x" />
                                            </a>
                                        </span>
                                        <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                            M <a className="text-reset ml-2" href="#!" role="button">
                                                <i className="fe fe-x" />
                                            </a>
                                        </span>
                                        <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                            White <a className="text-reset ml-2" href="#!" role="button">
                                                <i className="fe fe-x" />
                                            </a>
                                        </span>
                                        <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                            Red <a className="text-reset ml-2" href="#!" role="button">
                                                <i className="fe fe-x" />
                                            </a>
                                        </span>
                                        <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                            Adidas <a className="text-reset ml-2" href="#!" role="button">
                                                <i className="fe fe-x" />
                                            </a>
                                        </span>
                                        <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                            $10.00 - $49.00 <a className="text-reset ml-2" href="#!" role="button">
                                                <i className="fe fe-x" />
                                            </a>
                                        </span>
                                        <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                            $50.00 - $99.00 <a className="text-reset ml-2" href="#!" role="button">
                                                <i className="fe fe-x" />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <form>
                                    <div className="input-group input-group-merge">
                                        <input  onChange={(ev) => debouncing(ev.target.value)} className="form-control" type="search" placeholder="Search" />
                                        <div className="input-group-append">
                                            <button  className="btn btn-outline-border" type="submit">
                                                <Link to={`?name=${searchValue}`}><i className="fe fe-search" /></Link>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* Products */}
                                {/* {q && <p>kết quả tiềm kiếm `{q}`</p>} */}
                                <div className="row">
                                    
                                    {list && list.map(e => <ProductsCard key={e.id} product={e} onRemove={(_id)=>onRemove(_id)}/>)}
                                </div>
                                {/* Pagination */}
                                {paginate && <Paginationn totalPage={paginate.totalPage}/>}
                            </div>
                        </div>
                    </div>
                </section>
                <ModalCard id={id}/>

                {/* FOOTER */}
                
            </div>
        </div>
    )
}
