import "./styles.css";
import { useState } from "react";
import React from "react";

const booksDatabase = {
  NonFiction: [
    {
      name: "How To Avoid A Climate Disaster",
      rating: "4.5/5",
      description:
        "Book written by Bill Gates that provides practical advice and solutions for individuals and governments to take action and reduce their carbon footprint in order to prevent the worst effects of climate change."
    },
    {
      name: "The Secret",
      rating: "3.5/5",
      description:
        "Self-help book that promotes the idea that positive thinking can lead to manifestation of desired outcomes in a person's life."
    },
    {
      name: "Quiet",
      rating: "4/5",
      description:
        "Book written by Susan Cain that explores the concept of introversion and the ways in which it is often misunderstood and undervalued in modern society"
    }
  ],

  Fiction: [
    {
      name: "Twilight",
      rating: "5/5",
      description:
        "Young adult fantasy novel that follows the romantic relationship between a teenage girl and a vampire as they navigate the complexities of their differences and the dangers that threaten their love."
    },
    {
      name: "Chronicles Of Narnia",
      rating: "4.5/5",
      description:
        "A fantasy series that follows the adventures of children who are transported to the magical world of Narnia through a wardrobe and become embroiled in a struggle between good and evil."
    },
    {
      name: "Harry Potter And The Prisoner Of Azkaban",
      rating: "4/5",
      description:
        "Third book in the Harry Potter series, in which Harry returns to Hogwarts School of Witchcraft and Wizardry for his third year and learns that a dangerous prisoner named Sirius Black has escaped from the wizarding prison of Azkaban and is believed to be after him."
    }
  ],

  Business: [
    {
      name: "Zero To One",
      rating: "3.5/5",
      description:
        "Business and entrepreneurship book that explores the importance of creating and monopolizing new markets, rather than competing in existing ones, in order to achieve long-term success."
    },
    {
      name: "The Little Book That Beats The Market",
      rating: "5/5",
      description:
        "Personal finance book that outlines a systematic approach for selecting undervalued stocks, known as the magic formula, to achieve long-term investment success."
    },
    {
      name: "Poor Chalie's Almanack",
      rating: "5/5",
      description:
        "Compilation of the writings and lectures of Charles T. Munger, a successful investor and businessman, on a variety of topics including psychology, economics, and decision-making."
    }
  ]
};

const bookGenres = Object.keys(booksDatabase);

export default function App() {
  const [genreBooks, setGenreBooks] = useState("Fiction");

  function clickHandler(genre) {
    setGenreBooks(genre);
  }

  return (
    <div className="App">
      <h1>Book Recommendation</h1>
      <p style={{ color: "#393636" }}>
        Checkout my favourite books in each genre
      </p>

      <div>
        {bookGenres.map((genre) => {
          return (
            <button
              key={genre}
              onClick={() => clickHandler(genre)}
              style={{
                padding: "0.8rem 2.5rem",
                margin: "0.5rem",
                borderRadius: ".5rem",
                borderWidth: "0.05rem",
                cursor: "pointer",
                borderWidth: "0.008rem",
                fontSize: ".95rem",
                backgroundColor: "#eefee7",
                color: "#4d7c0f"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr
        style={{
          width: "65%",
          marginTop: "1.1rem",
          marginBottom: "1.4rem",
          color: "#f7fee7"
        }}
      />

      <div>
        <ul>
          {booksDatabase[genreBooks].map((book) => {
            return (
              <li
                style={{
                  border: ".9px solid #4d7c0f",
                  padding: "1.2rem 1rem .7rem 1.2rem",
                  width: "50%",
                  borderRadius: ".6rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  listStyle: "none",
                  marginBotton: "1rem",
                  marginTop: "1rem",
                  textAlign: "left",
                  fontSize: "1.2rem"
                }}
              >
                <div>{book.name}</div>
                <div
                  style={{
                    fontSize: ".8rem",
                    padding: "0.2rem",
                    color: "#4d7c0f"
                  }}
                >
                  {book.rating}
                </div>
                <div
                  style={{
                    fontSize: ".8rem",
                    paddingTop: "1rem",
                    textAlign: "justify",
                    color: "#706d6d",
                    paddingBottom: ".5rem"
                  }}
                >
                  {book.description}{" "}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
