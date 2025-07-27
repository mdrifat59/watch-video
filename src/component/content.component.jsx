import  { Component } from 'react'
import VideoMedia from './videoMedia.component' 
import VideoList from './videoList.component'

  class Content extends Component {
  render() {
    return (
      <div className='grid grid-cols-[60%_40%] gap-5 p-5'>
        <div className=''> 
        <VideoMedia />
        </div>
         <div>
            <VideoList/>
         </div>
      </div>
    )
  }
}

export default Content 