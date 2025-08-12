import { Component } from 'react'
import VideoDetails from './video.details.component'
import CommentWrapper from './comment.wrapper.component'
import VideoMedia from './video.media.component'

class VideoWrapper extends Component {
    render() {
        const { videoId } = this.props
        return (
            <>
                <div>
                    <VideoMedia videoId={videoId} />
                    <p className='sm:text-lg md:text-2xl lg:text-[32px]'>World’s Most Expensive Food - Here’s How It’s Made (Caviar in Vietnam)</p>
                    <VideoDetails />
                </div>

                <div className="hidden xl:block">
                    <CommentWrapper />
                </div>
            </>
        )
    }
}

export default VideoWrapper

