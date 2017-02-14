// @flow

import flowRight from 'lodash/flowRight'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sayHello} from './actions'
import {helloSelector} from './selectors'
import css from './Hello.css'

type HelloProps = {
  message: string,
  sayHello: typeof sayHello,
}

class Hello extends Component {
  props: HelloProps

  static defaultProps = {
    message: 'Hello from React.',
  }

  componentWillMount() {
    this.props.sayHello()
  }

  render() {
    const {message} = this.props

    return (
      <div className={css.component}>
        <h1 className={css.title}>{message}</h1>
      </div>
    )
  }
}

export default flowRight(
  connect(helloSelector, {sayHello}),
)(Hello)
