import React, { Component, Fragment} from 'react'
import PropType from 'prop-types'

export default class TodoInput extends Component {
    static propTypes = {
        btnText:PropType.string
    }
    static defaultProps = {
        btnText: '添加TODO'
    }

    render() {
        return (
            <Fragment>
                <input type='text' placeholder='请输入要添加的事项'></input><button>{this.props.btnText}</button>
            </Fragment>
        )
    }
}
