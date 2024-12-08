import Note from "./Note";

function NoteList({ notes, onDelete }) {
  return (
    <div className="w-3/4 flex flex-col gap-3 w-full">
      {notes.map((note, i) => (
        <Note key={i} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
