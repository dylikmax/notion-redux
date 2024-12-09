# Notion Redux
**Notion Redux** — a project, that provide an opportunity to create and manage notes for each registered user.
### Techs and libraries: 
`HTML` `Tailwind CSS` `JavaScript` `React` `React Router` `Redux` `React Redux` `Redux Thunk` `JSON Server` `Zod`
### Database & API
For storing users and notes in this project used JSON Server, that store data in `db.json`. API for this database was written automatically.

### Authorization
For comfortable work with API a special class was written. This class contains all methods thats we need in our app. By this methods we fetch data from server and then put it into redux store. We authorize user by its id by saving it into local storage and checking it on each user action.

### Working with notes
User can create, delete and edit his own notes. Each user can do actions with only its notes. All notes fetchs from server only one time and then its puts into redux store. If user changes its notes, app changes it on a client and sends changings to server without refetching all notes.

### UI
UI is very simple and has no overs. All styles was written on Tailwind CSS.
#### Authorization:
Login page
![Login page](https://i.imgur.com/LH4vJFd.png)

Registration page
![Registration page](https://i.imgur.com/PC0PID5.png)

---
#### Main page:
![Main page](https://i.imgur.com/24IM20Z.png)

---
#### Notes:
All notes
![All notes page](https://i.imgur.com/emv3ZEK.png)

Note
![Note page](https://i.imgur.com/gMHLTO2.png)

Editing note
![Editing note](https://i.imgur.com/mU6vmWv.png)

### For launching
Write `npx json-server db.json` & `npm run dev` into two terminals.
