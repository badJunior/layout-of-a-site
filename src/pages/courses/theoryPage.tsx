import { Link } from "react-router-dom"
import Button from "../../components/button"

export default function TheoryPage() {
    return (
        <div className="grid w-full h-[100vh] bg-slate-50 justify-center items-center">
            <div className="flex flex-col">
                <h1 className="font-bold text-3xl">
                    Тест на знания теоретического </h1>
                <h1 className="font-bold text-3xl ">материала по с#</h1>
                <span>Здесь вы можете пройти тест с на тему C#. Время на тест</span>
                <span>неоргарниченно.</span>

            </div>
            <Link className="bg-button-background rounded-lg hover:bg-sky-500 p-2 text-white text-center" to={"/courses/theory/test"}> Начать тест</Link>
        </div>
    )
}