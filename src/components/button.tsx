export default function Button(props: { caption: string, onClick: () => void }) {
    return (
        <button
            className="bg-button-background rounded-lg hover:bg-sky-500 p-2 text-white"
            onClick={props.onClick}
        >
            {props.caption}
        </button>)
}