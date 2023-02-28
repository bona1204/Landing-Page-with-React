import React from "react";
import PropTypes from "prop-types";
const Jumbotron=(props)=>{
    return (
        <div className="container-fluid">
        <div className="jumbotron bg-light mx-auto my-4 p-4">    
  <h1 className="display-4">{props.title}</h1>
  <p className="lead">{props.description}</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg " href="#" role="button">{props.button}</a>
  </p>
</div>
</div>
    )
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
};
export default Jumbotron;