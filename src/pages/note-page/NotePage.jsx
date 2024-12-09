import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  deleteNote,
  editNote,
  fetchNote,
  patchNote,
  removeNote,
} from "../../redux/notes/actions";
import { inputStyle } from "../../styles/tailwind.styles";
import Button from "../../components/Button";

function NotePage() {
  const [inputNote, setInputNote] = useState({
    name: "",
    body: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();
  const userId = useSelector((state) => state.user.data.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNote(id, userId));
  }, [id, userId]);

  const note = useSelector((state) => state.notes.currentData);

  useEffect(() => {
    setInputNote({ name: note.name, body: note.body });
  }, [note]);

  useEffect(() => {
    setIsEditing(inputNote.body !== note.body || inputNote.name !== note.name);
  }, [inputNote.body, inputNote.name]);

  const createdDate = new Date(+note.id);

  const onChange = (e) => {
    setInputNote({ ...inputNote, [e.target.name]: e.target.value });
  };

  const onApply = (e) => {
    dispatch(patchNote(id, inputNote));
    dispatch(editNote(id, inputNote));
  };

  const onCancel = (e) => {
    setInputNote({ name: note.name, body: note.body });
  };

  const onDelete = (e) => {
    dispatch(removeNote(note.id));
    dispatch(deleteNote(note.id));
  };

  return (
    <div className="flex flex-col gap-3 w-3/4">
      <div className="flex flex-col gap-5 h-auto break-words border-2 rounded-md w-full border-stone-500 p-2">
        <div className="flex justify-between">
          <input
            type="text"
            name="name"
            className={`${inputStyle}" w-4/5 font-bold text-4xl rounded-lg h-16`}
            onChange={onChange}
            value={inputNote.name}
          />
          <div>
            {createdDate.toLocaleDateString()} in{" "}
            {createdDate.toLocaleTimeString()}
          </div>
        </div>
        <textarea
          name="body"
          onChange={onChange}
          value={inputNote.body}
          className="w-full resize-none overflow-hidden border-2 border-stone-500 rounded-md"
          rows="15"
        />
      </div>
      {isEditing ? (
        <div className="flex gap-3">
          <Button value="Cancel changes" onClick={onCancel} path="" />
          <Button value="Apply changes" onClick={onApply} path="/notes/" />
        </div>
      ) : (
        <div className="flex gap-3">
          <Button value="Delete" onClick={onDelete} path="/notes/" />
          <Button value="To all notes" path="/notes/" />
        </div>
      )}
    </div>
  );
}

export default NotePage;
