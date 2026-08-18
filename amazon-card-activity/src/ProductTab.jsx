import "./ProductTab.css"
import Product from "./Product.jsx";

function ProductTab() {
    return (
        <div className="productTab">
            <Product title="Logitech MX Master" idx={0}/>
            <Product title="Apple Pencil 2nd Gen" idx={1}/>
            <Product title="Zebronics Z Transformer" idx={2}/>
            <Product title="Petronics Toad23" idx={3}/>
        </div>
    );
}
export default ProductTab;