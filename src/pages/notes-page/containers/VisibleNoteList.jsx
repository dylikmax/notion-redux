import { connect } from "react-redux";
import NoteList from "../components/NoteList";
import {
  deleteNote,
  removeNote,
} from "../../../redux/notes/actions";

const mapStateToProps = (state) => ({
  notes: state.notes.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(removeNote(id));
      dispatch(deleteNote(id));
    },
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(NoteList);

export default VisibleTodoList;
