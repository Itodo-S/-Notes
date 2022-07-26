import React, { useState } from "react";
import NoteCards from "../components/Cards/NoteCards";
import Description from "../components/HeroDescription/Description";
import AppBar from "../components/Navigation/AppBar";
import "./styles.css";

export interface Initials {
  notes: {
    id: number;
    category: string;
    details: string;
    img: string;
  }[];
}

const Home = () => {
  const [notes, setNotes] = useState<Initials["notes"]>([
    {
      id: 1,
      category: "Food",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, dolore consequatur maxime necessitatibus assumenda quisquam placeat delectus. Facere sapiente quia eum iure consequatur necessitatibus laboriosam aut officia. Esse, voluptatibus maiores!",
      img: "",
    },
    {
      id: 2,
      category: "Pets",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, dolore consequatur maxime necessitatibus assumenda quisquam placeat delectus. Facere sapiente quia eum iure consequatur necessitatibus laboriosam aut officia. Esse, voluptatibus maiores!",
      img: "",
    },
    {
      id: 3,
      category: "Food",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, dolore consequatur maxime necessitatibus assumenda quisquam placeat delectus. Facere sapiente quia eum iure consequatur necessitatibus laboriosam aut officia. Esse, voluptatibus maiores!",
      img: "",
    },
    {
      id: 4,
      category: "Pets",
      img: "",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, dolore consequatur maxime necessitatibus assumenda quisquam placeat delectus. Facere sapiente quia eum iure consequatur necessitatibus laboriosam aut officia. Esse, voluptatibus maiores!",
    },
    {
      id: 5,
      category: "Books",
      img: "",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, dolore consequatur maxime necessitatibus assumenda quisquam placeat delectus. Facere sapiente quia eum iure consequatur necessitatibus laboriosam aut officia. Esse, voluptatibus maiores!",
    },
    {
      id: 6,
      category: "Word",
      img: "",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, dolore consequatur maxime necessitatibus assumenda quisquam placeat delectus. Facere sapiente quia eum iure consequatur necessitatibus laboriosam aut officia. Esse, voluptatibus maiores!",
    },

    {
      id: 7,
      category: "Books",
      img: "",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, dolore consequatur maxime necessitatibus assumenda quisquam placeat delectus. Facere sapiente quia eum iure consequatur necessitatibus laboriosam aut officia. Esse, voluptatibus maiores!",
    },
    {
      id: 8,
      category: "Word",
      img: "",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, dolore consequatur maxime necessitatibus assumenda quisquam placeat delectus. Facere sapiente quia eum iure consequatur necessitatibus laboriosam aut officia. Esse, voluptatibus maiores!",
    },
  ]);
  return (
    <div>
      <div className="hero"></div>
      <AppBar />
      <Description />
      <div style={{}}>
        <NoteCards notes={notes} />
      </div>
    </div>
  );
};

export default Home;
