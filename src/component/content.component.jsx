import  { Component } from 'react'
import VideoMedia from './videoMedia.component'
import VideoCard from './videoCard.component'

  class Content extends Component {
  render() {
    return (
      <div>
        {/* <VideoMedia /> */}
        <VideoCard/>
      </div>
    )
  }
}

export default Content 