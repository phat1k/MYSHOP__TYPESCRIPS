import React from 'react'
import { Link } from 'react-router-dom'
  interface Search {
    onChange: (ev) => void,
    searchValue: string
  }
export const SearchParams: React.FC<Search> = ({onChange, searchValue}) => {
    return (
        <form>
            <div className="input-group input-group-merge">
                <input onChange={onChange} className="form-control" type="search" placeholder="Search" />
                <div className="input-group-append">
                    <button className="btn btn-outline-border" type="submit">
                        <Link to={`?name=${searchValue}`}><i className="fe fe-search" /></Link>
                    </button>
                </div>
            </div>
        </form>
    )
}
