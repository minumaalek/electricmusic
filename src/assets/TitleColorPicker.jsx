

function TitleColorPicker({ onClick, color }) {
    return (
        <>
            <div
                onClick={() => onClick()}
                className={`bg-${color}-500 hover:bg-${color}-600 w-5 h-5`}
            ></div>
        </>
    )
}

export default TitleColorPicker