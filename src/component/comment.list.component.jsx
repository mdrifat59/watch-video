import { Component } from 'react'
import CommentItem from './comment.item.component'

class CommentList extends Component {
    constructor() {
        super()
        this.state = {
            comments: [1, 2, 3, 4, 5]
        }
    }
    render() {
        return (
            <div className="flex flex-col gap-5">
                {this.state.comments.map((item, index) => (
                    <CommentItem key={index} data={item} />
                ))}
            </div>
        )
    }
}

export default CommentList