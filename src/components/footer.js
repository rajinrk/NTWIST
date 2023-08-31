import './../components/footer.css'

export default function Footer(){
    return (
        <div className='footer-container'>
            <div className='footer-body'>
                <img src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />
                <nav className='footer-nav'>
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact Us</a></li>
                    <li>Privacy Policy</li>
                    <li>Site map</li>
                </nav>
                <p className='address'>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
                <section className='socialmedia'>
                    <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' alt='image'/>
                    <img src='https://static.vecteezy.com/system/resources/previews/018/930/584/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='image'/>
                </section>
                <p className='copyright'>© 2022. Ntwist Inc.</p>
            </div>
        </div>
    )
}