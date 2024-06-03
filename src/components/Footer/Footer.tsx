import './Footer.css';
import logo from '../../Assets/logo.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'

const Footer = () => {
    return (
        <div className='footer bg-gradient-to-b from-white to-slate-400 py-5'>
            <div className='container mx-auto text-center mt-20 px-5'>
                <div className='footer-logo flex justify-center items-center gap-3'>
                    <img className='w-10 h-10' src={logo.src} alt='logo' />
                    <p className='text-3xl'>SHOPPER</p>
                </div>
                <ul className='footer-links flex flex-wrap justify-center gap-5 py-10'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className='footer-social-icon flex justify-center gap-5 mb-10'>
                    <li className='footer-icon-container'>
                        <img className='w-6 h-6' src={instagram_icon.src} alt='Instagram' />
                    </li>
                    <li className='footer-icon-container'>
                        <img className='w-6 h-6' src={pintester_icon.src} alt='Pinterest' />
                    </li>
                    <li className='footer-icon-container'>
                        <img className='w-6 h-6' src={whatsapp_icon.src} alt='WhatsApp' />
                    </li>
                </ul>
                <hr />
                <p className='pt-10 pb-5'>Copyright © 2023 - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
