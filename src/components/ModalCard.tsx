import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { store } from "../store/index";
import { Drawer } from "antd";
import { currency } from '../utils/currency';
import { ProductItem } from './ProductCard';


export const ModalCard = () => {
  const dispatch = useDispatch();
  const { opencard } = useSelector((store) => store.OpenRe);
  const listCard = useSelector((store) => store.OpenRe.listCard);
  console.log('listCarddddddddddđ', listCard)
  // const removeItemCard = (_id) => { 
  //   if( (listCard?.findIndex(e => e._id === _id)) < 0){
  //     listCard.push(product);
  //   }
  //   dispatch({
  //     type:"REMOVE_ITEMCARD",
  //     payload: _id
  //   })
  //  }
    const removeItemCard = (product: ProductItem) => { 
      let listCardRemove = [...listCard]
      const indexx = listCardRemove.findIndex((e) => e._id === product._id);
      if (indexx >= 0) {
        listCardRemove.splice(indexx, 1);
      }
    dispatch({
      type:"REMOVE_ITEMCARD",
      payload: listCardRemove
    })
   }
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={() => dispatch({ type: "CLOSE_CARDMODAL" })}
      visible={opencard}
    >
      <h2>adf</h2>
    {
      listCard && listCard.map((product:ProductItem) => (
        <div className="card mb-7">
          {/* Image */}
          <div className="card-img">
            {/* Action */}
            <button  className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" onClick={()=>removeItemCard(product)}>
              <i className="fe fe-x" />
            </button>
            {/* Badge */}
            <span className="badge badge-dark card-badge card-badge-left text-uppercase">
              Sale
            </span>
            {/* Button */}
            <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
              <i className="fe fe-eye mr-2 mb-1" /> Quick View
            </button>
            {/* Image */}
            <img className="card-img-top" src={product.images?.[0]?.medium_url} alt="..." />
          </div>
          {/* Body */}
          <div className="card-body font-weight-bold text-center">
            <a className="text-body" href="product.html">{product.name}</a> <br />
            <span>
              <span className="font-size-xs text-gray-350 text-decoration-line-through">{currency(product.price)}</span>
              {product.real_price &&  <span className="text-primary">{currency(product.real_price)}</span>}
             
            </span>
          </div>
        </div>
      ))
    }
    </Drawer>
  );
}
export default ModalCard