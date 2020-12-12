import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image"
            src="amazonprime.jpg" alt="" />
          
           <div className="home_row">
            <Product
                id="12321341"
                title="The lean startup: Now constant Innovation Creation"
                price={11.96}
                rating={5}
                image=""
            />

            <Product
                id="12321341"
                title="The lean startup: Now constant Innovation Creation"
                price={11.96}
                rating={5}
                image=""
            />
            
        </div>

        <div className="home_row">
            <Product
                id="12321341"
                title="The lean startup: Now constant Innovation Creation"
                price={11.96}
                rating={5}
                image=""
            />

            <Product
                id="12321341"
                title="The lean startup: Now constant Innovation Creation"
                price={11.96}
                rating={5}
                image=""
            />

            <Product
                id="12321341"
                title="The lean startup: Now constant Innovation Creation"
                price={11.96}
                rating={5}
                image=""
            />
            
        </div>

        <div className="home_row">
            <Product
                id="12321341"
                title="The lean startup: Now constant Innovation Creation"
                price={11.96}
                rating={5}
                image=""
            />

        </div>
        
        </div>
    )
}

export default Home
