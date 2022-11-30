import nootris from "../../images/nootris.svg";
import shoppingBag from "../../images/shoppingBag.svg";
import "../../style/navBar.scss";


function Navbar() {
    return (
        <nav className="navBar">
            <div className="content">
                <img src={nootris} alt="" className="nootris" />
                <ul className="tools">
                    <li>
                        FAQ
                    </li>
                    <li>
                        Оплата и доставка
                    </li>
                    <li>
                        Возврат
                    </li>
                    <li>
                        Исследования
                    </li>
                    <li>
                        Личный кабинет
                    </li>
                    <li>
                        8 8 (800) 600-09-90
                    </li>
                </ul>
                <img src={shoppingBag} alt="" className="shoppingBag" />
            </div>
        </nav>
    );
}

export default Navbar;