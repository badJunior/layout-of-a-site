
export default function FeedbacklOurStudents() {
    return (
        <div className="grid w-full h-[100vh] bg-slate-50 ">
            <div className="grid grid-col justify-center  items-center">
                <h1 className="font-bold text-3xl">Отзывы наших учеников</h1>
            </div>
            <div className="grid grid-cols-[auto,auto]  items-start p-5">
                <div className="flex flex-col">
                    <h1>Курс был структурированным и логичным. Каждое занятие строилось на предыдущем, что позволяло мне постепенно углубляться в тему.
                        Я особенно оценила практические задания, которые помогали закрепить полученные знания.
                        Мне нравилось,
                        что мы работали над реальными проектами,
                        что дало возможность увидеть,
                        как создаются приложения с нуля.
                    </h1>
                    <div className="flex gap-2">
                        <img className="place-self-start p-3 " src="/girl.jpg ">
                        </img>
                        <h1 className="place-self-center ">Eleanor Pena</h1>

                    </div>

                </div>
                <div className="flex flex-col ">
                    <h1>Курс был организован очень грамотно:
                        каждая тема логически переходила в следующую,
                        а практические задания помогали закрепить знания.
                        Я особенно ценил проектную работу, где мы создавали реальные приложения.
                        Это не только дало мне возможность применить теорию на практике,
                        но и стало отличным дополнением к моему портфолио.
                    </h1>
                    <div className="flex gap-2">
                        <img className="place-self-start p-3 " src="/man.jpg ">
                        </img>
                        <h1 className="place-self-center ">Вадим</h1>
                    </div>
                </div>

            </div>

        </div>

    )
}