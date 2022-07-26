import React from "react";
import AppBar from "../components/Navigation/AppBar";
import NoteSingle from "../components/NoteSingle/NoteSingle";
import { Initials as InProps } from "../pages/Home";

export const Notes = ({}) => {
  return (
    <div>
      <AppBar />
      <NoteSingle note={note} />
    </div>
  );
};
