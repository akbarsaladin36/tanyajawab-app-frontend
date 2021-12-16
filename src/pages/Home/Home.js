import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import HomeStyle from "./HomeStyle.module.css";

const Home = () => {
    return (
        <div className={HomeStyle.image_background}>
            <Navbar1 />
                <h1 className="mt-5 text-light text-center">Ini Adalah Halaman Home</h1>
            <Footer />
        </div>
    )
}

export default Home;