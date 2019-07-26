import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
import css from './index.module.scss'
import './index.css'

import SwiperAD from './SwiperAD';
import Search from './Search'
import Navs from './Navs'
import SwiperSmall from './SwiperSmall'
import HotCity from './HotCity'
import NavMiddle from './NavMiddle'
import SearchMiddle from './SwiperMiddle'
import SwiperBig from './SwiperBig'

class Index extends Component {
  state = {
    adList: [],
    dataList: []
  }
  componentDidMount() {
    axios({
      url: '/index.php/wechatapp/SaleHouse/getAdsList?src=webapp'
    }).then(res=> {
      this.setState({
        adList: res.data.data
      })
    })
    axios({
      url: '/index.php/wechatapp/SaleHouse/getIndexInfo?src=webapp'
    }).then(res=> {
      this.setState({
        dataList: res.data.data
      })
    })
  }
  render() {
    return (
      <div className={css.header + ' indexheader'}>
        <header>异乡置业</header>
        <SwiperAD list={this.state.adList} />
        <Search />
        <Navs />
        <SwiperSmall list={this.state.dataList[1]} />
        <HotCity list={this.state.dataList[2]} />
        <NavMiddle />
        <SearchMiddle list={this.state.dataList[3]} />
        <SwiperBig list={this.state.dataList[4]} />
      </div>
    )
  }
}

export default withRouter(Index)