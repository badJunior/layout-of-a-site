import { Link } from "react-router-dom"
import Button from "./button"

export default function Header() {
    return (<div className="flex flex-row bg-slate-50 gap-4 items-center">
        <div className="grid grid-cols-[auto,auto] gap-3">

            <img className="w-[60px]" src="/logoCh.jpg ">
            </img>

            <nav className="flex items-center gap-3 text-xl font-bold ">
                <Link to="/" className="hover:underline">Курсы</Link>
                <Link to="/certificate" className="hover:underline">Сертификаты</Link>
                <Link to="/dictionary" className="hover:underline">Словарь</Link>
                <Link to="/contacts" className="hover:underline">Контакты</Link>
            </nav>

        </div>

        <div className="grow">

        </div>
        <div className="grid grid-cols-2 gap-2">
            <Button caption="зарегистрироваться" onClick={() => { console.log("нажал") }} />
            <Button caption="войти" onClick={() => { console.log("нажал") }} />


        </div>


    </div>)
}
