import React from 'react';
import store from '../../store';
import { observer } from 'mobx-react';
import api from '../../api';

@observer
class Layout extends React.Component {
  
  componentWillMount () {
    // api.user.login({
    //   phone: '123456',
    //   password: 'qweasd',
    // }).then(res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })
  }

  go = () => {
    this.props.history.push('/404');
  }

  render(){
    return <div>
      layout:
      {store.price}
      {store.total}
      <button onClick={store.increment}>++</button>
      <button onClick={this.go}>jk </button>
      <button onClick={store.fetchPrice}>--</button>
    </div>
  }
}

export default Layout;