import { useEffect, useState } from "react";
import "../Styles/NavigationBar.css"
import "../Styles/NoteForm.css"
export default function NoteForm({handleSubmit, Formtype, values}){
    const [formData, setFormData] = useState({ id: '', title: '', content: '' });

    useEffect(() => {
        if (values) {
        setFormData(values);
        }
    }, [values]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

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
                <input
                  type="text"
                  name="title"
                  placeholder="Note Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="textarea">
                <textarea
                  type="text"
                  name="content"
                  placeholder="Content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="row button">
                <input type="submit" value={`${Formtype} Note`} />
              </div>
            </form>
          </div>
        </div>
      );
}