import React from "react";
import PropTypes from "prop-types";
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark px-5">
            <a className="navbar-brand text-white" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
             data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav mr-auto" >
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">{props.label1}<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.label2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.label3}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.label4}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    label4: PropTypes.string,
};
export default Navbar;