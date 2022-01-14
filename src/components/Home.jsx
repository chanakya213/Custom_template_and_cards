import React from "react"
import Card from "./Card";

function Home(){

  const arr = [{img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJB0FZZ2zmQDfnVQLZv2YiEbc7U4rtUIalg&usqp=CAU" , 
  img2:"https://pbblogassets.s3.amazonaws.com/uploads/2018/10/15131009/21motiongraphics_Header2.jpg",
img3:"https://s24953.pcdn.co/blog/wp-content/uploads/2018/01/Templates-Guide-header-1-1024x576.png",price:300},
{img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJB0FZZ2zmQDfnVQLZv2YiEbc7U4rtUIalg&usqp=CAU" , 
  img2:"https://pbblogassets.s3.amazonaws.com/uploads/2018/10/15131009/21motiongraphics_Header2.jpg",
img3:"https://s24953.pcdn.co/blog/wp-content/uploads/2018/01/Templates-Guide-header-1-1024x576.png",price:250},
{img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJB0FZZ2zmQDfnVQLZv2YiEbc7U4rtUIalg&usqp=CAU" , 
  img2:"https://pbblogassets.s3.amazonaws.com/uploads/2018/10/15131009/21motiongraphics_Header2.jpg",
img3:"https://s24953.pcdn.co/blog/wp-content/uploads/2018/01/Templates-Guide-header-1-1024x576.png",price:500}
];
    return(
      <div className="home">
            <h1 className="text-center">Available Templates </h1>
          <div className="template-list">
{ arr.map((item,index)=>{
  return <Card id={index} img1={item.img1} img2={item.img2} img3={item.img3} price={item.price} />
}) }
        </div>
      </div>
    )
};

export default Home;