import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from './store'
import { Redirect } from 'react-router-dom'
import styles from './style.css'
import withStyle from '../../withStyle'

class Translation extends Component {
  render() {
    const { isLogin } = this.props
    return isLogin ? (
      <div className = { styles.container }>
        { this.showList() }
      </div>
    ) : <Redirect to='/' />
  }

  showList() {
    const { list } = this.props
    return list.map(item => <div className={ styles.item } key={ item.id }>{ item.title }</div>)
  }

  componentDidMount() {
    const { getList } = this.props
    getList()
  }
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

const ExportTranslation = connect(mapState, mapDispatch)(withStyle(Translation, styles))

ExportTranslation.loadData = (store) => {
  return store.dispatch(actions.getTranslationList())
}

export default ExportTranslation
