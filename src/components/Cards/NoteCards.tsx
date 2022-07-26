import React from "react";
import "./styles.css";
import { Initials as InProps } from "../../pages/Home";
import { useNavigate } from "react-router-dom";

interface Token {
  notes: InProps["notes"];
}
const NoteCards: React.FC<InProps> = ({ notes }) => {
  const navigate = useNavigate();
  const Card = (): JSX.Element[] => {
    return notes.map((note) => {
      return (
        <div
          className="card"
          key={note.id}
          onClick={() => {
            navigate(`/notes/${note}`);
          }}
        >
          <div className="title">
            <p className="p-title">{note.category}</p>
            <div className="avatar">
              <p>R</p>
            </div>
          </div>

          <img
            src="https://media.istockphoto.com/photos/beautiful-suburban-home-exterior-on-bright-sunny-day-with-green-grass-picture-id1312027174?k=20&m=1312027174&s=612x612&w=0&h=qHJniTCQZ7u93mSQkjm9XArJNlwL9Wsb-1uMIRZr_sY="
            alt="img"
          />
          <div className="text">
            <p className="para">{note.details}</p>
          </div>
        </div>
      );
    });
  };

  return <div className="grid">{Card()}</div>;
};

export default NoteCards;
