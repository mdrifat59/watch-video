import { Component } from 'react'
import VideoCard from './videoCard.component'

class VideoList extends Component {
    render() {
        return (
            <>
                <div className='mt-5'>
                    <h2 className='text-xl'>Suggested Video</h2>
                    <hr className='w-full  my-3' />
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center lg:justify-between gap-5 mt-10">
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