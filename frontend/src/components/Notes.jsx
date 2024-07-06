import NoteCard from "./NoteCard";
import "../Styles/Notes.css"

export default function Notes(){
    return (
        <div className="notes">
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
        </div>
    )
}