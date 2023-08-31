import NavBar from './NavBar';
import construction from './../assets/construction.jpg'
import '../components/Home.css'

export default function Home(){
    return (
        <div className='home-container'>
           <img src={construction} className='image'/>
            <NavBar/>

        </div>
    )
}