import { Component } from 'react'
import Search from './search.component'
import { LogoIcon } from './svg/logo.svg'
import { SearchIcon } from './svg/search.svg'
import { Arrowicon } from './svg/arrow.svg'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      showSearch: false,
    }
  }
  handleSearchToggle = () => {
    this.setState(prevState => ({
      showSearch: !prevState.showSearch,
    }))
  }

  render() {
    const { showSearch } = this.state
    return (
      <nav className={`flex lg:grid  lg:grid-cols-3  items-center justify-between p-4 `}>
        <div className={`py-[18px] cursor-pointer ${showSearch ? "hidden" : "block"}`}>
          <LogoIcon />
        </div>

        <div className={`${showSearch ? "block" : "hidden"} cursor-pointer `} onClick={() => this.setState({ showSearch: false })}>
          <Arrowicon size={30} className="text-[#ffffff]" />
        </div>

        <div className={`${showSearch ? 'block' : 'xs:hidden'}  md:block`}>
          <Search />
        </div>

        <div className={`ml-auto hover:cursor-pointer p-1 rounded-full hover:bg-gray-500 md:hidden ${showSearch ? "hidden" : "block"}`}
          onClick={this.handleSearchToggle}>
          <SearchIcon size={25} />
        </div>
      </nav>
    )
  }
}
export default Navbar