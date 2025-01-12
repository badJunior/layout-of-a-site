export default function WhyWeScreen() {
    return (
        <div className="flex w-full h-[100vh] bg-slate-50 ">
            <div className="grid grid-cols-[2fr,1fr] size-auto">
                <img className="place-self-center" src="/image.jpg ">
                </img>
                <article className=" text-2xl place-self-center p-24">
                    <h1 className="font-bold text-3xl"> Почему мы?</h1>
                    <p className="font-bold">Только у нас вы:</p>

                    <p>Научитесь писать код на C#</p>
                    <p>Начнете работать с библиотеками для C#</p>
                    <p>Прокачаете навыки алгоритмического мышления
                    </p>
                    <p>Добавите реальные проекты в портфолио
                    </p>
                    <p>Освоите ООП, чтобы работать с кодом быстрее
                    </p>

                </article>
            </div>
        </div>
    )
}