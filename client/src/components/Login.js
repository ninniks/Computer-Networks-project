import React from 'react';
import { Result } from 'antd';


function Login (){
    return ( <Result
        status="403"
        title="403"
        subTitle="You must be logged in to access this page."
        extra={<a href='/'>Back Home</a>}
      />)
    
}

export default Login;