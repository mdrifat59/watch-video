import { Component } from 'react'

class VideoMedia extends Component {
    render() {
        return (
            <div  className='aspect-video w-full max-w-4xl mx-auto'>
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/38OVnQZosMQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        )
    }
}

export default VideoMedia