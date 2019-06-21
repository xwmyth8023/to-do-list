import React, { Component } from 'react'

export default class TodoItem extends Component {

    handleSlectTodo = () => {
        // console.log('changed')
        this.props.onSelectTodoItem && this.props.onSelectTodoItem(this.props.id)
    }

    render() {
        return (
            <li>
                <input 
                    type='checkbox'
                    checked={this.props.isCompleted}
                    onChange={this.handleSlectTodo}
                />
                {this.props.title} {this.props.isCompleted ? '已完成' : '未完成'}
            </li>
        )
    }
}
