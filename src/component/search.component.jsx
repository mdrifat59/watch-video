import { Component } from 'react'
import { SearchIcon } from './svg/search.svg' 

class Search  extends Component {
  constructor() {
    super()
    this.state = {
      input:"",
      videos:[],
    }
  } 
  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSearch = () => { 
    const api_key = "AIzaSyC5irM2UGwlEnDagO2EmOiAlyv7lofksnQ"
    const query = this.state.input
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${api_key}`
    fetch(url).then(res=>res.json()).then(data => this.setState({ videos: data.items })
    )
  }
  render() {
    return (
      <div className='flex justify-between items-center '>
        <div className="w-full sm:w-[400px] lg:w-[536px] flex ">
          <input value={this.state.input} onChange={this.handleChange} type="text" className='w-full border-2  border-[#303030] bg-[#121212] outline-none py-2 px-5 rounded-l-full' placeholder='Search' />
          <button onClick={this.handleSearch} className='w-[64px] border border-[#303030] bg-[#ffffff14] rounded-r-full flex justify-center items-center cursor-pointer'> <SearchIcon size={25} /> </button>
        </div> 
      </div>
    )
  }
}

export default Search
