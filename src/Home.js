import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image"
            src="AmazonBanner.jpg" alt="" />
          
           <div className="home_row">
            <Product
                id="12321341"
                title="Pro React 16 1st ed. Edition by Adam Freeman  (Author)"
                price={11.96}
                rating={5}
                image="product1.jpg"
            />

            <Product
                id="121341"
                title="Cyber Acoustics Premium USB Condenser Microphone with Colored LED Lights - Featuring Dual Recording Patterns - Compatible ...
                       Cyber Acoustics Premium USB Condenser Microphone with Colored LED Lights - Featuring Dual Recording Patterns - Compatible with PC and Mac (CVL-2230)"
                price={39.99}
                rating={4}
                image="product2.jpg"
            />
            
        </div>

        <div className="home_row">
            <Product
                id="12321341"
                title="Human Touch Reflex Swing Pro Leg Massager - for Leg and Foot, Perfect for at Home Relaxation and Stress Relief - Advanced CirQlation Motion
                       Visit the Human Touch Store"
                price={349.00}
                rating={5}
                image="product3.jpg"
            />

            <Product
                id="12321341"
                title="Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands Included)"
                price={278.98}
                rating={5}
                image="product4.jpg"
            />

            <Product
                id="12321341"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
                price={11.96}
                rating={5}
                image="product5.jpg"
            />
            
        </div>

        <div className="home_row">
            <Product
                id="12321341"
                title="Sceptre 34-inch Curved UltraWide 21: 9 Creative LED Monitor 2560x1080 Frameless HDMI DisplayPort Up to 100Hz, Machine Black 2020 (C345W-2560UN)"
                price={331.71}
                rating={5}
                image="product6.jpg"
            />

        </div>
        
        </div>
    )
}

export default Home
