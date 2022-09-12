import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from "antd";
import { currency } from '../utils/currency';
import { ProductItem, Productt } from './ProductCard';
import styled from 'styled-components';
import { ItemCard } from './ItemCard';

const TotalPrice = styled.p`
  font-weight: bold;
  font-size:22px;
  color:red;
 `
export const ModalCard = () => {
  const dispatch = useDispatch();
  const { opencard } = useSelector((store) => store.OpenRe);
  const listCard = useSelector((store) => store.OpenRe.listCard);
  const onRemove = (_id: string) => {
    dispatch({
      type: "REMOVE_ITEM_MODALCARD",
      payload: _id
    })
  }

  const increaseItem = (_id: string) => {
    dispatch({
      type: "INCREASE_ITEM",
      payload: _id
    })
  }

  const decreaseItem = (_id: string) => {
    dispatch({
      type: "DECREASE_ITEM",
      payload: _id
    })
  }
  let totalPrice = 0
  let total = 0
  for (let i = 0; i < listCard.length; i++) {
    totalPrice = totalPrice + listCard[i].quantity * listCard[i].real_price
    total = total + listCard[i].quantity
  }
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={() => dispatch({ type: "CLOSE_CARDMODAL" })}
      visible={opencard}
    >
      <h2>sản phẩm yêu thít</h2>
      {/* {
        listCard && listCard.map((product: ProductItem) => (
          <div className="card mb-7">
            <div className="card-img">
              <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" onClick={() => removeItemCard(product._id)}>
                <i className="fe fe-x" />
              </button>
              <span className="badge badge-dark card-badge card-badge-left text-uppercase">
                Sale
              </span>
              <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                <i className="fe fe-eye mr-2 mb-1" /> Quick View
              </button>
              <img className="card-img-top" src={product.images?.[0]?.thumbnail_url} alt="..." />
            </div>
            <div className="card-body font-weight-bold text-center">
              <a className="text-body" href="product.html">{product.name}</a> <br />
              <span>
                <span className="font-size-xs text-gray-350 text-decoration-line-through">{currency(product.price)}</span>
                {product.real_price && <span className="text-primary">{currency(product.real_price)}</span>} <br />
                <button onClick={() => decrease(product._id)}>giảm</button>
                số lượng: {product.quantity}
                <button onClick={() => increase(product._id)}>tăng</button>
              </span>
            </div>
          </div>
        ))
      } */}
      {
        listCard && listCard.map(e => <ItemCard key={e.id} product={e}
          onRemove={(_id) => onRemove(_id)}
          decreaseItem={(_id) => decreaseItem(_id)} 
          increaseItem={(_id) => increaseItem(_id)}/>)
      }
      <p>tổng số lượng sản phẩm {total}</p>
      <TotalPrice>Tổng giá tiền:  {currency(totalPrice)}</TotalPrice>

    </Drawer>
  );
}
export default ModalCard























{/* <button onClick={() => inCrea(product)}>tăng</button> */ }

// const inCrea = (product: ProduItem) => {
//   console.log('first', product)
//   console.log('listCard', listCard)
//   product.quantity = product.quantity + 1
//   dispatch({
//     type: "ADD_ITEMM",
//     payload: product
//   })
// }


// const decrease = (_id: string) => {
//   // const indexRemove = listCard.findIndex((e) => e._id === _id);
//   // listCard[indexRemove].quantity = listCard[indexRemove].quantity - 1
//   // console.log('firstvvvvvvvvvvvvvvvvvvv', listCard[indexRemove].quantity)
//   // console.log('firstccccccccccccc', listCard)
//   dispatch({
//     type: "DECREASE_ITEM",
//     payload: _id
//   })
// }















//  cách xóa item dưới component rồi dispatch 1 payload listCardRemove lên reducer ///////////////////////////////////////////
{/* <button  className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" onClick={()=>removeItemCard(product)}> */ }
  //   const removeItemCard = (product: ProductItem) => {
  //     let listCardRemove = [...listCard]
  //     const indexx = listCardRemove.findIndex((e) => e._id === product._id);
  //     if (indexx >= 0) {
  //       listCardRemove.splice(indexx, 1);
  //     }
  //   dispatch({
  //     type:"REMOVE_ITEMCARD",
  //     payload: listCardRemove
  //   })
  //  }



  // case "REMOVE_ITEMCARD":
  // return {
  //   ...state,
  //   listCard: action.payload
  // };
