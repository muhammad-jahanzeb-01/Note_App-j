import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import '../styling/add.css'
import { TbPinned } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { TbPinnedOff } from "react-icons/tb";
import { AiFillEdit } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
const AddNote = () => {

  const Tasks = []
  console.log("onTop", Tasks)
  const [input, setInput] = useState('');
  const [textArea, setTextArea] = useState('')

  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
 

  const openAddNote = () => {
    document.getElementsByClassName('container')[0].style.display = 'block';
  }

  const addNote = () => {
    setNotes([...notes, { title: input, content: textArea }]);
    setInput('');     
    setTextArea('');   
  };

  const removeNote = () => {
    console.log("clicked Cross")
  const  crossBtn = document.getElementsByClassName("remove");
    crossBtn[0].addEventListener("click", () => {
      
    })
  }

  
  return (

    <>

      <div className="addBtn" onClick={() => { openAddNote(); }}>
        <button>
          <FaPlus />
        </button>
      </div>

      <div className="container">
        <span className="close-button" >
          &times;
        </span>
        <h1>Add Note</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label htmlFor="note-title">Title:</label>
              <input
                type="text"
                id="note-title"
                name="note-title"
                placeholder='Title'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="note-category">Category:</label>
              <select
                id="note-category"
                name="note-category"
              >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <label htmlFor="note-content">Content:</label>
          <textarea
            id="note-content"
            rows="4"
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
            placeholder='Enter note content...'
            required
          ></textarea>
        </form>
        <button
          onClick={() => {
          addNote();
            document.getElementsByClassName("container")[0].style.display = "none";
          }}
          type="submit">Save Note</button>
      </div>


    
      <section className='mainContent'>
        <div className='pinned'>
          <p className='title'>
            <span>Title</span>
            <span><BsThreeDots /></span></p>
          <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium esse accusantium.</p>
          <p className='foot'><span>Fri, Dec 2024</span><span><TbPinned /></span></p>
        </div>

    

    
        <div className="noteBoxes">
         {
            notes.map((note, index) => (
              <div className="box" key={index}>
                <p className="title">
                  <span>{note.title}</span>
                  <span style={{fontSize:"10px"}}
                 className='remove'
                onClick={removeNote}
                  ><ImCross /></span>
                </p>
                <p className='content'>{note.content}</p>
                <p>
                  <span className='edit'><AiFillEdit /></span>
                </p>
              </div>
            ))
          
         }
          { console.log("bottom", Tasks)}

        </div>
      </section>
    </>
  );
};

export default AddNote;
