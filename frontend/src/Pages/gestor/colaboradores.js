import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineDownload,AiFillEdit } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'
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
    "delete": "Delete",
    "historico": "Histórico"
  }
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [funcionarios, setFuncionarios] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8000/funcionario/");
      setFuncionarios(response.data);
    }
    fetchData();
  }, []);

  const content = funcionarios.map((funcionario) => {
    return {
      matricula: funcionario.matricula,
      name: funcionario.nome,
      email: funcionario.email_constitucional,
      major: funcionario.cargo,
      status: "Ativo"
    };
  });

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
                    <button className="edit"><AiFillEdit size={20}/></button>
                  ) : key === "delete" ? (
                    <button className="delete"><TiDelete size={20}/></button>
                  ) : key === "historico" ? (
                    <button className="historico"><AiOutlineDownload size={20}/></button>
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