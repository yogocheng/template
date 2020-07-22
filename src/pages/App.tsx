import React from 'react';
import { Switch, Router, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import route from '@/router';
import stores from '@/store';
import Authority from './Authority';

function App(props: any): JSX.Element {
  return (
    <Provider store={stores}>
      <BrowserRouter>
            <Authority />
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
      </BrowserRouter>
    </Provider>
  )
}

export default App;
