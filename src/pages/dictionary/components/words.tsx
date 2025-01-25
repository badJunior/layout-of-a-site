const columns: { header: string, rows: string[] }[] = [{ header: "Общие сведения", rows: ["Аксессоры «get» и «set»", "Комментарии", "Конструктор"] },
{ header: "A", rows: ["abstract", "ArrayList"] },
{ header: "B", rows: ["break"] },
{ header: "C", rows: ["Casting (Приведение типов)", "class", "Console.Read", "Console.Write", "const", "continue", "Convert"] },
{ header: "D", rows: ["DateTime", "delegate", "Dictionary", "do while", "dynamic"] }
]

export default function Words() {
    return (
        <div className="grid  w-auto h-[100vh] bg-slate-50  items-center  " >
            <div className="flex flex-row w-auto justify-around  ">
                {columns.map((column) => (<Column key={column.header} {...column} />))}
            </div>
        </div>
    )
}
function Column(props: { header: string, rows: string[] }) {
    return (
        <section className="flex flex-col  text-3xl">
            <h1 className="font-bold">{props.header}</h1>
            <ul>

                {props.rows.map((row) => (<li key={row} className="hover:underline cursor-pointer">{row}</li>))}
            </ul>
        </section>

    )
}