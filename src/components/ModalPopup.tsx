import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { store } from "../store/index";
import { Drawer, Button } from "antd";
import Modal from 'antd/lib/modal/Modal';
import styled from 'styled-components';
import ProductsCard from "../components/ProductCard"

const ButtonStyle = styled(Button)`
color: #000;
font-size: 22px;
white-space: nowrap;
width: 300px;
height:70px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px 20px;
`
const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`

export interface IdData{
  id: string
}

export const ModalCard:React.FC<IdData> = ({id}) => {
  let { list } = useSelector(store => store.OpenRe)
  console.log('list', list._id)
  const { visible } = useSelector((store) => store.OpenRe);
    const dispatch = useDispatch();
    

    const removeItem = () => {
      dispatch({
        type:"REMOVE_ITEM",
        payload: id
      })
      dispatch({ type: "CLOSE_CARD" })
      }
      

  return (
      <Modal title="Basic Modal" visible={visible}  footer={null} onCancel={() => dispatch({ type: "CLOSE_CARD" })}>
        <Container className="container__button">
          {/* {list && list.map(e=> <ProductsCard key={e} product={e}/>)} */}

          <ButtonStyle onClick={removeItem}>confirm</ButtonStyle><br />
          <ButtonStyle>cancel</ButtonStyle>
        </Container>

    </Modal>
  );
}
export default ModalCard