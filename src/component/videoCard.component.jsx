import { Component } from 'react'
import cardImg from '/images/cardimg.jpg'

class VideoCard extends Component {
    render() {
        return (
            <div className='flex gap-3 '>
                <img src={cardImg} alt="" className='w-[168px] h-[94.5px] cursor-pointer' />
                <div className="flex flex-col cursor-pointer">
                    <h3 className='w-[350px] text-[18px] leading-[25px]'>JavaScript Full Course | JavaScript - Learn Everything </h3>
                    <span className='text-[15px] text-[#aaa]'>Sheryians Coding School</span>
                    <span className="text-[15px] text-[#aaa]">1.5M views . 6 month ago</span>
                </div>
            </div>
        )
    }
}

export default VideoCard