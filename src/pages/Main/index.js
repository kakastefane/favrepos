import React, { useState, useCallback, useEffect } from 'react';

import { format, parseISO } from 'date-fns';

import { FaPlus, FaSpinner, FaStar, FaEye, FaTrash } from 'react-icons/fa';
import { Container, Form, ButtonSubmit, List, RepoAuthor, RepoHeader, ListItem, RepoStars, RepoDescription, RepoFooter, Buttons, DeleteButton, LastUpdate } from './styles'

import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //get repos in localstorage
  useEffect(() => {
    const repoStorage = localStorage.getItem('repos');
    if (repoStorage) {
      setRepositories(JSON.parse(repoStorage));
    }
  }, []);

  //save repos in localstorage
  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositories));
  }, [repositories]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    async function submit() {
      setLoading(true);
      setAlert(null);

      try {
        if (newRepo === '') {
          throw new Error('You need indicate a repository name!');
        }

        const response = await api.get(`repos/${newRepo}`);

        const hasRepo = repositories.find(repo => repo.fullName === newRepo);
        if (hasRepo) {
          throw new Error('This repository already exists!');
        }

        const data = {
          id: response.data.id,
          name: response.data.name,
          fullName: response.data.full_name,
          description: response.data.description,
          lastUpdate: format(parseISO(response.data.updated_at), 'PPpp'),
          stars: response.data.stargazers_count,
          owner: {
            avatar: response.data.owner.avatar_url,
            login: response.data.owner.login
          }
        }

        setRepositories([...repositories, data]);
        setNewRepo('');
      } catch (error) {
        setAlert(true);
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    submit();
  }, [newRepo, repositories]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setAlert(null);
  }

  const handleDeleteRepo = useCallback((repo) => {
    const find = repositories.filter(r => r.id !== repo);
    setRepositories(find);
  }, [repositories]);

  return (
    <Container>
      <Form onSubmit={handleSubmit} error={alert}>

        <input
          type="text"
          placeholder='Repository name'
          value={newRepo}
          onChange={handleInputChange}
        />

        <ButtonSubmit loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner size={16} />
          ) : (
            <FaPlus size={16} />
          )}
        </ButtonSubmit>
      </Form>

      <List>
        {repositories.map(repo => (
          <ListItem key={repo.id}>
            <RepoHeader>
              <RepoAuthor>
                <img src={repo.owner.avatar} alt={repo.owner.login} />
                {repo.owner.login}
                <h1>/{repo.name}</h1>
              </RepoAuthor>
              <RepoStars>
                <FaStar />
                {repo.stars}
              </RepoStars>
            </RepoHeader>
            <RepoDescription>
              {repo.description}
            </RepoDescription>
            <RepoFooter>
              <LastUpdate>
                Last update at {repo.lastUpdate}
              </LastUpdate>
              <Buttons>
                <DeleteButton onClick={() => handleDeleteRepo(repo.id)}>
                  <FaTrash />
                </DeleteButton>
                <Link to={`/repository/${encodeURIComponent(repo.fullName)}`}>
                  <FaEye />
                </Link>
              </Buttons>
            </RepoFooter>
          </ListItem>
        ))}
      </List>

    </Container>
  )
}