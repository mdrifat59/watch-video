import { Component } from 'react'
import ProfileImg from '../profileImg.component'
import Comments from './comments.component'

class CommentType extends Component {
    render() {
        return (
            <>
                <div className='flex gap-3 pt-5'>
                    <ProfileImg />
                    <input type="text" className=' w-full border-b-2 outline-none' />
                </div>
                <div className="flex justify-end gap-5">
                    <button className='hover:bg-[#272727] text-white px-5 py-2 rounded-full mt-3'>Cencel</button>
                    <button className='bg-[#272727] text-white px-5 py-2 rounded-full mt-3 opacity-50 cursor-not-allowed'>Comment</button>
                </div>
                <div className="flex flex-col gap-5">
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />

                </div>
            </>
        )
    }
}

export default CommentType