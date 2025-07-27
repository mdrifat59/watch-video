import { Component } from 'react'
import ProfileImg from '../profileImg.component'
import { DislikeIcon, LikeIcon } from './svg/details.svg'

class Comments extends Component {
    render() {
        return (
            <>
                <div className="flex gap-5">
                    <ProfileImg />
                    <div className="">
                        <h4>@anas67  <span className='text-[#aaa] text-sm ml-2'>2 years ago</span></h4>
                        <p>Bir Türk izleyici olarak videolarını baştan sona kadar izliyorum senin  </p>
                        <div className="flex  gap-5 mt-5">
                            <button className='cursor-pointer'>
                                <LikeIcon size={20} />
                            </button>

                            <button className='cursor-pointer'>
                                <DislikeIcon size={20} />
                            </button>

                            <button className='hover:bg-[#272727] text-white px-5 py-2 rounded-full mt-3'>Reply</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Comments