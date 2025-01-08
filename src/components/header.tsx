import Button from "./button"

export default function Header() {
    return (<div className="flex flex-row bg-slate-50 gap-4 items-center">
        <div className="grid grid-cols-[auto,auto] gap-3">

            <img className="size-[40px]" src="/i.jpg ">
            </img>

            <nav className="flex items-center gap-1 text-xl font-bold ">
                <a className="hover:underline">Курсы</a>
                <a className="hover:underline">Сертификаты</a>
                <a className="hover:underline">Словарь</a>
                <a className="hover:underline">Контакты</a>
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
