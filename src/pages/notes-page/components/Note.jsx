import Button from "../../../components/Button";

function Note({ note, onDelete }) {
  return (
    <div className="flex justify-between border-2 border-stone-500 rounded-md p-2 h-22">
      <div className="w-3/4">
        <div className="text-4xl font-bold overflow-hidden text-ellipsis">
          {note.name}
        </div>
        <div className="text-lg overflow-hidden text-ellipsis h-7">
          {note.body}
        </div>
      </div>
      <div className="flex gap-2 items-start text-nowrap">
        <Button path={`/notes/${note.id}`} value='View note'/>
        <Button value='Delete' onClick={() => onDelete(note.id)}/>
      </div>
    </div>
  );
}

export default Note;
