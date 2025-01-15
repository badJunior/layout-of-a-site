import Button from "../../../components/button"

export default function StayingQuestions() {
    return (
        <div className="grid w-full h-[100vh] bg-slate-50 justify-center items-center">
            <div className="grid grid-cols-[1fr,2fr] ">

                <img className="" src="/illustrationTwo.jpg ">
                </img>
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col  gap-1">
                        <span>Остались вопросы?</span>
                        <span className="font-bold text-2xl">Отправьте их в нашим консультантам </span>
                        <div className="grid grid-cols-2 gap-2 ">
                            <div className="flex flex-col">
                                <p>Имя*</p>
                                <input type="text" className="bg-slate-200  p-1 rounded-lg" placeholder="имя" />
                            </div>
                            <div className="flex flex-col">
                                <p>Фамилия*</p>
                                <input type="text" className="bg-slate-200  p-1 rounded-lg" placeholder="фамилия" />
                            </div>
                            <div className="flex flex-col ">
                                <p className="">Почта*</p>
                                <input type="text" className="bg-slate-200  p-1 rounded-lg" placeholder="email " />
                            </div>
                            <div className="flex flex-col">
                                <p>Телефон</p>
                                <input type="text" className="bg-slate-200  p-1 rounded-lg" placeholder="телефон" />
                            </div>


                        </div>
                        <div className="flex flex-col">
                            <p className="">Сообщение*</p>
                            <textarea className="bg-slate-200  p-1 rounded-lg h-[100px] flex justify-start" placeholder="сообщение" />
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="grid grid-cols-2 ">
                        <div className="flex flex-row gap-2 items-center">
                            <input type="checkbox" className="bg-slate-50 " />

                            <span className="">Я соглашаюсь получать сообщения от c# scool</span>
                        </div>
                        <Button caption="Отправить сообщение" onClick={() => { console.log("нажал") }} />
                    </div>
                </div>



            </div>

        </div>
    )
}