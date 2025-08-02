import { Component } from 'react'
import { ShortIcon } from './svg/details.svg'
import CommentList from './comment.list.component'
import Comment from './comment.component'

 class CommentWrapper extends Component {
    render() {
        return (
            <>
                <div className='flex gap-5 mt-10'>
                    <h3 className='text-xl'>Comments</h3>
                    <div className='flex items-center gap-3'>
                        <ShortIcon size={20} />
                        <p className='text-sm'>Short by</p>
                    </div>
                </div>
                <Comment/>
                <CommentList />
            </>
        )
    }
}

export default CommentWrapper