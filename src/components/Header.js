import React from 'react';
import ScrollingColorBackground from 'react-scrolling-color-background';

export default function Header(){
    const darkPurpleRgb = 'rgb(101, 45, 172)';
    const whiteRgb = 'rgb(255, 255, 255)';

    const COLORS = [
        darkPurpleRgb,
        whiteRgb
    ]

    return (
        <div>
            <ScrollingColorBackground
                selector='.js-color-stop[data-background-color]'
                colorDataAttribute='data-background-color'
                initialRgb='rgb(32, 202, 172)'
            />
                {COLORS.map((rgbString, idx) => (
                    <section
                        key={idx}
                        className='js-color-stop'
                        data-background-color={rgbString}
                        style={{height: '30vh'}}
                    />
                ))}
        </div>
    )
}