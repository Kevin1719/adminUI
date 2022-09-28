import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../styles/Accueil.css'
import image1 from '../assets/imgs/FB_IMG_1664264250813.jpg'
import image2 from '../assets/imgs/FB_IMG_1664264145338.jpg'
import image3 from '../assets/imgs/FB_IMG_1664264164167.jpg'
import image4 from '../assets/imgs/FB_IMG_1664264237832.jpg'
const Accueil = () => {
    return (
        <div className='carrousel'>
            <Carousel>
                <Carousel.Item interval={2000} style={{transition:'.5s'}}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        style={{height:'95vh'}}
                    />
                    <Carousel.Caption>
                        <h3>Passerelles numériques Madagasikara</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{transition:'.5s'}}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        style={{height:'95vh'}}
                    />
                    <Carousel.Caption>
                        <h3>Cours préparatoire</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{transition:'.5s'}}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        style={{height:'95vh'}}
                    />
                    <Carousel.Caption>
                        <h3>Sortie L3</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{transition:'.5s'}}>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Third slide"
                        style={{height:'95vh'}}
                    />
                    <Carousel.Caption>
                        <h3>Présentation Accès Education par Accès Banque</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Accueil
