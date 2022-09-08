import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_bdsh6zi',
                'template_1ldywuu',
                form.current,
                'Tnc07yLqTYcxPJ8-y'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone2">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={"Contact me".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button2" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Jose Carlos De La Rosa Methvin,
                    <br />
                    Spain,
                    <br />
                    Virgen De Palomares 30 BAJO B, 11550 <br />
                    Chipiona (Cádiz) <br />
                    <span>josekadeveloper@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[36.740401081868555, -6.430315971322323]} zoom={8} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[36.740401081868555, -6.430315971322323]}>
                            <Popup>Jose Carlos lives here, come over for a cup of coffe :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="line-spin-fade-loader"/>
        </>
    )
}

export default Contact