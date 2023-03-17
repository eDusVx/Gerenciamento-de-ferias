import React from 'react'
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import Header from '../../components/Header/Header';
import './style.css'

export const IndexColaborador = () => {

  const headers = {
    "data": "Data da solicitção",
    "periodo": "Período",
    "dias": "Número de dias",
    "status": "Status",
    "detalhes": "ver detalhes",
  }
  
  const content = [
    {
      "data": "16/03/2023",
      "periodo": "20/03/2023-30/03/2023",
      "dias": "10",
      "status": "Aprovado"
    },
    {
      "data": "01/03/2023",
      "periodo": "20/03/2023-10/04/2023",
      "dias": "20",
      "status": "Recusado"
    },
    {
      "data": "01/02/2023",
      "periodo": "01/01/2023-11/01/2023",
      "dias": "10",
      "status": "Aprovado"
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
      item.data.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.periodo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.dias.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
      <Header/>
      <div className="hidden md:block bg-gray-300 absolute top-[170px] w-header right-[0px] h-[170px] z-[-1]">
        <p className="text-xl text-center font-medium text-black mt-[10px] ml-auto">Suas Informações</p>
        {/* Informações do usuário */}
      </div>
      <div className="wrapper mt-[210px] bg-gray-300">
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
                      ? item.status === "Aprovado"
                        ? "active-status"
                        : item.status === "Recusado"
                        ? "vacation-status"
                        : ""
                      : ""
                  }
                >
                  {key === "detalhes" ? (
                    <button className="detalhes">Ver detalhes</button>
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