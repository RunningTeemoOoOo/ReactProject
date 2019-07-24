import React, {Component} from 'react'
import HouseList from './../../Components/HouseList'
import axios from 'axios'

class GoodHouse extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    axios('/index.php/wechatapp/SaleHouse/getHotHouse?src=webapp').then(res=> {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <div>GoodHouse</div>
        <HouseList></HouseList>
      </div>
    )
  }
}

export default GoodHouse