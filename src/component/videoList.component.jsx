import { Component } from 'react'
import VideoCard from './videoCard.component'

class VideoList extends Component {
    render() {
        return (
            <>
                <div>
                    <h2 className='text-xl'>Suggested Video</h2>
                    <hr className='w-[90%] my-3' />
                    <div className="flex flex-col gap-5">
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </div>
                </div>

            </>
        )
    }
}

export default VideoList