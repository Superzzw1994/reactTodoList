import React from 'react'

class Item extends React.Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
    render () {
        const { content, index } = this.props
        return(
            <div onClick = {this.handleClick} key = {index}>
                {content}
            </div>
        )
    }
}

export default Item