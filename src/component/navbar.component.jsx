import { Component } from 'react'
import Search from './search.component'
import { LogoIcon } from './svg/logo.svg'

class Navbar extends Component {
  render() {
    return (
      <nav className="grid grid-cols-3 items-center justify-between p-4  text-white">
        <div className="py-[18px] cursor-pointer">
          <LogoIcon />
        </div>
        <Search />
      </nav>
    )
  }
}
export default Navbar