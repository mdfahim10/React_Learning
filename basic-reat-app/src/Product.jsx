import "./Product.css"
function Product ({title,price,Description}){
    const features = ["Fast", "Powerful", "Lightweight"];
    return (
        <div className="product">
            <h3>{title}</h3>
            <p>price : {price}</p>
            <h5>{Description}</h5>
            <h4>Features : </h4>
            <ul>
                {features.map((feature)=>{
                    return <li>{feature}</li>})}
            </ul>
        </div>
    );
}
export default Product