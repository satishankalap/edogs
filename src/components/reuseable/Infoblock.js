import React from 'react'
import Heading from "./Heading.js"
import {Link} from "gatsby"

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-2 py-4">
            <Heading title={heading} />
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-white mb-4">
                Our vision is to provide security to each individual family,at the same time get someone who is loyal with you no matter what kind of situation it is.Get un-conditional love from various breeds,we provide all breeds with guidance.
                </p>
                <Link>
                    <button className="btn btn-warning btn-md">{heading}</button>
                </Link>
                </div>
            </div>
        </section>
    )
}
