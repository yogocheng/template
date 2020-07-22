import * as React from 'react';
// import history from '@/router/history'



export default class Authority extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render(){
        const { children } = this.props;
        // history.push('/')
        return <div>Authority
            { children }
        </div>
    }
}