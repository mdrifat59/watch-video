import { Component } from 'react'
import VideoDetails from './videoDetails.component'
import CommentSection from './commentSection.component'

class VideoMedia extends Component {
    render() {
        return (
            <>
                <div className="">
                    <div className='aspect-video w-full max-w-4xl mx-auto'>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/38OVnQZosMQ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <p className='sm:text-lg md:text-2xl lg:text-[32px]'>World’s Most Expensive Food - Here’s How It’s Made (Caviar in Vietnam)</p>
                        <VideoDetails />
                    </div>
                </div>
                <div className="hidden xl:block">
                    <CommentSection />
                </div>
            </>
        )
    }
}

export default VideoMedia

