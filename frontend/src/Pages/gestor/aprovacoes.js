import React from 'react'
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'
import HeaderGestor from '../../components/Header/Header_gestor';
import './style.css'

export const Aprovacoes = () => {

  const headers = {
    "nome": "Nome",
    "email": "E-mail",
    "major": "Cargo",
    "periodo": "Périodo solicitado",
    "tempo": "Tempo solicitado",
    "edit": "Aprovar",
    "delete": "Recusar",
    "comentario": "Adicionar comentário"
  }
  
  const content = [
    {
      "nome": "Alvaro Dantas Silva",
      "email": "lj@gmail.com",
      "major": "Comp. Science",
      "periodo": "20/03/2023-30/03/2023",
      "tempo": "10 dias"
    },
    {
      "nome": "Alvaro Dantas Silva",
      "email": "lj@gmail.com",
      "major": "Comp. Science",
      "periodo": "20/03/2023-30/03/2023",
      "tempo": "10 dias"
    },
    {
      "nome": "Alvaro Dantas Silva",
      "email": "lj@gmail.com",
      "major": "Comp. Science",
      "periodo": "20/03/2023-30/03/2023",
      "tempo": "10 dias"
    },
    {
      "nome": "Alvaro Dantas Silva",
      "email": "lj@gmail.com",
      "major": "Comp. Science",
      "periodo": "20/03/2023-30/03/2023",
      "tempo": "10 dias"
    },
    {
      "nome": "Alvaro Dantas Silva",
      "email": "lj@gmail.com",
      "major": "Comp. Science",
      "periodo": "20/03/2023-30/03/2023",
      "tempo": "10 dias"
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
      item.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.periodo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tempo.toLowerCase().includes(searchQuery.toLowerCase())
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
                    <button className="edit"><AiOutlineCheck size={20}/></button>
                  ) : key === "delete" ? (
                    <button className="delete"><TiDelete size={20}/></button>
                  ) : key === "comentario" ? (
                    <button className="historico"><BiCommentDetail size={20}/></button>
                  ): (
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