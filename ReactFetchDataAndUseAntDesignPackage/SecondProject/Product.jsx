import "./Product.css"
import { Carousel, Skeleton } from "antd";
function Product({item}){

  return (
    <div className="product-card">
        {
            item?
<>
<div className="badge">{item.tags.toString()}</div>
    <Carousel autoplay centerMode={true} draggable={true} arrows={true} vertical={true} infinite={true}>
        {item.images.map((element)=>{
return(
    <div className="product-tumb">
        <img src={element} alt=""/>
    </div>)
        })}

    </Carousel>
    <div className="product-details">
        <span className="product-catagory">{item.category}</span>
        <h4><a href="">{item.title}</a></h4>
        <p>{item.description}</p>
        <div className="product-bottom-details">
            <div className="product-price"><small>${item.price}</small>${(item.price*(100-item.discountPercentage)/100).toFixed(2)}</div>
            <div className="product-links">
                <a href=""><i className="fa fa-heart"></i></a>
                <a href=""><i className="fa fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
</>
            :
<Skeleton active={true}></Skeleton>

        }
    
</div>
  )
}

export default Product