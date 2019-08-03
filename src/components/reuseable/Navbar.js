import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from "../../images/dlogo.png"
import {FaCartArrowDown} from "react-icons/fa"

export default class navbar extends Component {

    //we are using this state because whenever we minimise the browser it shows us menu as well as the lists./
  
    state = {
        navbarState :false,
        navbarClass :"collapse navbar-collapse",
        menus : [{
            id:1,
            text:"Home",
            url:"/"
        },{
            id:2,
            text:"About",
            url:"/about"
        },{
            id:3,
            text:"Service",
            url:"/service"
        },{
            id:4,
            text:"Contact",
            url:"/contact"
        }]
    }
    //mytoggler is used here for whenever we minimize it needs to show the menu only /

    myToggler = () =>{
        this.state.navbarState ? this.setState({
            navbarState :false ,
            navbarClass : "collapse navbar-collapse",
        }) : this.setState({
            navbarState : true ,
            navbarClass : "collapse navbar-collapse show",
        })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-dark">
                <Link to='/' className ="navbar-brand ml=5">
                    <img src={logo} alt="logo is here" width="60px">
                    </img>
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.myToggler}
                >
                    <spam className="text-dark">Menu</spam>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map(menu => {
                            return (
                            <li key={menu.id} className="nav-item">
                            <Link to={menu.url} className="nav-link text-dark" >{menu.text}</Link>
                        </li>)
                        })
                        }
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark" > <FaCartArrowDown className = "cart-icon" /></Link>
                           
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
