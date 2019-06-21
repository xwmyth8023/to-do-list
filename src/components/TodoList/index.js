import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropType from 'prop-types'

export default class TodoList extends Component {

    static propTypes = {
        todos:PropType.arrayOf(PropType.shape({
            id:PropType.number.isRequired,
            title:PropType.string.isRequired,
            isCompleted:PropType.bool.isRequired
        })).isRequired,
        onSelectTodoItem:PropType.func
    }

    render() {
        // console.log(this.props)
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return (
                            <TodoItem 
                                onSelectTodoItem={this.props.onSelectTodoItem}
                                key={todo.id}
                                {...todo}
                                // id = {todo.id}
                                // title = {todo.title}
                                // isCompleted = {todo.isCompleted}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
