import React from 'react'
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import HeaderGestor from '../../components/Header/Header_gestor';
import './style.css'

export const Colaboradores = () => {

  const headers = {
    "matricula": "Matrícula",
    "name": "Nome",
    "email": "E-mail",
    "major": "Cargo",
    "status": "Status",
    "edit": "edit",
    "delete": "Delete"
  }
  
  const content = [
    {
      "matricula": "112018495",
      "name": "Jaquel",
      "email": "lj@gmail.com",
      "major": "Comp. Science",
      "status": "Ativo"
    },
    {
      "matricula": "111694728",
      "name": "Joe",
      "email": "joe@gmail.com",
      "major": "Business",
      "status": "Férias"
    },
    {
      "matricula": "114729405",
      "name": "Clara",
      "email": "clara@gmail.com",
      "major": "Criminal Justice",
      "status": "Ativo"
    }
  ]

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredContent = content.filter((item) => {
    return (
      item.matricula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredContent.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredContent.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <>
      <HeaderGestor/>
      <div className="wrapper bg-gray-300">
        <div className="search-container">
          <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchInputChange} />
          <BiSearch className="search-icon" />
        </div>
        <table>
          <thead>
            <tr>
              {Object.values(headers).map((header) => (
                <th key={header} scope="col">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item) => (
              <tr key={item.matricula}>
              {Object.keys(headers).map((key) => (
                <td
                  key={key}
                  data-label={headers[key]}
                  className={
                    key === "status"
                      ? item.status === "Ativo"
                        ? "active-status"
                        : item.status === "Férias"
                        ? "vacation-status"
                        : ""
                      : ""
                  }
                >
                  {key === "edit" ? (
                    <button className="edit">Editar</button>
                  ) : key === "delete" ? (
                    <button className="delete">Deletar</button>
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (v, i) => i + 1).map((page) => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}