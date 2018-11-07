import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'
import styles from './style.css'
import withStyle from '../../withStyle'

class Header extends Component {

  render() {
    const { isLogin, handleLogout, handleLogin } = this.props
    return (
      <div className={ styles.container }>
        <Link className={ styles.item } to='/'>首页</Link>
        { isLogin ? <Fragment>
            <div className={ styles.item } onClick={ handleLogout }>退出</div>
            <Link className={ styles.item } to='/translation'>翻译</Link>
          </Fragment> : <div className={ styles.item } onClick={ handleLogin }>登陆</div>
        }
      </div>
    )
  }
}

const mapState = state => ({
  isLogin: state.headerReducer.isLogin
})

const mapDispatch = dispatch => ({
  handleLogin() {
    dispatch(actions.login())
  },

  handleLogout() {
    dispatch(actions.logout())
  }
})

export default connect(mapState, mapDispatch)(withStyle(Header, styles))
