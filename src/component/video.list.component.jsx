import { Component } from 'react'
import VideoCard from './video.card.component'

class VideoList extends Component {

    render() {
        const { videoList, setVideoId } = this.props
        return (
            <>
                <div className='mt-5'>
                    <h2 className='text-xl'>Suggested Video</h2>
                    <hr className='w-full  my-3' />
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center lg:justify-between gap-5 mt-10 lg:mt-0">
                        <VideoCard videoList={videoList} setVideoId={setVideoId}
                        />
                    </div>
                </div>

            </>
        )
    }
}

export default VideoList