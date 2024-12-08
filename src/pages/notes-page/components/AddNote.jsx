import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { buttonStyle, inputStyle } from "../../../styles/tailwind.styles";
import { createNote, sendNote } from "../../../redux/notes/actions";

const AddNote = ({ dispatch }) => {
  const [name, setName] = useState("");
  const userId = useSelector((state) => state.user.data.id);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAddNote = (e) => {
    if (!name.trim()) {
      return;
    }
    const time = Date.now();

    dispatch(sendNote(name, userId, time));
    dispatch(
      createNote({
        name: name.trim(),
        body: "",
        id: time.toString(),
        userId,
      })
    );
    setName("");
  };

  return (
    <div className="flex gap-5 w-full items-start">
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className={inputStyle}
      />
      <input
        type="button"
        value="Add note"
        className={buttonStyle}
        onClick={handleAddNote}
      />
    </div>
  );
};
const AddNoteWrapper = connect()(AddNote);

export default AddNoteWrapper;
