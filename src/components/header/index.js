import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'

class Header extends Component {
  render() {
    const { isLogin, handleLogout, handleLogin } = this.props
    return (
      <div>
        <Link to='/'>首页</Link><br />
        { isLogin ? <Fragment>
            <div onClick={ handleLogout }>退出</div>
            <Link to='/translation'>翻译</Link>
          </Fragment> : <div onClick={ handleLogin }>登陆</div>
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

export default connect(mapState, mapDispatch)(Header)
