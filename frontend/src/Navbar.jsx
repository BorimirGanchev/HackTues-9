import { GoogleLogin} from '@react-oauth/google'
import jwt_decode from "jwt-decode";
export default function Navbar ()
{
    return <nav className="nav"> 
        <h1>Safe travel</h1>
        <ul>
            <li >
                <a href="/map">Map</a>
            </li>
            <li id="google-login">
            <GoogleLogin
                onSuccess={credentialResponse => {
                console.log(credentialResponse.credential);

                var decoded = jwt_decode(credentialResponse.credential);
                console.log(decoded)
                }}
                onError={() => {
                console.log('Login Failed');
                
                }}
                />
            </li>

        </ul>
    </nav>
}