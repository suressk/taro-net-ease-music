import { Component } from 'react'
import './utils/translate'
import './app.scss'
import './common/styles/common.scss'

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
