import React, {Component} from 'react'
import css from './index.module.scss'

class Talk extends Component {
  state = {
    talkList: [{value: '你知道吗，你成功了！', isMe: false}],
    replyList: ['你知道吗，你成功了！', '你成功了！', '咱俩谁更鸭？', '是你吗铁锤？']
  }

  render() {
    return(
      <div className={css.talk}>
        <header className={'clear'}>
          <div className={css.nm + ' l'}>小K</div>
          <div className={css.close + ' r'} onClick={()=> this.props.history.goBack()}>关闭</div>
        </header>
        <main ref="main">
          {
            this.state.talkList.map((item, index)=> {
              return(
                <div key={index} className={css.container}>
                  <div className={item.isMe ? css.myhead : css.youhead}>
                    <img src={item.isMe ? process.env.PUBLIC_URL + '/img/cuijn.png' : process.env.PUBLIC_URL + '/img/kerwin.png'} alt="" />
                  </div>
                  <div className={css.text}>
                    {item.value}
                  </div>
                </div>
              )
            })
          }
        </main>
        <footer className={'clear'}>
          <input type='text' placeholder="请输入" ref="myinput" />
          <div className={css.right + ' r'} onClick={()=> this.send()}>发送</div>
        </footer>
      </div>
    )
  }

  componentDidUpdate() {
    this.refs.main.scrollTop = this.refs.main.scrollHeight
  }

  send() {
    if (this.refs.myinput.value === '') {
      return false
    }
    let replyIndex = Math.floor(Math.random() * this.state.replyList.length)
    this.setState({
      talkList: [...this.state.talkList, {value: this.refs.myinput.value, isMe: true}]
    })
    setTimeout(()=> {
      this.setState({
        talkList: [...this.state.talkList, {value: this.state.replyList[replyIndex], isMe: false}]
      })
    }, 200)
    this.refs.myinput.value = ''
    return true;
  }
}

export default Talk