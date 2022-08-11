import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom'

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addnote } = context;
    const navigate = useNavigate();
    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added New Note Successfully", "success");
        navigate('/home')
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3" style={{ width: '50vw' }}>
            <h2 className='text-center mb-5'>ADD A NEW NOTE</h2>
            <form className='container my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={3} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea rows="5" type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>

                <div className="d-grid mt-3">
                        <button type="submit" onClick={handleClick} disabled={note.title.length < 3 || note.description.length < 5} className="btn btn-primary d-inline">Add Note</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote
