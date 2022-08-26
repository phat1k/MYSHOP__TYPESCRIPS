import React, { cloneElement, useEffect, useState } from 'react'
import ProductsCard from "../../components/ProductCard"
import Category from "../../components/Category"
import { getProducts, Pagination } from "../../services/product"
import Paginationn from "../../components/Pagination"
import { useQueryUrl } from '../../hook/useQueryUrl'
import axios from 'axios'
import api from "../../constants/api"
import { Link, useParams } from 'react-router-dom'
import { debounce } from "lodash"
import { useDispatch, useSelector } from 'react-redux'
import ModalCard from '../../components/ModalPopup'
import { SearchParams } from '../../components/SearchParams'

export default function Shop() {
    const { list } = useSelector((store) => store.OpenRe);
    const dispatch = useDispatch()
    const [id, setId] = useState<string>("")
    const [searchValue, setSearchValue] = useState<string>("")
    const [paginate, setPaginate] = useState<Pagination>()
    const search = useQueryUrl()
    const currentPage = parseInt(search.get('page') || "1")
    const { category } = useParams()
    console.log("params category", category)
    const searchParam = useQueryUrl()
    const searchValuee = (searchParam.get('name') || "")
    const debouncing = debounce((v) => setSearchValue(v), 500)

    const fetchData = async (search: string) => {
        const res = await getProducts(`?page=${currentPage}${category ? `&categories=${category}` : ''}${search ? `&name=${search}` : ''}`);
        setPaginate(res.paginate)
        const listProduct = res.data
        for(let i=0; i<listProduct.length; i++){
            const obj1 = { quantity: 1 };
            const obj = Object.assign(listProduct[i], obj1)
        }
        dispatch({
            type: "LISH_PRODUCT",
            payload: listProduct,
        })
    }
    useEffect(() => {
        fetchData(searchValue)
    }, [currentPage, searchValue, category])
    useEffect(() => {
        if (searchValue.length === 0) {
            fetchData(searchValuee)
        }
    }, [currentPage, searchValuee, category])
    const onRemove = (_id: string) => {
        setId(_id)
        console.log('_id', id)
    }
    return (
        <div>
            <div>
                <section className="py-11">
                    <div className="container">
                        <div className="row">
                            <Category />
                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="row align-items-center mb-7">
                                    <div className="col-12 col-md">
                                        {/* Heading */}
                                        <h3 className="mb-1">Kết quả tìm kiếm :{searchValue}</h3>
                                        {/* Breadcrumb */}
                                        <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                                            <li className="breadcrumb-item">
                                                <a className="text-gray-400" href="index.html">Home</a>
                                            </li>
                                            <li className="breadcrumb-item active">
                                                {searchValue}
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                {/*/////////////////////////////////Search//////////////////////////////////// */}
                                <SearchParams
                                    onChange={(ev) => debouncing(ev.target.value)}
                                    searchValue={searchValue}/>
                                {/*/////////////////////////////////Products//////////////////////////////////// */}
                                <div className="row">
                                    {list && list.map(e => <ProductsCard key={e.id} product={e} onRemove={(_id) => onRemove(_id)} />)}
                                </div>
                                {/* ////////////////////////////////Pagination///////////////////////////////////////////// */}
                                {paginate && <Paginationn totalPage={paginate.totalPage} />}
                            </div>
                        </div>
                    </div>
                </section>
                <ModalCard id={id} />
            </div>
        </div>
    )
}











{/* <form>
    <div className="input-group input-group-merge">
        <input  onChange={(ev) => debouncing(ev.target.value)} className="form-control" type="search" placeholder="Search" />
        <div className="input-group-append">
            <button  className="btn btn-outline-border" type="submit">
                <Link to={`?name=${searchValue}`}><i className="fe fe-search" /></Link>
            </button>
        </div>
    </div>
</form> */}
