import {
  CREATE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  NOTES_FETCH_START,
  NOTES_FETCH_SUCCESS,
  NOTES_FETCH_FAIL,
  NOTES_PATCH_START,
  NOTES_PATCH_SUCCESS,
  NOTES_PATCH_FAIL,
  NOTE_FETCH_START,
  NOTE_FETCH_SUCCESS,
  NOTE_FETCH_FAIL,
  REMOVE_ERRORS,
} from "./actions";

const DEFAULT_STATE = {
  loading: false,
  error: null,
  data: [],
  currentData: {},
};

export default function notesReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_NOTE: {
      const { name, body, id, userId } = action.note;
      return Object.assign({}, state, {
        data: [...state.data, { name, body, id, userId }],
      });
    }
    case DELETE_NOTE: {
      return Object.assign({}, state, {
        data: state.data.filter((note) => note.id !== action.id),
      });
    }
    case EDIT_NOTE: {
      const id = action.id;
      const { name, body } = action.changes;
      return Object.assign({}, state, {
        data: state.data.map((note) => {
          if (note.id === id) {
            return Object.assign({}, note, { name, body });
          }
          return note;
        }),
      });
    }
    case NOTES_FETCH_START: {
      return { ...state, loading: true };
    }
    case NOTES_FETCH_SUCCESS: {
      const { payload } = action;
      return { ...state, loading: false, error: null, data: payload };
    }
    case NOTES_FETCH_FAIL: {
      const { payload } = action;
      return { ...state, loading: false, error: payload };
    }
    case NOTES_PATCH_START: {
      return { ...state, loading: true };
    }
    case NOTES_PATCH_SUCCESS: {
      return { ...state, loading: false, error: null };
    }
    case NOTES_PATCH_FAIL: {
      const { payload } = action;
      return { ...state, loading: false, error: payload };
    }
    case NOTE_FETCH_START: {
      return { ...state, loading: true };
    }
    case NOTE_FETCH_SUCCESS: {
      const { payload } = action;
      return { ...state, loading: false, error: null, currentData: payload };
    }
    case NOTE_FETCH_FAIL: {
      const { payload } = action;
      return { ...state, loading: false, error: payload };
    }
    case REMOVE_ERRORS: {
      return {...state, error: null}
    }
    default:
      return state;
  }
}
