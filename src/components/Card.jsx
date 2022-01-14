import React from "react";

function Card(props){
return(
    
<div className="card">
<div id={"carouselExampleFade"+props.id} className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src={props.img1} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={props.img2} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={props.img3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleFade"+props.id}  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleFade"+props.id}  data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="card-body">
                  <p className="card-text">Some quick example text to build on the card .</p>
                  <h5>Price : Rs {props.price}</h5>
             </div>
             <div className="card-bottons">
               <p className="rating">Rating : <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <i class="fas fa-star"></i></p>
             <i className="fas fa-cart-plus"></i>
             <button type="button" className="btn">Preview</button>
             </div>

</div>
)

};

export default Card;