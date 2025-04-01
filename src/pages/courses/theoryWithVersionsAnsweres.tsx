import { useState } from "react"
import Button from "../../components/button"
import Modal from "react-modal"
import { useMutation, useQuery } from "@tanstack/react-query"

type Question = {
    options: string[],
    number: number,
    questionText: string
}

type CheckAnswerResponse = {
    text: string,
    validAnswer: string,
    userAnswer: string,
    isAnswerCorrect: boolean,
    numberQuestion: number
}[]
export default function TheoryWithVerionsAnsweresPage() {
    const { isPending, data: questions } = useQuery<Question[]>({
        queryKey: ["questions"],
        queryFn: () =>
            fetch("http://localhost:5242/questions").then((res) => res.json()),
    })

    const [answers, setAnswers] = useState<{ questionNumber: number, answer: number }[]>([])
    const [response, setResponse] = useState<CheckAnswerResponse | null>(null)
    const mutation = useMutation<CheckAnswerResponse>({
        mutationFn: () =>
            fetch("http://localhost:5242/questions/checkAnswers", {
                method: "POST",
                body: JSON.stringify({ userAnswers: answers }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            ).then((res) => res.json()),
        onSuccess: (res) => {
            // Invalidate and refetch
            setResponse(res)


        },


    });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    if (isPending) {
        return (
            <div>Loading...</div>
        )
    }

    if (questions == null) {
        return (
            <div>Error</div>
        )
    }
    const currentQuestion = questions[currentQuestionIndex]
    const currentAnswer = answers.find(oldAnswer => oldAnswer.questionNumber == currentQuestion.number)
    return <>
        <div className="grid w-full h-[100vh] bg-slate-50 justify-center items-center">
            <div className="grid grid-rows-3">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-3xl">Тест на знания теоретического материала по с#</h1>
                    <div className="w-auto border-solid border-black border rounded-md p-1 self-start " >
                        Задания {currentQuestionIndex + 1}:{questions.length}
                    </div>
                </div>
                <QuestionView question={currentQuestion} answer={currentAnswer?.answer} onAnswerChanged={(newAnswer) => {
                    setAnswers((oldAnswers) => {
                        if (currentAnswer == null) {
                            const answer = {
                                questionNumber: currentQuestion.number,
                                answer: newAnswer
                            }
                            return [...oldAnswers, answer]
                        }
                        else {
                            currentAnswer.answer = newAnswer
                            return [...oldAnswers]
                        }
                    })
                }} />
            </div>
            <div className="grid columns-auto grid-flow-col gap-1">
                {currentQuestionIndex != 0 ? <Button caption="Предыдущий вопрос" onClick={() => { setCurrentQuestionIndex(currentIndex => currentIndex - 1); console.log("нажал") }} /> : null}
                {currentQuestionIndex + 1 < questions.length ? <Button caption="Следующий вопрос" onClick={() => { setCurrentQuestionIndex(currentIndex => currentIndex + 1); console.log("нажал") }} /> : null}
                {currentQuestionIndex + 1 == questions.length ? <Button caption="Проверить ответы" onClick={() => mutation.mutate()} /> : null}
            </div>
            <Modal className="" isOpen={response != null}>{response != null ? (<ResultWindow onclick={() => { setResponse(null) }} checkedAnswers={response} />) : (<div>
                Error
            </div>)}

            </Modal>
        </div>
    </>


}
function ResultWindow(props: {
    onclick: () => void, checkedAnswers: {
        text: string,
        validAnswer: string,
        userAnswer: string,
        isAnswerCorrect: boolean,
        numberQuestion: number
    }[]
}) {
    return (
        <div>
            <Button caption="закрыть" onClick={props.onclick} ></Button>
            <div className="flex flex-col items-center">
                <ul>
                    <h1 className="font-bold text-3xl">Вопросы и правильные ответы({props.checkedAnswers.filter(checkedAnswer => checkedAnswer.isAnswerCorrect).length}/{props.checkedAnswers.length})</h1>
                    {props.checkedAnswers.map(answer =>
                        <li >
                            <div className="flex flex-col">
                                <span className="text 2xl">{answer.numberQuestion}.{answer.text}</span>
                                <div className="flex flex-row gap-2">
                                    {answer.userAnswer == answer.validAnswer ? <span className="w-auto border-solid border-green-600 border rounded-md p-1 self-start " >{answer.userAnswer} </span> : <span className="w-auto border-solid border-red-600 border rounded-md p-1 self-start " >{answer.userAnswer}</span>}
                                    <span className="w-auto border-solid border-slate-50 border rounded-md p-1 self-start " >{answer.validAnswer}</span>
                                </div>

                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>

    )

}


function QuestionView(props: {
    question: Question, answer?: number, onAnswerChanged: (newAnswer: number) => void
}) {
    return (<><span className="text-2xl">{props.question.questionText}</span>

        <div className="grid grid-col-[1fr] justify-center gap-1 self-center" onChange={(e) => {
            props.onAnswerChanged(Number.parseInt(e.target.value))


        }}> {props.question.options.map((option, index) => (<button className={`rounded-lg p-1 hover:bg-blue-400 border-2 min-w-[300px] border-button-background ${props.answer == index + 1 ? "bg-button-background" : ""}`} key={`${index}-${option}`}
            onClick={() => props.onAnswerChanged(index + 1)}><span>{option}</span></button>))}
        </div></>
    )
}