import React, { Component } from 'react'
import { ShortIcon } from './svg/details.svg'
import CommentType from './commentType.component'

export class CommentSection extends Component {
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
                <CommentType />
            </>
        )
    }
}

export default CommentSection