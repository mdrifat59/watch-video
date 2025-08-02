import { Component } from 'react'
import Content from './component/content.component'
import Navbar from './component/Navbar.component'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Content />
      </>
    )
  }
}

export default App
