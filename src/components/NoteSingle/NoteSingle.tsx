import React, { useState } from "react";
export interface Initials {
  note: {
    category: string;
    id: number;
    img: string;
  }[];
}
const NoteSingle: React.FC<Initials> = ({ note }) => {
  const [notes, setNotes] = useState<Initials["note"]>([note]);
  const Items = (): JSX.Element[] => {
    return notes.map((note) => {
      return (
        <div className="item">
          <img src={note.img} alt="images" />
          <p className="title">{note.category}</p>
          <p className="id">{note.id}</p>
        </div>
      );
    });
  };
  return <div>{Items()}</div>;
};

export default NoteSingle;
