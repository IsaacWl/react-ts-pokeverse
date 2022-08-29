import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
    return <header>
        <div>
            <img src="" alt="" />
            <Link to={"/"} className="link">
                <h1>PokeVerse</h1>
            </Link>
        </div>
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none", fill: "yellow"}}></path>
        </svg>
    </header>
}

export default Header