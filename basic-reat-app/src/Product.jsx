import "./Product.css"
function Product ({title,price,Description}){
    let isDiscount = price>50000;
    let styles = {backgroundColor :  isDiscount ? "aqua" : ""}
    return (
        <div className="product" style={styles}>
            <h3 >{title}</h3>
            <h5>{Description}</h5>
            <p>price : {price}</p>
            {/* {isDiscount ? <p>5% Off Available</p> : null} */}
            {isDiscount &&  <p>5% Off Available</p>}
        </div>
    );
} 
export default Product