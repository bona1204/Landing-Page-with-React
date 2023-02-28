import React from "react";
import PropTypes from "prop-types";

const Imgstyles={
    minwidth: "500px",
	minheight: "325px",
}
const Cardstyles={
    minwidth: "500px",
}
const Card=(props)=>{
    return(
<div className="card" style={Cardstyles}>
  <img className="card-img-top img-fluid" style={Imgstyles} src="https://th.bing.com/th/id/R.94099815f616ce300df62a5640e978b7?rik=S%2fvFn4LRyzxDpg&pid=ImgRaw&r=0" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title
     and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
/*     style: PropTypes.object, */
}; 

export default Card;