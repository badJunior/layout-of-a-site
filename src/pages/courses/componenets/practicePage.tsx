import Button from "../../../components/button"

export default function PracticePage() {
    return (
        <div className="grid w-full h-[100vh] bg-slate-50 justify-center items-center">
            <div className="flex flex-col">
                <h1 className="flex justify-start text-3xl font-bold ">Практическое задание</h1>
                <span className="text-2xl">Выведите на экран сообщение: «C# Programming!».</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <img className="" src="/fieldOfInput.jpg ">
                </img>
                <div className="flex flex-col gap-3">
                    <span className="flex text-2xl font-bold ">Действия</span>
                    <div className="flex flex-row gap-3">
                        <Button caption="проверить задание" onClick={() => { console.log("нажал") }} />
                        <Button caption="Посмотреть решение" onClick={() => { console.log("нажал") }} />
                    </div>

                </div>

            </div>

        </div>
    )
}