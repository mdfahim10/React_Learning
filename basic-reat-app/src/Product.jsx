import "./Product.css"
function Product ({title,price,Description}){
    return (
        <div className="product">
            <h3>{title}</h3>
            <p>price : {price}</p>
            <h5>{Description}</h5>
        </div>
    );
}
export default Product