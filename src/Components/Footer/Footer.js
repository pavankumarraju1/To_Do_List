import "./Footer.css"
const Footer = ()=>{
    
    const date = new Date();
    const year = date.getFullYear();

    return(
        <div className="footer">
            <i>
                copyrights &copy; {year};
            </i>
        </div>
    )
}

export default Footer;