export default function HowPassLessons() {
    return (
        <div className="grid w-full h-[100vh] bg-slate-50 ">
            <div className="flex flex-row justify-center ">
                <h1 className="text-3xl font-bold ">Как проходят занятия?</h1>
            </div>
            <div className="grid grid-cols-[1fr,2fr] p-24 size-auto">
                <div className=" text-2xl place-self-center   ">
                    <p>
                        1. Онлайн и оффлайн форматы:
                        Вы можете выбрать удобный для вас формат обучения.
                        Занятия проводятся как в онлайн-формате, так и в классе,
                        что позволяет гибко планировать свое время.
                    </p>
                    <p>
                        2. Практическая направленность:
                        Каждое занятие включает в себя теоретическую часть,
                        за которой следует практическое задание. Мы верим,
                        что лучший способ освоить C#
                        — это применение знаний на практике.
                    </p>
                    <p>
                        3. Проектная работа:
                        В ходе курса вы будете работать над реальными проектами,
                        что позволит вам создать портфолио и
                        применить полученные знания
                        в реальных условиях.
                    </p>

                </div>
                <div>
                    <img className="place-self-end" src="/illustration.jpg ">
                    </img>
                </div>

            </div>
        </div >

    )
}