import React, { Component, Fragment} from 'react'
import PropType from 'prop-types'

export default class TodoInput extends Component {
    static propTypes = {
        btnText:PropType.string
    }
    static defaultProps = {
        btnText: '添加TODO'
    }

    constructor () {
        super()
        this.state = {
            inputValue:''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    handleAddClick = () => {
        console.log(this.state)
        this.props.addTodo(this.state.inputValue)
    }

    render() {
        return (
            <Fragment>
                <input 
                    type='text' 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                />
                <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </Fragment>
        )
    }
}
