import { Component } from 'react'

class VideoCard extends Component {
    render() {
        const { videoList, setVideoId } = this.props

        return (
            <div>
                {videoList.map((item, index) => {
                    return (
                        <div onClick={() => setVideoId(item.id.videoId)} key={index} className='flex flex-col xl:flex-row gap-3 mt-5'>
                            <img
                                src={item.snippet.thumbnails.default.url}
                                alt=""
                                className='w-full h-full md:w-[168px] md:h-[94.5px] cursor-pointer rounded-sm'
                            />
                            <div className="flex flex-col cursor-pointer">
                                <h3 className='md:w-[300px] text-[18px] leading-[25px]'>
                                    {item.snippet.title}
                                </h3>
                                <span className='text-[15px] text-[#aaa]'>
                                    {item.snippet.channelTitle}
                                </span>
                                <span className="text-[15px] text-[#aaa]">
                                    {new Date(item.snippet.publishedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default VideoCard
