import React from 'react'
import { useState } from 'react';
import HeaderGestor from '../../components/Header/Header_gestor';
import './style.css'

export const Colabroadores = () => {

  const [filmes, setFilmes] = useState([
    { rank: 1, title: "The Shawshank Redemption", genre: "Drama", year: 1994, director: "Frank Darabont" },
    { rank: 2, title: "The Godfather", genre: "Crime, Drama", year: 1972, director: "Francis Ford Coppola" },
    { rank: 3, title: "The Dark Knight", genre: "Action, Crime, Drama, Thriller", year: 2008, director: "Christopher Nolan" },
    { rank: 4, title: "The Godfather: Part II", genre: "Crime, Drama", year: 1974, director: "Francis Ford Coppola" },
    { rank: 5, title: "12 Angry Men", genre: "Crime, Drama", year: 1957, director: "Sidney Lumet" }
  ]);

  const [busca, setBusca] = useState("");

  const handleChange = (e) => {
    setBusca(e.target.value);
  }

  const filmesFiltrados = filmes.filter((filme) => {
    return filme.title.toLowerCase().includes(busca.toLowerCase());
  });

  return (
    <>
      <HeaderGestor/>
      <table className="table responsive wrapper bg-gray-300">
        <div className="flex items-center">
          <label htmlFor="busca" className="mr-2">Pesquisar:</label>
          <input type="text" id="busca" value={busca} onChange={handleChange} className="border rounded px-2 py-1" />
        </div>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Title</td>
            <td>Genre</td>
            <td>Year</td>
            <td>Director</td>
          </tr>
        </thead>
        <tbody>
          {filmesFiltrados.map((filme) => (
            <tr key={filme.rank}>
              <td data-label="Rank">{filme.rank}.</td>
              <td data-label="Title">{filme.title}</td>
              <td data-label="Genre">{filme.genre}</td>
              <td data-label="Year">{filme.year}</td>
              <td data-label="Director">{filme.director}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
