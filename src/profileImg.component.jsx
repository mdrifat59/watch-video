import { Component } from 'react'
import profileImg from '/images/profileImg.jpg'

class ProfileImg extends Component {
    render() {
        return (
            <div>
                <img src={profileImg} className='w-[40px] h-[40px] rounded-full' alt="" />
            </div>
        )
    }
}

export default ProfileImg