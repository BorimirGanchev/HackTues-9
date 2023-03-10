import React from 'react'
import ReactDOM from 'react-dom/client'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './App.css'

const Slider = () => {
    const images = [
        "https://media.architecturaldigest.com/photos/57ad893acfc37bc171ad8082/2:1/w_5122,h_2561,c_limit/madrid-travel-guide.jpg",
        "https://www.nomadicmatt.com/wp-content/uploads/2018/01/parisguide-1.jpg",
        "https://media.istockphoto.com/id/930824730/photo/machu-picchu-peru.jpg?s=612x612&w=0&k=20&c=sXUMiy9gRGKow9GHNY_S9BH_ZEekIEcpDHyti5IjZNQ=",
        "https://cdn.kimkim.com/files/a/content_articles/featured_photos/3117192df163b1c655a6081e58961533bd8e1afe/big-317a87546e8649aae22e694d77523453.jpg",
        "https://res.klook.com/image/upload/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg",
        "https://media.cntraveler.com/photos/61e6354354fe6df2acc90f92/16:9/w_2560,c_limit/Conrad-Bora-Bora-Nui-CRHotel.jpg",

    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Madrid</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Paris</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Peru</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    <span>New Zealand</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                    <span>Rome</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                    <span>Bora Bora</span>
                </div>
            </div>
        </Slide>
    );
};

export default Slider;