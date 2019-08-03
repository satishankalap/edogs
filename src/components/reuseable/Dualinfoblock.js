import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"

export default function Dualinfoblock({heading}) {
    return (
       <section className="my-0 py-2 bg-theme"> 
            <div className="containers col-12">
        
            <div className="col-8 float=left ">
                <Heading title={heading} />
                <p className="lead text-white mb-4">
                “The world would be a nicer place if everyone had the ability to love as unconditionally as a dog.” “The better I get to know men, the more I find myself loving dogs.” “The only creatures that are evolved enough to convey pure love are dogs and infants.”
                </p>
            </div>
            <div className="col-4 float-right">
                     <div class="card bg-dark">
                    <img src="https://render.fineartamerica.com/images/rendered/medium/print/images-medium-5/kelpie-oakey-alicia-vannoy-call.jpg" class="card-img-top" alt="images goes here" />
                    <div class="card-body">
                        <h5 class="card-title text-success">Love Us</h5>
                        <p class="card-text text-white">Loyalty is also just a natural behavior for dogs. Dogs are pack animals, meaning they are social creatures who prefer the company of other animals. This behavior is a survival mechanism too. Packs succeed because the members of the group depend on one another to survive.</p>
                        <Link href="/" class="btn btn-warning btn-block ">{heading} </Link>
                    </div>
                </div>
            </div>
        </div>
     </section>
    )
}
