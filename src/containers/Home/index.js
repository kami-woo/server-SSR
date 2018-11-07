import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from './store'
import styles from './style.css'
import withStyle from '../../withStyle'

class Home extends Component {

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.name }>This is {this.props.name}</div>
        { this.getList() }
      </div>
    )
  }

  getList() {
    const { list } = this.props
    return list.map(item => <div className={ styles.item } key={ item.id }>{ item.title }</div>)
  }

  componentDidMount() {
    if(!this.props.list.length)
      this.props.getInfo()
  }
}

const mapStateToProps = state => ({
  name: state.homeReducer.name,
  list: state.homeReducer.list
})

const mapDispatchToProps = dispatch => ({
  getInfo() {
    dispatch(actions.getInfo())
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles))

ExportHome.loadData = (store) => {
  return store.dispatch(actions.getInfo())
}

export default ExportHome
