import React, {Component} from 'react'
import css from './index.module.scss'
import { withRouter } from 'react-router'
class InfoList extends Component {
  render() {
    console.log(this.props.location.pathname)
    return(
      <div className={css.news}>
        {
          this.props.info.map(item => {
            return (
              <dl key={item.id}  onClick={()=>this.changePage(item.id)}> 
                <dt>
                  <img src={item.litpic} alt='' />
                </dt>
                <dd>
                  <p>{item.title}</p> 
                  <p>
                    <i className={'iconfont icon-yanjing'}></i>
                    <span className={css.volume}>{item.click_num}</span>
                    <span className={css.date}>{item.create_time}</span>
                  </p>
                </dd>
              </dl>
                    )
                  })
                }
      </div>
    )
  }
  changePage=(id)=>{
      console.log(this.props)
      this.props.history.push(`/information/${id}`)
    }
}

export default withRouter(InfoList)