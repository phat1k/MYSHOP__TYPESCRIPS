import api from "../constants/api"

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
export interface CategoryData{
    _id: number,
    id: number,
    parent_id: number,
    position: number,
    status: number,
    title: string,
    slug: string,
    parent: null
}

export const getProducts = async (query=""): Promise<SearchResult<Product>> => {
  const res: SearchResult<Product> = await api.get(`/product${query}`);
  return res;
};
export const getCategory = async ():Promise<CategoryData[]> => {
    const res: CategoryData[] = await api.get(`/categories`);
    return res;
  };


// const productService = {
//     getProduct(query = ''):Promise<any>{
//         // return fetch (`${API}/product${query}`).then(res => res.json())
//         // const res = await 
//         return api.get(`/product${query}`)
//     },
//     getCategory(){

//         return api.get('/categories')

//     }
// }
// export default productService