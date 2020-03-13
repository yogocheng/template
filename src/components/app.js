import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import route from '../router/index';

export default class App extends React.Component {
  render(){
    return  (<Router>
        <div>
          <Switch>
                  {
                        route.map((item, i) => {
                            if(item.exact){
                                return <Route exact path={item.path} component={item.component}  key={i}/>
                            }else{
                                return <Route path={item.path} component={item.component}  key={i}/>
                            }
                        }) 
                    }
          </Switch>
        </div>
    </Router>)
  }
}
