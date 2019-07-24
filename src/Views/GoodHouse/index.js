import React, {Component} from 'react'
import HouseList from './../../Components/HouseList'
import axios from 'axios'

class GoodHouse extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    axios({
      url: '/index.php/wechatapp/SaleHouse/getHotHouse?src=webapp'
    }).then(res=> {
      this.setState({
        list: res.data.data[0].houses
      })
    })
  }
  render() {
    return (
      <div>
        <div>GoodHouse</div>
        <HouseList info={this.state.list}></HouseList>
      </div>
    )
  }
}

export default GoodHouse