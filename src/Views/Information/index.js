import React, {Component} from 'react'
import axios from 'axios'
import css from './index.module.scss'
import Houses from './SwiperSmall'
import InfoList from './../../Components/InfoList'
class Information extends Component{

    state = {
        list:[],
        title:[],
        keyword:[],
        house:[],
        info: [],
        message:[]
    }
    componentDidMount(){
      console.log(this.props.match.params.id)
        axios({
            url:`/index.php/wechatapp/News/getNewsText?arctive_id=${this.props.match.params.id}&src=webapp`
          }).then(res=>{
            console.log(res.data.data)
            this.setState({
              list:res.data.data
            })
          })
          axios({
            url:`/index.php/wechatapp/News/getNewsData?arctive_id=${this.props.match.params.id}&src=webapp`
          }).then(res=>{
            console.log(res.data.data.arctive)
            console.log(res.data.data.relevantHouse.list.house_list)
            this.setState({
            title:res.data.data.arctive,
            keyword:res.data.data.arctive.keyword,
            house:res.data.data.relevantHouse,
            info: res.data.data.relevantInformation.list,
            message:res.data.data.relevantInformation
            })
          })
    }

    render(){
      console.log(this.props.match.url)
      var mytitle = this.state.title
        return <div key={this.props.match.url}>
          <div className={css.head}>
            <i className={'iconfont icon-fanhui'} onClick={()=> this.goBack()}></i>
            <span>资讯详情</span>
            <a href="https://m.uhouzz.com/">
              <img src={"/img/head.png"} alt=''/>
            </a>
          </div>
          
          <div className={css.title}>
            <p>{mytitle.title}</p>
            <div>
              <span>{mytitle.create_time}</span>
              <i className={'iconfont icon-yanjing'}></i>
              <span>{mytitle.click_num}</span>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: this.state.list.arc_text}} className={css.content}></div>
          
          <div className={css.label}>
            <h4>相关标签</h4>
            <p>
              {
            this.state.keyword.map((tagitem, index) => {
              return(
              <span style={{background:tagitem.bg}} key={index}>{tagitem.tag}</span>
              )
            })
          }
            </p>
          </div>

          <div className={css.meiqia}>
            <div className={css.mq}>
              <img src={"/img/kf.png"} alt=''/>
              <p className={css.text}>
                <span>买房小助手</span><br/>
                <b>想了解更多海外置业内容</b>
              </p>
            </div>
            <p className={css.chat}>
              <span className={css.zh}>立即咨询</span>
            </p>
          </div>
          
          <div className={css.block}></div>
          
          {
            this.state.house.length === 0 ? null : 
            <Houses list={this.state.house.list.house_list}></Houses>
          }

          <div className={css.block}></div>
          
          <div className={css.message}>
            <p className={css.Relevant}>
              <span className={css.info}>{this.state.message.title}</span>
              <span className={css.active}>更多 ></span>
            </p>
            <InfoList info={this.state.info} />
          </div>
        </div>
    }
    componentWillReceiveProps(nextProps) {
      console.log(nextProps)
      axios({
            url:`/index.php/wechatapp/News/getNewsText?arctive_id=${nextProps.match.params.id}&src=webapp`
          }).then(res=>{
            console.log(res.data.data)
            this.setState({
              list:res.data.data
            })
          })
          axios({
            url:`/index.php/wechatapp/News/getNewsData?arctive_id=${nextProps.match.params.id}&src=webapp`
          }).then(res=>{
            console.log(res.data.data.arctive)
            console.log(res.data.data.relevantHouse.list.house_list)
            this.setState({
            title:res.data.data.arctive,
            keyword:res.data.data.arctive.keyword,
            house:res.data.data.relevantHouse,
            info: res.data.data.relevantInformation.list,
            message:res.data.data.relevantInformation
            })
          })
          setTimeout(()=>{
            window.scrollTo(0, 0)
          }, 1000)
    }
    goBack() {
      // console.log(this.props.history)
      this.props.history.goBack()
    }
}


export default Information