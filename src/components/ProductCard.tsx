import { generatePath, Link, Navigate } from "react-router-dom"
import { PRODUCT_DETAIL_PATH } from "../constants/path"
// import profileService from "../services/profile"
import {currency} from "../utils/currency"
import {message, Button} from 'antd'
import { addWishlist } from "../services/profile"
import { useDispatch, useSelector } from "react-redux"
import { ActionTypes } from "@mui/base"
// import { Button, Modal } from 'antd';

interface Productt{
    product: {
        name : string, 
        real_price: number,
        price :number, 
        images: [
            {
            thumbnail_url:string
            }
        ]
        slug: string,
        id: number,
        _id:string,
    }, 
    onRemove: (_id: string)=> void,
}
export interface ProductItem{
        name : string, 
        real_price: number,
        price :number, 
        images: [
            {
            thumbnail_url:string,
            }
        ]
        slug: string,
        id: number,
        _id:string,
        quantity:number
}

// export const ProductCard: React.FC<Productt> = ({product, onRemove }) => {
export const ProductCard = ({product, onRemove }: Productt) => {

    const { name, real_price, price, images, slug, _id } = product
    const dispatch = useDispatch()
    const listCard = useSelector((store:any) => store.OpenRe.listCard);
    const token =localStorage.getItem("token")
    const removeItem = () => { 
        // if(token ){
            dispatch({
                type:"OPEN_CARD"
            })
            onRemove(_id)
        // }
    }
   const addCard = (product:ProductItem) => { 
        dispatch({
            type:"ADD_ITEM",
            payload: product
        })
        dispatch({
            type:"OPEN_CARDMODAL",
        })
    }
    return (
            <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                    {/* Badge */}
                    <div className="badge badge-white card-badge card-badge-left text-uppercase">
                        New
                    </div>
                    {/* Image */}
                    <div className="card-img">
                        {/* Image */}
                        <Link className="card-img-hover"  to={generatePath(PRODUCT_DETAIL_PATH, {slug})}>
                            <img className="card-img-top card-img-back" src="/img/products/product-120.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src={images[0].thumbnail_url} alt="..." />
                        </Link>
                        {/* Actions */}
                        <div className="card-actions">
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct" onClick={()=>addCard(product)}>
                                    <i className="fe fe-eye" />
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                    <i className="fe fe-shopping-cart" />
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" onClick={removeItem}>
                                    <i className="fe fe-heart" />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="card-body px-0">
                        <div className="font-size-xs">
                            <a className="text-muted" href="shop.html">Shoes</a>
                        </div>
                        <div className="font-weight-bold">
                            <Link className="text-body" to={generatePath(PRODUCT_DETAIL_PATH, {slug})}>
                                {name}
                            </Link>
                        </div>
                        <div className="font-weight-bold text-muted">
                            {currency(real_price)}
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProductCard

























//  xử lí add card ở component rồi dispatch cái listCard lên reducer
{/* <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct" onClick={()=>addCard(product)}>
const addCard = (product:ProductItem) => { 
      if( (listCard?.findIndex(e => e._id === product._id)) < 0){
          listCard.push(product);
        } 
        dispatch({
            type:"ADD_ITEM",
            payload: listCard
        })
        dispatch({
            type:"OPEN_CARDMODAL",
        })
    }

       case "ADD_ITEM":
    return {
      ...state,
      listCard : action.payload
    }; */}
