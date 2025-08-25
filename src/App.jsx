import { Component } from 'react'
import Content from './component/content.component'
import Navbar from './component/navbar.component'
import axios from 'axios'
import Home from './component/home.component'

class App extends Component {
  state = {
    searchText: "tahsan",
    videoList: [],
    videoId: "",
    showContent: false
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSearch = () => {
    const query = this.state.searchText
    const key = "AIzaSyDfmqVXvUboAd0peK2k_PBe03XQ_7iD40Q"
    const type = "video"
    const maxResults = "10"
    const part = "snippet"
    const url = `https://www.googleapis.com/youtube/v3/search?part=${part}&maxResults=${maxResults}&key=${key}&q=${query}&type=${type}`
    const promise = axios.get(url)
    promise.then(res => (
      this.setState({ videoList: res.data.items }
      ))).catch(err => console.error(err))

  }
  handleVideo = (id) => {
    this.setState({ videoId: id, showContent: true })
  }
  componentDidMount() {
    this.handleSearch()
  }
  render() {
    return (
      <>
        <Navbar handleSearch={this.handleSearch} handleChange={this.handleChange} searchText={this.state.searchText} />

        {this.state.showContent ? (
          <Content
            videoList={this.state.videoList}
            videoId={this.state.videoId}
            setVideoId={(id) => this.setState({ videoId: id })}
          />
        ) : (
          <Home
            videoList={this.state.videoList}
            handleVideo={this.handleVideo}
          />
        )}
      </>
    )
  }
}

export default App
