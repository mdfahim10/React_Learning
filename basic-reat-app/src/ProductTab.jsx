import "./ProductTab.css"
import Product from "./Product";

function ProductTab(){
    return (
        <div className="productTab">
            <Product />
            <Product />
            <Product />
        </div>
    );
}
export default ProductTab;