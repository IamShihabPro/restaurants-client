import React from 'react';
import googleLogo from '../../assets/logo/1.png';
import facebookLogo from '../../assets/logo/2.png';
import githubLogo from '../../assets/logo/3.png';

const Login = () => {
    const handleGoogleLogin = () =>{
        console.log('google');
    }
    const handleGithubLogin = () =>{
        console.log('github');
    }
    const handleFacebookLogin = () =>{
        console.log('facebook');
    }

  return (
    <div className='container mx-auto mt-40 h-1/2'>
      <div className='flex flex-col justify-center items-center mt-4 gap-4'>
        <button onClick={()=> handleGoogleLogin()} className='flex justify-center items-center'>
          <img src={googleLogo} className='w-60' alt="" />
        </button>

        <button onClick={()=> handleGithubLogin()}  className='flex justify-center items-center '>
          <img src={githubLogo} className='w-60' alt="" />
        </button>

        <button onClick={()=> handleFacebookLogin()}  className='flex justify-center items-center '>
          <img src={facebookLogo} className='w-60' alt="" />        
        </button>
      </div>
    </div>
  );
};

export default Login;
