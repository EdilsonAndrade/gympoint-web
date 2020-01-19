import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import history from '../../services/history';
import Button from '../../components/Button';
import Grid from '../../components/Grid';
import ButtonDiv from './styles';
import api from '~/services/api';
import { saveSuccess } from '~/store/modules/student/actions';
import Pagination from '~/components/Pagination';

export default function Student() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [students, setStudents] = useState([]);
  const [previousPage, setPreviousPage] = useState(0);
  const [nextPage, setNextPage] = useState(2);
  const [page, setPage] = useState(1);
  const [studentsCount, setStudentsCount] = useState(0);
  const totalPages = 2;
  const handleCadastrar = () => {
    dispatch(saveSuccess(''));
    history.push('/student/studentform');
  };

  async function handleSearchStudent(e) {
    const response = await api.get(
      `/students?limit=${totalPages}&page=${page}&name=${e}`
    );
    const { data } = response;
    console.tron.warn(data.rows);
    setStudentsCount(data.count);
    setStudents(data.rows);
  }

  const handleEditar = student => {
    dispatch(saveSuccess(student));
    history.push({ pathname: '/student/studentform', state: student });
  };

  const handlePreviousPage = () => {
    setPreviousPage(previousPage - 1);
    setPage(page - 1);
  };
  const handleNextPage = () => {
    setNextPage(nextPage + 1);
    setPage(page + 1);
  };
  async function handleDelete(id) {
    if (window.confirm('Tem certeza que quer excluir este registro?')) {
      try {
        const response = await api.delete(`/students/${id}`);
        setStudents(response.data.rows);
        setStudentsCount(response.data.count);
        setPage(1);
      } catch (error) {
        toast.error(`Ocorreu um erro : ${error}`);
      }
    }
  }

  useEffect(() => {
    async function getStudents() {
      const response = await api.get(`/students?limit=2&page=${page}`);
      setStudentsCount(response.data.count);
      const { data } = response;
      setStudents(data.rows);
      if (response.data.length <= 0) {
        setPage(page - 1);
      }
    }
    getStudents();
  }, [dispatch, page]);

  return (
    <>
      <div>
        <strong>Gerenciar alunos</strong>
        <ButtonDiv>
          <Button
            buttonType="button"
            saveButton
            icon="add"
            handleClick={handleCadastrar}
          >
            Cadastrar
          </Button>
          <input
            type="text"
            value={searchValue}
            placeholder="Buscar aluno"
            onChange={e => {
              setSearchValue(e.target.value);
              handleSearchStudent(e.target.value);
            }}
          />
        </ButtonDiv>
      </div>
      <Grid>
        <thead>
          <tr>
            <th>NOME</th>
            <th>EMAIL</th>
            <th style={{ textAlign: 'center' }}>IDADE</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td style={{ textAlign: 'center' }}>{student.age}</td>
              <td>
                <button
                  type="button"
                  id="edit"
                  onClick={() => handleEditar(student)}
                >
                  editar
                </button>
              </td>
              <td>
                <button
                  type="button"
                  id="delete"
                  onClick={() => handleDelete(student.id)}
                >
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Grid>
      <Pagination
        handleBackPage={() => handlePreviousPage(previousPage)}
        showBack={page > 1}
        showForward={studentsCount / totalPages > page}
        handleForwardPage={() => handleNextPage(nextPage)}
      />
    </>
  );
}
