
// const list = JSON.parse(localStorage.getItem("listProdct")) || [];
// const listCard = JSON.parse(localStorage.getItem("listCard")) || [];
interface UserStateRule{
  visible: boolean,
  opencard:boolean,
  list: [],
  listCard:[],
}
interface ActionReducer {
  type: string,
  payload: any,

}
const initialValue: UserStateRule = {
  visible: false,
  opencard:false,
  list:[],
  listCard:[],
};

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
    case "ADD_ITEM":
      // let { listCard } = state;
      // listCard.push(action.payload);
      // localStorage.setItem("listCard", JSON.stringify(listCard))

      // let { listCard } = state
      // const indexx = list.findIndex((e) => e._id === action.payload)
      // if(indexx >=0){


        // if( (listCard?.findIndex(e => e._id === action.payload._id)) < 0){
        //   listCard.push(action.payload);
        // } 
        // let listCard = action.payload
    return {
      ...state,
      listCard : action.payload
    };
    case "REMOVE_ITEMCARD":
      // let listCardRemove = [...state.listCard]
      // const indexx = listCardRemove.findIndex((e) => e._id === action.payload);
      // if (indexx >= 0) {
      //   listCardRemove.splice(indexx, 1);
      // }
    return {
      ...state,
      listCard: action.payload
    };
    case "REMOVE_ITEM":
      let { list } = state;
      const index = list.findIndex((e) => e._id === action.payload);
      console.log('first', list)
      if (index >= 0) {
        list.splice(index, 1);
      }
      // localStorage.setItem("listProdct", JSON.stringify(list));
    return {
      ...state,
      list,
    };
  }
  return state;
}
export default OpenCardReducer;
