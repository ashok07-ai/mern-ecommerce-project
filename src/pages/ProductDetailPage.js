import Navbar from "../features/Navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";
function ProductDetailPage() {
    return (
        <div>
            <div>
                <Navbar>
                    <ProductDetail />
                </Navbar>
            </div>
        </div>
    );
}

export default ProductDetailPage;