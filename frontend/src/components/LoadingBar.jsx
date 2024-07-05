import "../Styles/LoadingBar.css"

export default function LoadingBar(){
    return (
        <div className="loader-container">
            <div className="bouncing-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}