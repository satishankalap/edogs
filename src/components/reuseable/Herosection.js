import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Herosection({img,title,subtitle,heroclass}) {
    return (
        <BackgroundImage className={heroclass}
        fluid={img}>
            <h1 className="text-white text-uppercase text-center display-5">{title}</h1>
            <div> <h4 className="text-warning text-center col-8 mx-auto my-4">{subtitle}</h4> </div>
        </BackgroundImage>
    )
}
