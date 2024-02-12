import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
// import CardBody from './components/CardBdy';
import Footer from './components/Footer';
import ConditionalRendering from './components/ConditionalRendering';

const App = () => {
  
  const[status,setsatus] = useState(true)
  const [cartCount,setCartcount] = useState(0) 



  const datasObj = [
    {
    name:'Skyrocket lite Running Shoes',
    image:"https://media.istockphoto.com/id/1312812356/photo/stability-and-cushion-running-shoes-new-unbranded-running-sneaker-or-trainer-on-orange.jpg?s=612x612&w=0&k=20&c=7aRngqzzTH9dIAlhpOLKmZo8pRNgjqf-v_5jljWo2_s=",
    price:"$40.00-80.00",
    delPrice:"$100.00",
    rating:false
  },
  {
    name:'H&M Blue Sunglass',
    image:"https://media.istockphoto.com/id/1310279267/photo/blue-green-sunglasses-dark-and-light-mirror-reflection-lens-yellow-background-close-up.jpg?s=612x612&w=0&k=20&c=9bjI3GpbPG9w90S7-GXeJ6Jt4GB0kPZSPuAOpU3a0Jk=",
    price:"$18.00",
    delPrice:"$20.00",
    rating:true
  },
  {
    name:'Metallic Silver Analog Watch',
    image:"https://media.istockphoto.com/id/484561181/photo/luxury-wrist-watch-on-red-velvet.jpg?s=612x612&w=0&k=20&c=OApQ3CaCvvP6iaAXjHb2gsLnuo519AIMt7Tkz1E--n8=",
    price:"$25.00",
    delPrice:"$50.00",
    rating:false
  },
  {
    name:'Solid Liquid Perfume',
    image:"https://media.istockphoto.com/id/1138314759/photo/mens-green-perfume-in-beautiful-bottle-on-leather-fabric.jpg?s=612x612&w=0&k=20&c=GpV3qEf6py8rl8s3Tyrl0fmDXlXxGn_tK0NOP_KTkgs=",
    price:"$40.00",
    delPrice:"$70.00",
    rating:true
  },
];
const [Products,SetProducts] = useState(datasObj);

 const womenDataObj = [
  {
    name:' Classic Titan CatEye Sunglass',
    image:"https://media.istockphoto.com/id/1125415539/photo/womens-retro-sunglasses-cat-or-fox-on-a-bright-yellow-background.jpg?s=612x612&w=0&k=20&c=dU6i17xys4jvTf2Um1Hv4UOOmY1iqw1TjzUYcDS7W_s=",
    price:"$25.00",
    delPrice:"$50.00",
    rating:false
  },
  {
    name:'Stylish Olive Green Handbag',
    image:"https://media.istockphoto.com/id/1209693433/photo/vintage-style-grey-green-color-women-handbag-display-on-shelf.jpg?s=612x612&w=0&k=20&c=QEBlFwYEiHseFsADzWM5l64ITNJBHRovsFS5VfrD7F4=",
    price:"$120.00-280.00",
    delPrice:"$300.00",
    rating:false
    
  },
  {
    name:'High Heeled Sandals',
    image:"https://media.istockphoto.com/id/1325858486/photo/womens-summer-red-high-heels-shoes-isolated-on-yellow-background.jpg?s=612x612&w=0&k=20&c=ZVAB6_fQZqMtMxwor2owHg5j1nKlQSDGtUqu-VxkkDI=",
    price:"$18.00",
    delPrice:"$20.00",
    starIcon:"fa-solid fa-star",
    rating:true
  },
  {
    name:'Casual Pink Watch',
    image:"https://media.istockphoto.com/id/1390633031/photo/fashion-womens-watch-top-view.jpg?s=612x612&w=0&k=20&c=BZWo7RVf3WeUg2-Uz_sNH6pPx3qgMmAY5VKGXEjThFk=",
    price:"$40.00",
    delPrice:"$45.00",
    rating:true
  }
 ]
 const [WomenProducts,WomenSetProducts] = useState(womenDataObj);

  return (
    <div>
      {/* <h1>App component</h1> */}
      <NavBar cartCount={cartCount} />
      <Header />
      {/* <h1>Cart:{cartCount}</h1> */}
      {status?<ConditionalRendering setCartcount={setCartcount} cartCount={cartCount} SetProducts={SetProducts} Products={Products} WomenProducts ={WomenProducts} WomenSetProducts={WomenSetProducts}/>:''}
      <Footer />
    </div>
  );
};

export default App;