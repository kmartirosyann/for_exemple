import horseradish from "../../images/horseradish.svg";
import tablets from "../../images/tablets.svg";
import covid from "../../images/covid.svg";
import "../../style/footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="title">
                <h6>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</h6>
                <h6>СО СКИДКОЙ -15% ПЕРВЫМ!</h6>
            </div>
            <div className="price">
                <p>750₽</p>
                <p>690₽</p>
            </div>
            <div className="container-svg">
                <div className="item_blok">
                    <img src={horseradish} alt="" className="horseradish" />
                    <p>Содержит</p>
                    <p className="text_yellow">имбирь</p>
                </div>
                <div className="item_blok">
                    <img src={tablets} alt="" className="tablets" />
                    <h3>+ Бесплатная доставка</h3>
                    <h2 className="text_yellow">Специальная цена</h2>
                    <button>Оформить заказ!</button>
                </div>
                <div className="item_blok">
                    <img src={covid} alt="" className="covid" />
                    <p>Нейтрализует</p>
                    <p className="text_yellow">вирусы</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;