export default class API {
  static API_URL = "http://localhost:3000/";

  static getUser = async (id) => {
    return await this.fetch(`${this.API_URL}users/${id}`, {
      method: "GET",
    });
  };

  static login = async (email, password) => {
    const searchParams = new URLSearchParams({ email, password }).toString();
    const user = await this.fetch(`${this.API_URL}users?${searchParams}`, {
      method: "GET",
    });
    if (user.length === 0) {
      throw new Error("User dous no exist");
    }
    return user[0];
  };

  static register = async (email, password, time) => {
    const body = { email, password, time };
    return await this.fetch(`${this.API_URL}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  static isExsistUser = async (email) => {
    const searchParams = new URLSearchParams({ email }).toString();
    const user = await this.fetch(`${this.API_URL}users?${searchParams}`, {
      method: "GET",
    });
    return !!user.length;
  };

  static getNotes = async (userId) => {
    const searchParams = new URLSearchParams({ userId }).toString();
    return await this.fetch(`${this.API_URL}notes?${searchParams}`, {
      method: "GET",
    });
  };

  static getNote = async (id, userId) => {
    const searchParams = new URLSearchParams({ id, userId }).toString();
    const notes = await this.fetch(`${this.API_URL}notes?${searchParams}`, {
      method: "GET",
    });
    if (notes.length === 0) {
      throw new Error("Note doesn't exsist or you don't have access to it.");
    }
    return notes[0];
  };

  static createNote = async (name, userId, time) => {
    const body = { name, userId, id: time.toString(), body: "" };
    return await this.fetch(`${this.API_URL}notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  static patchNote = async (id, body) => {
    return await this.fetch(`${this.API_URL}notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  static deleteNote = async (id) => {
    return await this.fetch(`${this.API_URL}notes/${id}`, {
      method: "DELETE",
    });
  };

  static fetch = (path, options) => {
    return fetch(path, options).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  };
}
