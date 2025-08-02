import { Component } from 'react'
import ProfileImg from './profile.img.component'

class Comment extends Component {
    render() {
        return (
            <>
                <div className='flex gap-3 pt-5'>
                    <ProfileImg />
                    <input type="text" className=' w-full border-b-2 outline-none' />
                </div>
                <div className="flex justify-end gap-5">
                    <button className='hover:bg-[#272727] text-white px-5 py-2 rounded-full mt-3 cursor-pointer'>Cencel</button>
                    <button className='bg-[#272727] text-white px-5 py-2 rounded-full mt-3 opacity-50 cursor-not-allowed'>Comment</button>
                </div>
            </>
        )
    }
}

export default Comment