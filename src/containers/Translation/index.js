import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from './store'
import { Redirect } from 'react-router-dom'

class Translation extends Component {
  render() {
    const { isLogin } = this.props
    return isLogin ? (
      <div>
        { this.showList() }
      </div>
    ) : <Redirect to='/' />
  }

  showList() {
    const { list } = this.props
    return list.map(item => <div key={ item.id }>{ item.title }</div>)
  }

  componentDidMount() {
    const { getList } = this.props
    getList()
  }
}

Translation.loadData = (store) => {
  return store.dispatch(actions.getTranslationList())
}

const mapState = state => ({
  list: state.translationReducer.translationList,
  isLogin: state.headerReducer.isLogin
})

const mapDispatch = dispatch => ({
  getList() {
    dispatch(actions.getTranslationList())
  }
})

export default connect(mapState, mapDispatch)(Translation)
