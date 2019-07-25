    import React, {Component} from 'react'
    import axios from 'axios' 
    class Detail extends Component {

      state = {
        abouthouse:null,
        aaa:["123123"],
        housetag:[]
      }
      componentDidMount(){
        axios.get(`https://m.uhouzz.com/index.php/wechatapp/SaleHouseDetail/getSaleHouseData?hid=742467&src=webapp`).then(res=>{

          console.log(res.data.data.pc_house_detail.data.housetag)

          this.setState({
            abouthouse: res.data.data.pc_house_detail,
            housetag: res.data.data.pc_house_detail.data.housetag
          })
        })
      }

      render() {
        return (
          <div>Detail
              {
              this.state.abouthouse?
              <div>
              <div>{this.state.abouthouse.data.title}</div>
              <div>{this.state.abouthouse.data.price_string_rmb_wan}</div>
              <div>{this.state.abouthouse.data.price_string_wan}</div>
              <div></div>
              <div></div>
              <div> 
                {
                this.state.housetag.map(item=>
                    <div key={item.tid} 
                    // onClick = {()=>this.changePage(item)}
                    >{item.tagname}</div>  
                  )
                }
              </div> 
              <div>每平米单价{this.state.abouthouse.data.unitprice_string_rmb_wan}</div>
              <div>首付比例{this.state.abouthouse.data.rid}%</div>
              <div>近一年涨幅{this.state.abouthouse.data.roi}%</div> 
              <h2>项目信息</h2>
              <div>交房时间：{this.state.abouthouse.data.avaiabletime}</div> 
              <div>开发商：{this.state.abouthouse.data.developer_name}</div>
              <div>房源地址：{this.state.abouthouse.data.address}</div>
              <div>更多房源信息</div>
              <div>一键咨询更多打折优惠…</div>
              <h2>详情介绍</h2>
              <div dangerouslySetInnerHTML={{ __html:this.state.abouthouse.data.morelink}}>
              </div>
              <img src={`https://maps.google.cn/maps/api/staticmap?markers=${this.state.abouthouse.data.posx},${this.state.abouthouse.data.posy}&zoom=13&size=375x200&scale=2&format=png&key=AIzaSyB4ggOBQ9UfDbEhcKy8aBAv46YBu03tjUA&language=zh-CN`} alt={"map"}/>
              <div>
                <ul>
                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/95219129cdfcef0e2036349208025b9e.png" alt="1"/>
                      </dt>
                      <dd></dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/8128f340ccfb09a411df704df21850ec.png" alt="2"/>
                      </dt>
                      <dd></dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/a0e7b54888bd3114bce4238b679cfea2.png" alt="3"/>
                      </dt>
                      <dd></dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/7224ce46bf2fc8a9093bbeedbb65036e.png" alt="4"/>
                      </dt>
                      <dd></dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/f6b7226b9fa4d9622bad2f6b0e1b7828.png" alt="5"/>
                      </dt>
                      <dd></dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/d8e9a2465092dc29f88c955f0752a00f.png" alt="6"/>
                      </dt>
                      <dd></dd>
                    </dl>
                  </li>
                </ul>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              








                </div> 
              
              :null
              }
              
          </div>
        )
      }
    }

    export default Detail