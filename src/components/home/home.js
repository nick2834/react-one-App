import React from 'react';
import moment from 'moment';
import Header from '../header/header';
import Loading from '../../container/loading/Loading'
import './home.styl';
import {get} from '../../fetch/get';
import {HOMEURL,OPTIONS} from '../../fetch/config';
class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      homeList: []
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
          <Header title='One·一个'/>
          <div className='home-item'>
            {
              this.state.homeList.map((item,index) =>{
                return (
                  <div key={index}>
                    <div className='home-draw'>
                      <span className='time'>{moment(item.hp_makettime).format("YYYY-MM-DD")}</span>
                      <span className='vol'>{item.hp_title}</span>
                      <img className='img-response' src={item.hp_img_original_url} alt="imgs" with='100%'/>
                      <span className='title'>{item.hp_author}</span>
                      <span className='and'>|</span>
                      <span className='pic-info'>{item.image_authors}</span> 
                    </div>
                    <div className='home-word'>
                      <p className='forward'>{item.hp_content}</p>
                      <span className='word-info'>{item.text_authors}</span>
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
  componentDidMount(){
    get(HOMEURL,OPTIONS).then(res =>{
      if(res.res === 0){
        this.setState({
          homeList:res.data,
          loading: false
        })
        console.log(this.state.homeList)
      }
    })
  }
}
export default HomePage