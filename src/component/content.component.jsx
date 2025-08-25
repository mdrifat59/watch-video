import { Component } from 'react'
import VideoWrapper from './video.wapper.component'
import VideoList from './video.list.component'
import CommentWrapper from './comment.wrapper.component'

class Content extends Component {
  render() {
    const { videoList, setVideoId, videoId } = this.props

    return (
      <div className='max-w-[1300px] mx-auto xl:grid grid-cols-[60%_40%] gap-5 p-5 '>
        <div className=''>
          <VideoWrapper videoId={videoId} />

        </div>
        <div>
          <VideoList videoList={videoList} setVideoId={setVideoId}
          />
        </div>
        <div className="xl:hidden">
          <CommentWrapper />
        </div>
      </div>
    )
  }
}

export default Content 