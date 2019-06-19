import React, { Component } from 'react'

export default class Like extends Component {

    constructor (){
        super()
        this.state = {
            isLiked:false
        }
    }
    handleLikeClick = () => {
        this.setState((prevState) => {
            return {
                isLiked: !this.state.isLiked
            }
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikeClick}>
                    {this.state.isLiked ? '喜欢 ❤️' : '取消 🖤'}
                </span>
            </div>
        )
    }
}
