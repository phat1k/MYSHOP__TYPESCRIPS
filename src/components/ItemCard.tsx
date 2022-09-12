import { currency } from '../utils/currency'
import { Productt } from './ProductCard'

export const ItemCard = ({ product, onRemove, decreaseItem, increaseItem }: Productt) => {
    const { name, real_price, price, images, quantity, _id } = product
    const removeItemCard = () => {
        onRemove(_id)
    }
    const decrease = () => {
        decreaseItem(_id)
    }
    const increase = () => {
        increaseItem(_id)
    }
    return (
        <div className="card mb-7">
            <div className="card-img">
                {/* <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" onClick={() => removeItemCard(_id)}> */}
                <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" onClick={removeItemCard}>
                    <i className="fe fe-x" />
                </button>
                <span className="badge badge-dark card-badge card-badge-left text-uppercase">
                    Sale
                </span>
                <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                    <i className="fe fe-eye mr-2 mb-1" /> Quick View
                </button>
                <img className="card-img-top" src={images?.[0]?.thumbnail_url} alt="..." />
            </div>
            <div className="card-body font-weight-bold text-center">
                <a className="text-body" href="product.html">{name}</a> <br />
                <span>
                    <span className="font-size-xs text-gray-350 text-decoration-line-through">{currency(price)}</span>
                    {product.real_price && <span className="text-primary">{currency(real_price)}</span>} <br />
                    {/* <button onClick={() => decrease(product._id)}>giảm</button> */}
                    <button onClick={decrease}>giảm</button>
                    số lượng: {quantity}
                    <button onClick={increase}>tăng</button>
                </span>
            </div>
        </div>
    )
}
