import api, { API } from "../constants/api"

export interface Product {
    id: number,
    name: string
}
export interface SearchResult<T> {
  data: T[];
  paginate: Pagination;
}
export interface Pagination {
    count: number;
    currentPage: number | string;
    nextPage: number;
    perPage: number;
    totalPage: number;
}
export interface AddItem  {
    insertCount: number,
}

export interface RemoveItem  {
        deleteCount: number
    }
export const getWishlist = async (): Promise<SearchResult<Product>> => {
    const res = await api.get(`/ecommerce/v1/profile/wishlist`);
    return res.data;
}

export const addWishlist = async (id: number):Promise<AddItem>=> {
    const res = await api.post(`/ecommerce/v1/profile/wishlist/${id}`);
    return res.data;
}
   
export const removeWishlist = async (id: number):Promise<RemoveItem>=> {
    const res = await api.delete(`/ecommerce/v1/profile/wishlist/${id}`);
    return res.data;
}

        