import { Component } from 'react'
import cardimg from '/images/cardimg.jpg'
import ProfileImg from './profile.img.component'

class Home extends Component {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    render() {
        return (
            <>
                <div className="max-w-[1300px] mx-auto p-4">
                    <div className="grid grid-cols-3 gap-4">

                        {
                            this.arr.map((item, index) => (
                                <div className='flex flex-col gap-3 mt-5'>
                                    <img
                                        src={cardimg}
                                        alt=""
                                        className='w-full h-full md:w-[400px] md:h-[225px] cursor-pointer rounded-lg'
                                    />
                                    <div className='flex  gap-5'>
                                        <ProfileImg />
                                        <div className="flex flex-col cursor-pointer">
                                            <h3 className='md:w-[300px] text-[18px] leading-[25px]'>
                                                {/* {item.snippet.title} */}
                                                Video Title Here
                                            </h3>
                                            <span className='text-[15px] text-[#aaa]'>
                                                {/* {item.snippet.channelTitle} */}
                                                Channel Name Here
                                            </span>
                                            <span className="text-[15px] text-[#aaa]">
                                                300 views • 1 day ago
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            ))

                        }
                    </div>
                </div>


            </>
        )


    }
}

export default Home