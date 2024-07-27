import Cookies from "js-cookie";

const userId = Cookies.get('userId')|| 'Guest';
const email = Cookies.get('email');
const username = Cookies.get('username');



const Home = () => {
  return (
    <div>
      <h1> {userId}</h1>
      <h1> {email}</h1>
      <h1> {username}</h1>
    </div>
  )
}

export default Home
