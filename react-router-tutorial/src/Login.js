import {useNavigate} from 'react-router-dom'

export default function Login () {
    const navigate = useNavigate();


    const loginEventHandler = (event) => {
        event.preventDefault();

        const checkLogin = true;
        if(checkLogin ) {
            navigate('/dashboard')
        }

    }    

    return (
        <>
            <form onSubmit={loginEventHandler}>
                <label htmlFor="">username</label>
                <input type="text" name="" id="" />
                <label htmlFor="">password</label>
                <input type="password" name="" id="" />
                <button>Login</button>
            </form>

        </>
    )

}