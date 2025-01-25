import { useState } from "react"
import Button from "../../components/button"


export default function TheoryWithVerionsAnsweresPage() {
    const [questions, setQuestions] = useState<{ text: string, variants: string[], answer?: number }[]>([
        { text: "Какой цикл  используется для многократного повторения одной и той же операции?", variants: ["For", "While", "List"] },
        { text: "bfshdfsdf", variants: ["jkhkhjh", "fytfytfty", "guyttyfy"] }
    ])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const currentQuestion = questions[currentQuestionIndex]
    return (
        <div className="grid w-full h-[100vh] bg-slate-50 justify-center items-center">
            <div className="grid grid-rows-3">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-3xl">Тест на знания теоретического материала по с#</h1>
                    <div className="w-auto border-solid border-black border rounded-md p-1 self-start " >
                        Задания {currentQuestionIndex + 1}:{questions.length}
                    </div>
                </div>
                <span className="text-2xl">{currentQuestion.text}</span>

                <div className="grid grid-cols-[auto,1fr] justify-center gap-1 self-center" onChange={(e) => {
                    setQuestions((oldQuestions) => {
                        oldQuestions[currentQuestionIndex].answer = Number.parseInt(e.target.value)
                        return [...oldQuestions]
                    })
                }}>
                    <input name="answer" type="radio" value={1} checked={currentQuestion.answer == 1} />
                    <span>{currentQuestion.variants[0]}</span>
                    <input name="answer" type="radio" value={2} checked={currentQuestion.answer == 2} />
                    <span>{currentQuestion.variants[1]}</span>
                    <input name="answer" type="radio" value={3} checked={currentQuestion.answer == 3} />
                    <span>{currentQuestion.variants[2]}</span>
                </div>
            </div>
            {currentQuestionIndex + 1 < questions.length ? <Button caption="Следующий вопрос" onClick={() => { setCurrentQuestionIndex(currentIndex => currentIndex + 1); console.log("нажал") }} /> : null}
        </div>
    )
}