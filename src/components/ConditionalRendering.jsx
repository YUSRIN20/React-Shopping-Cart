import React, { useState } from 'react';
import CardBody from './CardBody';



const ConditionalRendering = ({setCartcount,cartCount,SetProducts,Products,WomenProducts,WomenSetProducts}) => {
    

  
    return (
        <div class="container px-4 px-lg-5 mt-5">
            {/* <h1 class ="text-center">Accessories for Men and Women</h1> */}
            <h1 class ="title">For Men</h1>
            <div class="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                {Products.map((item,index) => {
                    return (
                        <>
                            <CardBody item= {item} index={index} setCartcount={setCartcount}/>
                            {/* <CardCom item= {item} index={index} setCartcount={setCartcount}/> */}
                        </>
                    )
                })}

            </div>
            <h1 class="title">For Women</h1>
            <div class="row gx-4 gx-lg-4  row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4  justify-content-center">
                {WomenProducts.map((item,index) => {
                    return (
                        <>
                            <CardBody item= {item} index={index} setCartcount={setCartcount}/>
                            {/* <CardCom item= {item} index={index} setCartcount={setCartcount}/> */}
                        </>
                    )
                })}

            </div>
            
        </div>
    );
};

export default ConditionalRendering;