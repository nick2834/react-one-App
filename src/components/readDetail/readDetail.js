import React from 'react';
import Header from '../header/header';
import Loading from '../../container/loading/Loading';
import {READDETAIL,OPTIONS,ESSAYLIST} from '../../fetch/config';
import {get} from '../../fetch/get';
import './readDetail.styl';
class ReadDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      title: "",
      details: {},
      author: [],
      essayList: []
    }
  }
  render(){
    if(this.state.loading){
      return <Loading title="正在加载..." show={this.state.loading}/>
    }
    return(
      <div>
        <Header title={this.state.title}/>
        <div className='content-wrapper'>
          <h1 className='detail-title'>{this.state.title}</h1>
          <hr className='sort-separate-line'/>
          <div className='detail-content' dangerouslySetInnerHTML={{__html:this.state.details.hp_content}}></div>
          <div className='author_detail'>
            <span className='and'>作者</span>
            {
              this.state.author.map((item,index) =>{
                return (
                  <div key={index}>
                    <img src={item.web_url} alt=""/>
                    <span className='name clearfix'>
                      <span className='user_name'>{item.user_name}</span>
                      <span className='wb_name'>{item.wb_name}</span>
                    </span>
                    <span className='desc'>{item.summary}</span>
                  </div>
                )
              })
            }
          </div>
          <div className='essay_detail'>
            <span className='and'>评论列表</span>
            <ul className='essay_list'>
              {
                this.state.essayList.map((item,index) =>{
                  return(
                    <li key={index}>
                      <p className='essay_container'>
                        <span>
                          <img className='essay_header' src={item.user.web_url} alt="web_url"/>
                          <span className='essay_username'>{item.user.user_name}</span>
                        </span>
                        <span className='essay_time'>{item.updated_at}</span>
                      </p>
                      <p className='essay_content'>{item.content}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        
      </div>
    )
  }
  componentDidMount(){
    let id = this.props.match.params.id
    let url = READDETAIL + id
    let essayUrl = ESSAYLIST + id + '/0'
    get(url,OPTIONS).then(res =>{
      console.log(res.data.author)
      this.setState({
        title:res.data.hp_title,
        details: res.data,
        author: res.data.author
      })
    })
    get(essayUrl,OPTIONS).then(res =>{
      if(res.res === 0){
        this.setState({
          essayList:res.data.data
        })
      }
    })
  }
  
}
export default ReadDetail