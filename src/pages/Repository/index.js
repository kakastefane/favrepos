import React, { useState, useEffect } from 'react';
import { About, BackButton, Container, FilterNavigation, IssueAuthor, IssueLabels, IssuesList, IssueTitle, Loading, Owner, PagesNavigation, RepoInfos, Title, Topics, WithoutIssue } from './styles';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import api from '../../services/api';

export default function Repository({ match }) {

  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters] = useState([
    { state: 'all', label: 'All', active: true },
    { state: 'open', label: 'Open', active: false },
    { state: 'closed', label: 'Closed', active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {

    async function load() {
      const repoName = decodeURIComponent(match.params.repository);

      const [repositoryData, issuesData] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: filters.find(f => f.active).state,
            per_page: 5
          }
        }),
      ]);

      setRepository(repositoryData.data);
      setIssues(issuesData.data);
      setLoading(false);

    }
    load();

  }, [match.params.repository, filters]);

  useEffect(() => {

    async function loadIssues() {
      const repoName = decodeURIComponent(match.params.repository);
      const response = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters[filterIndex].state,
          page: page,
          per_page: 5,
        }
      });
      setIssues(response.data);
    }
    loadIssues();

  }, [match.params.repository, page, filterIndex, filters]);

  function handlePage(action) {
    setPage(action === 'prev' ? page - 1 : page + 1);
  };

  function handleFilter(index) {
    setFilterIndex(index);
  }

  if (loading) {
    return (
      <Container>
        <Loading>
          Loading, please wait.
        </Loading>
      </Container>
    )
  }

  return (
    <Container>

      <BackButton to="/">
        <FaArrowLeft />
      </BackButton>

      <RepoInfos>
        <Title>{repository.name}</Title>
        <Owner>
          by <img src={repository.owner.avatar_url} alt={repository.owner.login} /> {repository.owner.login}
        </Owner>
        <About>
          {repository.description}
        </About>
        <Topics>
          {repository.topics.map(topic => (
            <span key={topic}>{topic}</span>
          ))}
        </Topics>
      </RepoInfos>

      {issues.length > 0 ?
        <>
          <FilterNavigation active={filterIndex}>
            <h2>Issues</h2>
            <span>
              {filters.map((filter, index) => (
                <button type="button" key={index} onClick={() => handleFilter(index)}>
                  {filter.label}
                </button>
              ))}
            </span>
          </FilterNavigation>

          <IssuesList>
            {issues.map(issue => (
              <li key={issue.id}>
                <IssueAuthor>
                  <img src={issue.user.avatar_url} alt={issue.user.login} />
                  {issue.user.login}
                </IssueAuthor>
                <IssueTitle>
                  <a href={issue.html_url} target="_blank" rel="noreferrer">{issue.title}</a>
                </IssueTitle>
                <IssueLabels>
                  {issue.labels.map(label => (
                    <span key={label.id}>{label.name}</span>
                  ))}
                </IssueLabels>
              </li>
            ))}
          </IssuesList>

          <PagesNavigation>
            <button
              type="button"
              onClick={() => handlePage('prev')}
              disabled={page < 2}>
              <FaArrowLeft /> Previous
            </button>
            <button
              type="button"
              onClick={() => handlePage('next')}>
              Next <FaArrowRight />
            </button>
          </PagesNavigation>
        </> :
        <WithoutIssue>
          No issues found.
        </WithoutIssue>
      }
    </Container>
  )
}