import  { Component } from 'react'
import VideoMedia from './videoMedia.component' 
import VideoList from './videoList.component'
import CommentSection from './commentSection.component'

  class Content extends Component {
  render() {
    return (
      <div className='xl:grid grid-cols-[60%_40%] gap-5 p-5 max-w-[1300px]'>
        <div className=''> 
        <VideoMedia />
        </div>
         <div>
            <VideoList/>
         </div>
         <div className="xl:hidden">
          <CommentSection/>
         </div>
      </div>
    )
  }
}

export default Content 