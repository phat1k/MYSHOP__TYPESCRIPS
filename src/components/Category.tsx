import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  { CategoryData, getCategory } from '../services/product'

export default function Category() {
    const [category, setCategory] = useState<CategoryData[]>()
    const [isloading, setIsloading] = useState(true)
    const fetchCategory = async() => { 
        const res = await getCategory()
        console.log('resCAtegory', res)
        setCategory(res)
    }
    useEffect(()=>{
        setIsloading(true)
        fetchCategory()
        setIsloading(false)

    },[])
    return (
        <div className="col-12 col-md-4 col-lg-3">
        {/* Filters */}
        <form className="mb-10 mb-md-0">
            <ul className="nav nav-vertical" id="filterNav">
                <li className="nav-item">
                    {/* Toggle */}
                    <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#categoryCollapse">
                        Category
                    </a>
                    {/* Collapse */}
                    {
                                    isloading ? [...Array(15)].map((_,i) => <div key={i}><Skeleton height={25}/></div> ): (
                            <ul className="list-styled mb-0" id="productsNav">
                                {/* <li className="list-styled-item">
                                    <a className="list-styled-link" href="#">
                                        All Products
                                    </a>
                                </li> */}
                                {category && category.map(e =>(
                                <li key={e.id} className="list-styled-item">
                                    <Link className="list-styled-link" data-toggle="collapse" to={'/' + e.slug}>
                                        {e.title}
                                    </Link>
                                    </li>
                                    ))}
                            </ul>
                                    )

                                }
                    {/* <div className="collapse show" id="categoryCollapse">
                        <div className="form-group">
                            <ul className="list-styled mb-0" id="productsNav">
                                <li className="list-styled-item">
                                    <a className="list-styled-link" href="#">
                                        All Products
                                    </a>
                                </li>
                                {category && category.map(e =>(
                                <li key={e.id} className="list-styled-item">
                                    <Link className="list-styled-link" data-toggle="collapse" to={'/' + e.slug}>
                                        {e.title}
                                    </Link>
                                    </li>
                                    ))}
                            </ul>
                        </div>
                    </div> */}
                </li>
            </ul>
        </form>
    </div>
    )
}



