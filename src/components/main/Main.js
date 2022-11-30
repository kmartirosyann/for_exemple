import multipleFruit from "../../images/multipleFruit.svg";
import "../../style/main.scss";

function Main() {
    return (
        <main className="container">
            <div className="main_box">
                <h1>АКТИВИРУЙ </h1>
                <h1>ИММУНИТЕТ!</h1>
            </div>
            <img src={multipleFruit} alt="" className="multiple_fruit" />
            <p className="information">
                Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма
            </p>
            <h2 className="nootris_help">NOOTRIS ПОМОГАЕТ</h2>
            <p className="advice">
                Вашему организму во время пандемии и сезонных простуд
            </p>
        </main>
    );
}

export default Main;