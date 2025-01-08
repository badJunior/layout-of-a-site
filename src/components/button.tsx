export default function Button(props: { caption: string, onClick: () => void }) {
    return (
        <button
            className="bg-sky-500 rounded-lg hover:bg-sky-600 p-1 "
            onClick={props.onClick}
        >
            {props.caption}
        </button>)
}