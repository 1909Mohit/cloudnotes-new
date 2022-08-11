import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-4'>
            <div className="card my-3" style={{ border: '3px solid #444444', borderRadius: '5px', boxShadow: '5px 4px 2px #555', background: '#FCE2DB'}}>
                <div className="card-body" >
                    <div className="d-flex">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="bi bi-pencil-square text-info mx-2" onClick={()=>{updateNote(note)}}></i>
                        <i className="bi bi-trash text-danger mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                    </div>

                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
