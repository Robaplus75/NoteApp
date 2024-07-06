import "../Styles/NavigationBar.css"
import "../Styles/NoteCard.css"
import { Link } from "react-router-dom";

export default function NoteCard(){
    return (
      <div className="note-card">
        <div className="note-header">
          <h2>Note Title</h2>
        </div>

        <div className="note-content">
          <p>This is a sample note. You can write anything you want here!</p>
        </div>

        <div className="note-footer">
          <Link to="/updatenote"><i className="fas fa-pen"></i></Link>

          <i  style={{marginLeft: 30 + 'px'}} className="fas fa-trash"></i>
        </div>
      </div>
    );
}