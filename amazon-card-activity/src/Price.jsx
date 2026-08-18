import "./Price.css"
function Price ({oldPrice,newPrice}){
    return (
        <div className="price">
        <span className="oldPrice">{oldPrice}</span>
        <span className="newPrice">{newPrice}</span>
        </div>
    );
}
export default Price