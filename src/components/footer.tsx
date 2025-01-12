export default function Footer() {
    return (
        <div className="flex flex-col bg-slate-800 gap-4 items-center" >

            <div className="grid grid-cols-6 w-auto place-self-center justify-center p-2">
                <div className="flex flex-col p-2 gap-1 text-white  col-span-2">
                    <span>
                        У нас есть множество курсов и программ от ведущих экспертов рынка.
                    </span>
                    <span>Мы предоставляем актуальные подходы к онлайн-обучению,</span>
                    <span>стажировкам и трудоустройству в крупнейших компаниях страны</span>
                    <img className="place-self-center p-1 " src="/socials.jpg ">
                    </img>
                </div>
                <div className="flex flex-col w-min justify-self-center ">
                    <p className="font-bold text-white">Карта сайта</p>
                    <h1 className="text-white">Курс</h1>
                    <h1 className="text-white">Сертификаты</h1>
                    <h1 className="text-white">Словарь</h1>
                    <h1 className="text-white">Контакты</h1>
                </div>

                <p className="font-bold text-white w-min justify-self-center "> Курс  <span className="text-white">С#</span></p>

                <div className="flex flex-col w-min justify-self-center ">
                    <p className="font-bold text-white">Наши контакты</p>
                    <div className="flex items-start ">
                        <span className="text-white">(405)555-0128</span>
                    </div>
                    <div className="flex items-start ">
                        <span className=" text-white">hello@c#.com</span>
                    </div>
                </div>
                <div className="flex flex-col w-min">
                    <p className="font-bold text-white ">Подписаться на наши новости</p>
                    <input type="text" className="bg-slate-700 min-w-[200px] p-1" placeholder="email " />
                    <span className="text-white">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</span>
                </div>
            </div>
            <div className="grid grid-cols-2 bg-black w-full">
                <span className="flex flex-col  items-center text-white">© All rights reserved.
                    Made with
                    by Createx Studio </span>

                <span className="flex flex-col  items-center text-white">GO TO TOP
                </span>
            </div>


        </div >
    )
}