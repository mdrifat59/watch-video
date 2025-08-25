import { Component } from 'react' 
import ProfileImg from './profile.img.component'

class Home extends Component {
    render() {
        const { videoList, handleVideo } = this.props
        return (
            <>
                <div className="max-w-[1300px] mx-auto p-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4">

                        {
                            videoList.map((item, index) => (
                                <div onClick={() => handleVideo(item.id.videoId)} className='flex flex-col gap-3 mt-5' key={index}>
                                    <img
                                        src={item.snippet.thumbnails.default.url}
                                        alt=""
                                        className='w-full h-full md:w-[400px] md:h-[225px] cursor-pointer rounded-lg'
                                    />
                                    <div className='flex  gap-5'>
                                        <ProfileImg />
                                        <div className="flex flex-col cursor-pointer">
                                            <h3 className='xl:w-[300px] text-[18px] leading-[25px]'>
                                                {item.snippet.title}
                                            </h3>
                                            <span className='text-[15px] text-[#aaa]'>
                                                {item.snippet.channelTitle}
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