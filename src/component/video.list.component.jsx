import { Component } from 'react'
import VideoCard from './video.card.component'

class VideoList extends Component {
    constructor() {
        super()
        this.state = {
            videos: [1, 2, 3, 4, 5]
        }
    }
    render() {
        return (
            <>
                <div className='mt-5'>
                    <h2 className='text-xl'>Suggested Video</h2>
                    <hr className='w-full  my-3' />
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center lg:justify-between gap-5 mt-10">
                        {this.state.videos.map((item, index) => (
                            <VideoCard key={index} data={item} />
                        ))}
                    </div>
                </div>

            </>
        )
    }
}

export default VideoList