import { Component } from 'react'
import VideoCard from './video.card.component'

class VideoList extends Component {

    render() {
        const { videoList } = this.props
        return (
            <>
                <div className='mt-5'>
                    <h2 className='text-xl'>Suggested Video</h2>
                    <hr className='w-full  my-3' />
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center lg:justify-between gap-5 mt-10">
                        <VideoCard videoList={videoList} />
                    </div>
                </div>

            </>
        )
    }
}

export default VideoList