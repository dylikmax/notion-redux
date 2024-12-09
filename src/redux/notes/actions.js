import API from "../../data/api";

export const DELETE_NOTE = "DELETE_NOTE";
export const CREATE_NOTE = "CREATE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const NOTES_FETCH_START = "NOTES_FETCH_START";
export const NOTES_FETCH_SUCCESS = "NOTES_FETCH_SUCCESS";
export const NOTES_FETCH_FAIL = "NOTES_FETCH_FAIL";
export const NOTES_PATCH_START = "NOTES_PATCH_START";
export const NOTES_PATCH_SUCCESS = "NOTES_PATCH_SUCCESS";
export const NOTES_PATCH_FAIL = "NOTES_PATCH_FAIL";
export const NOTE_FETCH_START = "NOTE_FETCH_START";
export const NOTE_FETCH_SUCCESS = "NOTE_FETCH_SUCCESS";
export const NOTE_FETCH_FAIL = "NOTE_FETCH_FAIL";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

export const deleteNote = (id) => ({ type: DELETE_NOTE, id });
export const createNote = (note) => ({
  type: CREATE_NOTE,
  note,
});
export const editNote = (id, changes) => ({
  type: EDIT_NOTE,
  id,
  changes,
});

export const fetchNotes = (id) => async (dispatch) => {
  dispatch({ type: NOTES_FETCH_START });
  try {
    const notes = await API.getNotes(id);
    dispatch({ type: NOTES_FETCH_SUCCESS, payload: notes });
  } catch (error) {
    dispatch({ type: NOTES_FETCH_FAIL, payload: error });
  }
};

export const sendNote = (name, userId, time) => async (dispatch) => {
  dispatch({ type: NOTES_PATCH_START });
  try {
    await API.createNote(name, userId, time);
    dispatch({ type: NOTES_PATCH_SUCCESS });
  } catch (error) {
    dispatch({ type: NOTES_PATCH_FAIL, payload: error });
  }
};

export const patchNote = (id, body) => async (dispatch) => {
  dispatch({ type: NOTES_PATCH_START });
  try {
    await API.patchNote(id, body);
    dispatch({ type: NOTES_PATCH_SUCCESS });
  } catch (error) {
    dispatch({ type: NOTES_PATCH_FAIL, payload: error });
  }
};

export const removeNote = (id) => async (dispatch) => {
  dispatch({ type: NOTES_PATCH_START });
  try {
    await API.deleteNote(id);
    dispatch({ type: NOTES_PATCH_SUCCESS });
  } catch (error) {
    dispatch({ type: NOTES_PATCH_FAIL, payload: error });
  }
};

export const fetchNote = (id, userId) => async (dispatch) => {
  dispatch({ type: NOTE_FETCH_START });
  try {
    const note = await API.getNote(id, userId);
    dispatch({ type: NOTE_FETCH_SUCCESS, payload: note });
  } catch (error) {
    dispatch({ type: NOTE_FETCH_FAIL, payload: error });
  }
};
