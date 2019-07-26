import React, {Component} from 'react'
import css from './index.module.scss'
import {withRouter} from 'react-router';

class HouseList extends Component {
  render() {
    return (
      <ul className={css.houselist}>
        {
          this.props.length === 0 ?
          null:
          this.props.info.map(item => {
            return (
              <li key={item.id} onClick={()=> this.toDetail(item.id)}>
                <div className={css.img}>
                  <img src={item.thumburl} alt="" />
                  <div className={css.roi + ' clear'}>
                    <div className={css.roiL + ' l'}>近一年涨幅</div>
                    <div className={css.roiR + ' l'}>{item.roi + '%'}</div>
                  </div>
                </div>
                <div className={css.bottom}>
                  <div className={css.title + ' clear'}>
                    <span className={css.titL + ''}>{item.chinesecity}</span>
                    <span className={css.titR + ''}>{item.title}</span>
                  </div>
                  <div className={css.price}>{item.price_rmb_string}</div>
                  <div className={css.rent}>{item.rent}</div>
                  <div className={css.tag + ' clear'}>
                    {
                      item.housetag.map(tagitem => {
                        return (
                          <div style={{background: tagitem.tag_color}} key={tagitem.tagname}>{tagitem.tagname}</div>
                        )
                      })
                    }
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  toDetail = (id)=> {
    this.props.history.push(`/detail/${id}`)
  }
}

export default withRouter(HouseList)