import { Component } from 'react' 
import { BallIcon, DislikeIcon, LikeIcon, ShareIcon, ThreeDotIcon } from './svg/details.svg'
import ProfileImg from '../profileImg.component'
import VideoDetailsResponsive from './videoDetailsResponsive.component'

class VideoDetails extends Component {
    render() {
        return (
            <>
            <div className='md:flex items-center justify-between gap-3 mt-5 hidden  '> 
                <div className='flex items-center gap-3'> 
                    <ProfileImg/>
                    <div>
                        <h3 className='text-lg'>Joe HaTTab</h3>
                        <span className='text-sm'>17.8 M</span>
                    </div>
                </div> 
                <button className='flex items-center gap-3 cursor-pointer py-1 px-5 bg-[#272727] rounded-full'><BallIcon size={18} /> Subscribe</button>
                
                <div className="flex items-center">
                    <button className='px-5 py-2 rounded-l-full bg-[#272727] cursor-pointer'><LikeIcon size={20} /></button>
                    <div className="w-1 h-full "></div>
                    <button className='px-5 py-2 rounded-r-full bg-[#272727] cursor-pointer '><DislikeIcon size={20} /></button>
                </div>

                <button className='flex items-center gap-3 cursor-pointer py-1 px-3 bg-[#272727] rounded-full'><ShareIcon size={20} /> Share</button>
                <button className='flex items-center gap-3 cursor-pointer p-2 bg-[#272727] rounded-full'><ThreeDotIcon size={20} /></button>
            
            </div>
            
            {/* minimum screen */}
            <div className="md:hidden mt-5">
                <VideoDetailsResponsive/>
            </div>
            </>
            
        )
    }
}

export default VideoDetails