let Products=document.querySelector(".Products")
async function items(){
    let output=await fetch('https://dummyjson.com/products?limit=100').then((res)=>res.json())
    console.log(output.products);
    let products=output.products
    for (let product of products){ 
        let newProduct=document.createElement("div")
        newProduct.classList.add("item")
        newProduct.innerHTML=`
        <div class="image">
            <img src=${product.images[0]} alt="">
        </div>
        <div class="info">
            <h1>${product.title}</h1>
            <div>
                <p>Rating:${product.rating}</p>
                <p>Price:${product.price}</p>
                <p>In Sock:${product.stock}</p>
            </div>
        </div>
        <div class="button">Buy</div>
        `
        Products.appendChild(newProduct)
    }
}
items()
