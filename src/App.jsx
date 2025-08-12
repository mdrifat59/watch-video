import { Component } from 'react'
import Content from './component/content.component'
import Navbar from './component/Navbar.component'
import axios from 'axios'

class App extends Component {
  state = {
    searchText: "",
    videoList: [],
    videoId: "",
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSearch = () => {
    const query = this.state.searchText
    const key = "AIzaSyDoYW09pqBAFB_Q5SNQwVYx6aSqaCn6nM0"
    const type = "video"
    const part = "snippet"
    const url = `https://www.googleapis.com/youtube/v3/search?part=${part}&key=${key}&q=${query}&type=${type}`
    const promise = axios.get(url)
    promise.then(res => (
      this.setState({ videoList: res.data.items }
      ))).catch(err => console.error(err))

  }
  render() {
    return (
      <>
        <Navbar handleSearch={this.handleSearch} handleChange={this.handleChange} searchText={this.state.searchText} />
        <Content videoList={this.state.videoList} videoId={this.state.videoId} setVideoId={(id) => this.setState({ videoId: id })} />
      </>
    )
  }
}

export default App
