import { useState, useEffect } from "react";
import api from "../api";
export default function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    getNotes();
}, []);
  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((error) => alert(error));
  };
  const deleteNote = (id) => {
    api
        .delete(`/api/notes/delete/${id}/`)
        .then((res) => {
            if (res.status === 204) alert("Note deleted!");
            else alert("Failed to delete note.");
            getNotes();
        })
        .catch((error) => alert(error));
};
  return <div>Home</div>;
}
