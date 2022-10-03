
// const list = JSON.parse(localStorage.getItem("listProdct")) || [];

import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../components/ProductCard";

// const listCard = JSON.parse(localStorage.getItem("listCard")) || [];
interface UserStateRule {
  visible: boolean,
  opencard: boolean,
  list: ProductItem[],
  listCard: ProductItem[]
  listCardRemoveCard: ProductItem[]
}
interface ActionReducer {
  type: string,
  payload: any
}
const initialValue: UserStateRule = {
  visible: false,
  opencard: false,
  list: [],
  listCard: [],
  listCardRemoveCard: []
};
// interface DecreaseItem{
//   _id: string
// }
// const listCard = useSelector((store: any) => store.OpenRe.listCard);
export const decreaseItemm =  (payload: string, state = initialValue) => { 
  let { listCard } = state;
  // const listCardRemoveCard = [...state.listCard]
  const indexRemove = listCard?.findIndex(e => e._id === payload);
  listCard[indexRemove].quantity = listCard[indexRemove].quantity - 1
  if (indexRemove >= 0 && listCard[indexRemove].quantity <= 0) {
    listCard.splice(indexRemove, 1);
  }
  return {
    type: 'DECREASE_ITEM',
    payload: listCard
}

 }

function OpenCardReducer(state = initialValue, action: ActionReducer) {
  switch (action.type) {
    case "OPEN_CARDMODAL":
      return {
        ...state,
        opencard: true,
      };
    case "CLOSE_CARDMODAL":
      return {
        ...state,
        opencard: false,
      };
    case "OPEN_CARD":
      return {
        ...state,
        visible: true,
      };
    case "CLOSE_CARD":
      return {
        ...state,
        visible: false,
      };
    case "LISH_PRODUCT":
      return {
        ...state,
        list: action.payload,
      };
    case "DECREASE_ITEM":
      // const listCardRemoveCard = [...state.listCard]
      // const indexRemove = listCardRemoveCard?.findIndex(e => e._id === action.payload);
      // listCardRemoveCard[indexRemove].quantity = listCardRemoveCard[indexRemove].quantity - 1
      // if (indexRemove >= 0 && listCardRemoveCard[indexRemove].quantity <= 0) {
      //   listCardRemoveCard.splice(indexRemove, 1);
      // }
      return {
        ...state,
        // listCard: listCardRemoveCard
        listCard: action.payload
      };
    case "INCREASE_ITEM":
      let listCardd = [...state.listCard];
      const indexf = listCardd?.findIndex(e => e._id === action.payload)
      listCardd[indexf].quantity = listCardd[indexf].quantity + 1
      return {
        ...state,
        listCard: listCardd
      };
    case "ADD_ITEM":
      let { listCard } = state;
      if ((listCard?.findIndex(e => e._id === action.payload._id)) < 0) {
        listCard.push(action.payload);
      } else {
        action.payload.quantity = action.payload.quantity + 1
      }
      return {
        ...state,
        listCard,
      };
    case "REMOVE_ITEM_MODALCARD":
      let listCardRemove = [...state.listCard]
      const indexx = listCardRemove.findIndex((e) => e._id === action.payload);
      if (indexx >= 0) {
        listCardRemove.splice(indexx, 1);
      }
      return {
        ...state,
        listCard: listCardRemove,
      };
    case "REMOVE_LISTITEM":
      let { list } = state;
      const index = list.findIndex((e) => e._id === action.payload);
      console.log('first', list)
      if (index >= 0) {
        list.splice(index, 1);
      }
      return {
        ...state,
        list,
      };

  }
  return state;
}
export default OpenCardReducer;
