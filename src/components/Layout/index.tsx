import React from 'react';
import store from '../../store';
import { observer } from 'mobx-react';
// import api from '../../api';

interface IProps {
  className: string,
  history: any,
}

interface IState {
  age: number,
}

@observer
class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 1,
    }
  }

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


// 函数组件
// function LayoutFun (props: IProps) {
//   return React.createElement<IProps, HTMLHeadElement>('h6', props, 'hellow')
// }

export default Layout;
// export default LayoutFun;