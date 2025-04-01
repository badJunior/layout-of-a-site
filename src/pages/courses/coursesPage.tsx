import { Link } from "react-router-dom"

export default function CoursesPage() {
    return (
        <div className="grid grid-rows-[1fr,auto,1fr,] w-full h-[100vh] bg-slate-50  justify-center ">

            <h1 className="font-bold text-3xl w-auto self-end">Тесты и практика</h1>

            <div className="grid grid-cols-[1fr,1fr] grid-rows-[auto,auto]  gap-5 w-auto">
                <img className="  " src="/courseTheory.jpg " />
                <img className="  " src="/coursePractice.jpg " />
                <Link className="bg-button-background rounded-lg hover:bg-sky-500 p-2 text-white text-center" to={"/courses/theory/about"}> Пройти тестовые задания</Link>
                <Link className="bg-button-background rounded-lg hover:bg-sky-500 p-2 text-white text-center" to={"/courses/theory/about"}>Пройти практические задания</Link>
            </div>
            <div></div>
        </div>

    )
}