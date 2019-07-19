import React from 'react'
import Heading from "./Heading.js"
import {Link} from "gatsby"

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <Heading title={heading} />
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-white mb-4">
                Lorem ipsum, or lipsum as it is sometimes known, 
                is dummy text used in laying out print,
                graphic or web designs. The passage is attributed
                to an unknown typesetter in the 15th century
                who is thought to have scrambled parts of Cicero's 
                De Finibus Bonorum et Malorum for use in a type specimen book
                </p>
                <Link>
                    <button className="btn btn-warning btn-md">{heading}</button>
                </Link>
                </div>
            </div>
        </section>
    )
}
