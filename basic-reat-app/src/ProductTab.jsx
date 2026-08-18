import "./ProductTab.css"
import Product from "./Product";

function ProductTab(){
    return (
        <div className="productTab">
            <Product title="Laptop" price={108000} Description="Macbook Air M4"/>
            <Product title="Phone" price={27999} Description="IQOO Z7 Pro 5G"/>
            <Product title="Headphone" price={899} Description="Boat Headset"/>
        </div>
    );
}
export default ProductTab;