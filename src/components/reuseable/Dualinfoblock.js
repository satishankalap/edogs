import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                 <Heading title={heading} />
                 <div className="col-8 mx-auto">
                  <p className="lead text-white mb-4">
                  Lorem ipsum, or lipsum as it is sometimes known, 
                  is dummy text used in laying out print,
                  graphic or web designs. The passage is attributed
                  to an unknown typesetter in the 15th century
                  who is thought to have scrambled parts of Cicero's 
                  De Finibus Bonorum et Malorum for use in a type specimen book.
                  Lorem ipsum, or lipsum as it is sometimes known, 
                  is dummy text used in laying out print,
                  graphic or web designs. The passage is attributed
                  to an unknown typesetter in the 15th century
                  who is thought to have scrambled parts of Cicero's 
                  De Finibus Bonorum et Malorum for use in a type specimen book
                 </p>
                 </div>
                 <div className="col-4">
                    <div class="card bg-dark">
                      <img src="https://images.pexels.com/photos/2606219/pexels-photo-2606219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="images goes here" />
                         <div class="card-body">
                             <h5 class="card-title text-success">Click more images</h5>
                             <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <Link href="/" class="btn btn-warning btn-block">{heading} </Link>
                         </div>
                    </div>
                 </div>
            </div>
        </section>
    )
}
