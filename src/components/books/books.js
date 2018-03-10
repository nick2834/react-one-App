import React from 'react';
import Header from '../header/header';
import Loading from '../../container/loading/Loading';
import {READURL,OPTIONS} from '../../fetch/config';
import {get} from '../../fetch/get';
import './books.styl'
class BookPage extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
      readList: []
    }
  }
  
  render(){
    if(this.state.loading){
      return (
        <Loading title="正在加载..." show={this.state.loading}/>
      )
    }else{
      return(
        <div>
          <Header title='一个·图文'/>
          <div className=''>
            {
              this.state.readList.map((item,index) =>{
                return (
                  <div className='read-item clearfix' key={index} onClick={this.getDetail.bind(this,item.item_id)}>
                    <div className='read-content'>
                      <span className='title'>
                        -
                        {
                          item.tag_list[0]
                          ?<span className='title-name'>{item.tag_list[0].title}</span>
                          :<span className='title-name'>阅读</span>        
                        }            
                        -
                      </span>
                      <h1 className="titleitem">{item.title}</h1>
                      <span className="author"><span>文</span><span style={{padding: "0 3px"}}>/</span>{item.author.user_name}</span>
                      <img className="image" src={item.img_url} alt="" width='100%'/>
                      <p className="forward">{item.forward}</p>
                      <span className="time">{item.post_date.split(' ')[0]}</span>
                      <div className="lovecount">
                        <i className="iconfont icon-custom-love" aria-hidden="true"></i>
                        <span>{item.like_count}</span>
                      </div>
                    </div>
                  </div>                 
                )
              })
            }
          </div>
        </div>
      )
    }
  }
  getDetail(id,e){
    e.preventDefault()
    this.props.history.push('/details/'+ id)
  }
  componentDidMount(){
    get(READURL,OPTIONS).then(res =>{
      if(res.res === 0){
        this.setState({
          loading: false,
          readList: res.data
        })
      }
    })
  }
}
export default BookPage