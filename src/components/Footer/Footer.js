import FooterStyle from "./FooterStyle.module.css";

const Footer = () => {
    return (
            <div className={`${FooterStyle.footer_size} text-center bg-primary py-3`}>
                <b className="text-light">Copyright @2021 All Right Reserved</b>
            </div>
    )
}

export default Footer;