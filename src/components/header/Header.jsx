import "./header.css"; // importação do css

function Header() {
    return(
        <div className="header">
            <div className="header-container">            
                <div className="left-part">
                    <img src="../../../public/logo-13.png" alt="logo" />
                </div>

                <div className="right-part">
                    <ul>
                        <li>Contato</li>
                        <li>Projetos</li>
                        <li>Sobre mim</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;