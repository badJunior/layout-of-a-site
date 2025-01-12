export default function AboutCSharpScreen() {
    return (
        <div className="grid w-full h-[100vh] bg-slate-50 justify-center items-center">
            <section className="grid grid-cols-[2fr,1fr] size-auto  ">
                <article className="text-5xl font-bold place-self-center p-24">
                    <h2> С# разработчик</h2>
                    <p>
                        Обучайтесь основам ,
                        решайте задачи любой сложности
                        на одном из самых мощных языков
                        программирования и укрепите базовые знания алгоритмов и ООП

                    </p>
                </article>
                <img className="place-self-center" src="/logo.jpg ">
                </img>
            </section>
            <section className="flex  justify-center gap-3 text-2xl  ">
                <div className="flex w-auto gap-5 items-center ">
                    <div className="flex gap-1 items-center w-auto">
                        <span className=" font-bold text-3xl">1200</span>
                        студентов прошли наш курс
                    </div>
                    <div className="bg-button-background size-[10px] rounded-full"></div>
                    <div className="flex gap-1 items-center w-auto">
                        <span className="flex gap-2 font-bold text-3xl">1000</span>
                        положительных отзывов
                    </div>
                    <div className="bg-button-background size-[10px] rounded-full"></div>
                    <div className="flex gap-1 items-center w-auto">
                        <span className="font-bold text-3xl">5</span>
                        успешной работы
                    </div>


                </div>
            </section>
        </div>

    )
} 