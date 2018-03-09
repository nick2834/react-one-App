import React from 'react';
import Header from '../header/header';
import Loading from '../../container/loading/Loading'

class MusicPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading:false
    }
  }
  render(){
    if(this.state.loading){
      return <Loading/>
    }else{
      return(
        <div>
          <Header title='一个·音乐'/>
        </div>
      )
    }
  }
}
export default MusicPage