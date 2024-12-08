import AddNoteWrapper from "./components/AddNote";
import VisibleTodoList from "./containers/VisibleNoteList";

function NotesPage() {
  return (
    <div className="flex w-3/4 flex-col gap-3 items-center">
      <AddNoteWrapper />
      <VisibleTodoList />
    </div>
  );
}

export default NotesPage;
