import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/ProductList/ProductList"
function Home() {
    return (
        <div>
            <div>
                <Navbar>
                    <ProductList />
                </Navbar>
            </div>
        </div>
    );
}

export default Home;