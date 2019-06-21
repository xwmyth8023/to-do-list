import React, { Component, Fragment,createRef} from 'react'
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
        this.inputDOM = createRef()
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    handleKeyUp = (e) => {
        if(e.keyCode === 13){
            this.handleAddClick()
        }
    }

    handleAddClick = () => {
        // console.log(this.state)
        if (this.state.inputValue === ''){
            return
        }
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue:''
        },()=>{
            this.inputDOM.current.focus()
        })
    }

    render() {
        return (
            <Fragment>
                <input 
                    type='text' 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                    onKeyUp={this.handleKeyUp}
                    ref={this.inputDOM}
                />
                <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </Fragment>
        )
    }
}
