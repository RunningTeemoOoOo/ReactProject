import { Carousel } from 'antd-mobile';
import React, { Component } from 'react'
import { withRouter } from 'react-router';

class SwiperAD extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay={false} infinite>
          {
            this.props.list.map(item=> {
              return (
                <div key={item.ad_id} onClick={()=> this.toDetail(item.adlink)} style={{height: '2.3rem'}}>
                  <img src={item.adpicture} alt='item.title' style={{width: '100%'}} 
                    onLoad={()=> {
                    window.dispatchEvent(new Event('resize'))
                    }}
                  />
                </div>
              )
            })
          }
        </Carousel>
      </div>
    )
  }
  toDetail(idLink) {
    let adReg = /-new-(.*)\?/
    adReg.test(idLink)
    this.props.history.push(`/detail/${RegExp.$1}`)
  }
}

export default withRouter(SwiperAD)