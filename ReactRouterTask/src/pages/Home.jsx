import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let data = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => res.products);
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="bg-background bg-right h-[250px] bg-no-repeat bg-contain bg-slate-100 flex flex-col items-center justify-center">
        <div className=" w-[55%] flex flex-col gap-3">
          <p className="text-blue-400 font-extrabold">VERSION 2018</p>
          <h1 className="font-extrabold text-5xl ">30% discount</h1>
          <div>
            <p className="text-gray-500">
              New version 2018 with many powerful features.
            </p>
            <p>Faster, Friction better & Cheap Price</p>
          </div>
          <button className="bg-blue-500 w-[100px] text-white h-[35px] rounded-md">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" flex flex-col justify-center px-[8%]">
        <div className="flex justify-between py-3">
          <h2 className="text-xl font-extralight">Today Deals</h2>
          <button className="underline text-xs">View all</button>
        </div>
        <hr style={{ borderColor: "gray" }} />
      </div>
      <div className="mt-[50px] ml-[8%]">
        <div>
          <Carousel
            className="w-[90%] bord"
            autoplaySpeed={2300}
            slidesToShow={7}
            autoplay
            draggable={true}
            arrows={true}
            infinite={true}
          >
            {products.length > 0 &&
              products.map((element) => {
                return (
                  <NavLink
                    key={element.id}
                    to={`product/${element.id}`}
                    className=" shadow-3xl h-[420px] p-3 flex flex-col items-center border-l-2 "
                  >
                    <img
                      src={element.images[0]}
                      className="rounded-lg w-40 h-40"
                      alt="product"
                    />
                    <h1 className="font-bold text-center h-[70px] flex items-center justify-center text-[15px]">{element.title}</h1>
                    <p className="text-gray-400 text-center text-xs h-[60px]">
                      {element.description.slice(0, 35)}...
                    </p>
                    <p className="text-center font-bold text-lg">
                      ${element.price}
                    </p>
                    <p className="flex gap-2 justify-center mt-[10px]">
                      {Array.from(
                        { length: Math.round(element.rating) },
                        (_, index) => (
                          <img
                            key={index}
                            className="w-5 h-5" 
                            src="https://www.svgrepo.com/show/13695/star.svg"
                            alt="star"
                          />
                        )
                      )}
                    </p>
                    <button className="bg-blue-400 text-white text- rounded-md w-full mt-[10px] p-[5px]">Buy Now</button>
                  </NavLink>
                );
              })}
          </Carousel>
        </div>
      </div>

      <div className="border-2 border-solid border-blue-400 flex justify-between my-[50px] p-[30px] w-[83%] ml-[8%]">
        <div className="flex items-center gap-[20px]">
          <i
            className="fa-solid fa-rocket"
            style={{
              color: "rgb(96 165 250 / var(--tw-border-opacity)",
              fontSize: "30px",
            }}
          ></i>
          <div>
            <p>Free Delivery</p>
            <p className="text-xs">For all orders over $99</p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] border-l-2 border-solid border-blue-400 pl-[20px]">
          <i
            className="fa-solid fa-arrows-rotate"
            style={{
              color: "rgb(96 165 250 / var(--tw-border-opacity)",
              fontSize: "30px",
            }}
          ></i>
          <div>
            <p>90 Days Return</p>
            <p className="text-xs">If goods have problems</p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] border-l-2 border-solid border-blue-400 pl-[20px]">
          <i
            className="fa-regular fa-credit-card"
            style={{
              color: "rgb(96 165 250 / var(--tw-border-opacity)",
              fontSize: "30px",
            }}
          ></i>
          <div>
            <p>Secure Payment</p>
            <p className="text-xs">100% Secure Payment</p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] border-l-2 border-solid border-blue-400 pl-[20px]">
          <i
            className="fa-regular fa-comments"
            style={{
              color: "rgb(96 165 250 / var(--tw-border-opacity)",
              fontSize: "30px",
            }}
          ></i>
          <div>
            <p>24/7 Support</p>
            <p className="text-xs">Dedicated support</p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] border-l-2 border-solid border-blue-400 pl-[20px]">
          <i
            className="fa-solid fa-gift"
            style={{
              color: "rgb(96 165 250 / var(--tw-border-opacity)",
              fontSize: "30px",
            }}
          ></i>
          <div>
            <p>Gift Service</p>
            <p className="text-xs">Support gift service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
