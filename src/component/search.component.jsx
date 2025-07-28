import { Component } from 'react'
import { SearchIcon } from './svg/search.svg' 

class Search extends Component {
  render() {
    return (
      <div className='flex justify-between items-center '>
        <div className="w-full sm:w-[400px] lg:w-[536px] flex ">
          <input type="text" className='w-full border-2  border-[#303030] bg-[#121212] outline-none py-2 px-5 rounded-l-full' placeholder='Search' />
          <button className='w-[64px] border border-[#303030] bg-[#ffffff14] rounded-r-full flex justify-center items-center cursor-pointer'> <SearchIcon size={25} /> </button>
        </div> 
      </div>
    )
  }
}

export default Search
