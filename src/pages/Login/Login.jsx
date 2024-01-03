import React, { useContext } from 'react';
import googleLogo from '../../assets/logo/1.png';
import facebookLogo from '../../assets/logo/2.png';
import githubLogo from '../../assets/logo/3.png';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const {signInWithGoogle, user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  console.log(user);

  // google login
  const handleGoogleLogin = () =>{
    signInWithGoogle()
    .then(res =>{   
        console.log(res.user);

        const saveUser = {name: res.user.displayName, email: res.user.email }
              fetch(`${import.meta.env.VITE_API_URL}/users`,{
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(saveUser)
              })
              .then(res => res.json())
              .then(data =>{
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `login successfull`,
                  showConfirmButton: false,
                  timer: 2000
                });
                if(data.insertedId){
                  navigate(from, {replace: true})
                }
              })

            navigate(from, {replace: true})
    })
    .catch(err =>{
        setLoading(false)
        console.log(err.message);
       
        
    })
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
        <button onClick={handleGoogleLogin} className='flex justify-center items-center'>
          <img src={googleLogo} className='w-60' alt="" />
        </button>

        <button onClick={handleGithubLogin}  className='flex justify-center items-center '>
          <img src={githubLogo} className='w-60' alt="" />
        </button>

        <button onClick={handleFacebookLogin}  className='flex justify-center items-center '>
          <img src={facebookLogo} className='w-60' alt="" />        
        </button>
      </div>
    </div>
  );
};

export default Login;
