import { generatePath, Link, Navigate } from "react-router-dom"
import { PRODUCT_DETAIL_PATH } from "../constants/path"
// import profileService from "../services/profile"
import {currency} from "../utils/currency"
import {message, Button} from 'antd'
import { addWishlist } from "../services/profile"
import { useDispatch, useSelector } from "react-redux"
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
    onRemove: (_id: string)=> void
}
export interface ProductItem{
        name : string, 
        real_price: number,
        price :number, 
        images: [
            {
            thumbnail_url:string,
            small_url:string,
            medium_url:string,
            }
        ]
        slug: string,
        id: number,
        _id:string,
}


export const ProductCard: React.FC<Productt> = ({product, onRemove}) => {
  const { name, real_price, price, images, slug, _id } = product
    const dispatch = useDispatch()
  const listCard = useSelector((store:any) => store.OpenRe.listCard);

    const addWishlistt = async() => {
        // dispatch({ type: "CLOSE_CARD" })}
    // const res = await addWishlist(_id)
    // message.success('Đã thêm sản phẩm vào danh sách yêu thích thành công ')
    // console.log("thành công")
  }
const token =localStorage.getItem("token")
const user = localStorage.getItem("user")
  const removeItem = () => { 
    if(token && user){
        dispatch({
            type:"OPEN_CARD"
        })
        onRemove(_id)
    }
   
   }
//    const addItem = (_id) => { 
//         dispatch({
//             type:"OPEN_CARD"
//         })
//     }
   const addCard = (product:ProductItem) => { 
    // localStorage.setItem("listCard", _id)
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
                    {/* Body */}
                    <div className="card-body px-0">
                        {/* Category */}
                        <div className="font-size-xs">
                            <a className="text-muted" href="shop.html">Shoes</a>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <Link className="text-body" to={generatePath(PRODUCT_DETAIL_PATH, {slug})}>
                                {/* Leather mid-heel Sandals */}
                                {name}
                            </Link>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            {/* $129.00 */}
                            {currency(real_price)}
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProductCard