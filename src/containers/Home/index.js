import React, { Component } from 'react'
import Header from '../../components/header'
import { connect } from 'react-redux'
import { actions } from './store'

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <div>This is {this.props.name}</div>
        <button onClick={() => {alert(1)}}>Click</button>
        { this.getList() }
      </div>
    )
  }

  getList() {
    const { list } = this.props
    return list.map(item => <div key={ item.id }>{ item.title }</div>)
  }

  componentDidMount() {
    if(!this.props.list.length)
      this.props.getInfo()
  }

  static loadData(store) {
    return store.dispatch(actions.getInfo())
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
