export default function ContactsInformation() {
    return (
        <div className="grid w-full h-[75vh] bg-slate-50 justify-center items-center">
            <div className="flex flex-row items-start">
                <h2 className="font-bold text-3xl">Контактная информация</h2>
            </div>
            <div className="grid grid-cols-[1fr,2fr] ">
                <div className="flex flex-col ">
                    <p>Почта:</p>
                    <p className="font-bold">hello@c#.com</p>
                    <p>Телефон:</p>
                    <p className="font-bold">(405) 555-0128</p>
                    <p>Адрес:</p>
                    <p className="font-bold ">2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
                    <p className=" ">Follow us:</p>
                    <img className="w-[200px] " src="/socialsColor.jpg ">
                    </img>
                </div>
                <img className="" src="/map.jpg ">
                </img>
            </div>
        </div>

    )
}