import React, { useEffect, useState } from 'react'

// export default function Products() {
// // let counter=0
// // when variable value/state changes please re-render my component ==> useState() do that work for you
// // let [variable_to _store_initinal_state, function_to_change_state/value]=useState(initalValue)

// let [counter,setCounter]=useState(0)

//   const fetchProducts = async()=>
//     {
//     let response=await fetch('https://dummyjson.com/products')
//     let productsData=await response.json()
//     console.log(productsData);
//     console.log(productsData.products);
    
//   }
//   //fetchProducts()

//   useEffect(()=>{
//     fetchProducts()
//   },[counter])
//   const changeCounter=()=>
//   {
//     counter = counter+=1
//     console.log("counter value is: ", counter);
//     setCounter(counter)
//   }
//   return (
//     <div>
//       <p>counter value is : {counter}</p>
//       <button onClick={changeCounter}>click me to change</button>
//     </div>
//   )
// }

export default function Products() 
 {
  let [products,setProducts]=useState(null)
  console.log(products);
  
    const fetchProducts = async()=>
      {
      let response=await fetch('https://dummyjson.com/products')
      let productsData=await response.json()
      console.log(productsData);
      console.log(productsData.products);
      setProducts(productsData.products) 
    }

    useEffect(()=>{
      fetchProducts()
    },[])
    
    return (
      <div>
        
          {/* products && products.map(product=>{console.log(product.id)}) */}
          <div className='container'>
          <div className='row'>
              {
                    products && products.map(product=>{
                    return <>
                    
                          <div className='col-3'>
                            <div class="card" style={{width:16+"rem"}}>
                              <img src={product.thumbnail} class="card-img-top" alt="..."/>
                              <div class="card-body">
                                <h5 class="card-title">{product.title.slice(0,15)}</h5>
                                <p class="card-text">{product.description.slice(0,70)}...</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                            </div>
                          </div>
                        </>
              })
            }
        </div>
        </div>
      </div>
    )
  }
