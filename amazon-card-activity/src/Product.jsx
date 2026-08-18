import "./Product.css"
import Price from "./Price";
function Product({ title, idx }) {
    let oldPrices = ["12495", "11900", "1599", "5999"];
    let newPrices = ["8999", "9199", "899", "278"];
    let description =
        [
            ["8,000 DPI", "5 Programmable language"],
            ["Intuitive Surface", "designed for ipad pro"],
            ["designed for ipad pro", "Intuitive Surface"],
            ["wireless", "optical orientation"],
        ];

    return (
        <div className="product">
            <h4 className="title">{title}</h4>
                <p>{description[idx][0]}</p>
                <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}
export default Product