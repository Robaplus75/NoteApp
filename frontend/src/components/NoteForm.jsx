import "../Styles/NavigationBar.css"
import "../Styles/NoteForm.css"
export default function NoteForm({handleSubmit, Formtype}){
    const submit_click = (event)=>{
        event.preventDefault()
        const formData = new FormData(event.target);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        handleSubmit(data)
    }
    return (
        <div className="container">
        <div className="wrapper">
            <div className="title"><span>{Formtype} Note</span></div>
                <form onSubmit={submit_click}>
                    <div className="row">
                        <i className="fas fa-sticky-note"></i>
                        <input type="text" name="title" placeholder="Note Title" required />
                    </div>
                    <div className="textarea">
                        <textarea type="text" name="content" placeholder="Content" required></textarea>
                    </div>
                    <div className="row button">
                        <input type="submit" value="Add Note" />
                    </div>
                </form>
        </div>
        </div>
    );
}