import React from 'react'
import Layout from '../components/layout'
import TopicTag from '../components/topicTag'

import './pages.css'

const TalksPage = () => {
  const conferenceTalks = [
    {
      conference: 'ReactJS Girls',
      location: 'London, England',
      date: 'May 2019',
      topic: 'Design Systems',
    },
    {
      conference: 'GraphQL Day',
      location: 'Bodensee, Germany',
      date: 'September 2019',
      topic: 'Gatsby & GraphQL',
    },
    {
      conference: 'React Live',
      location: 'Amsterdam, Netherlands',
      date: 'September 2019',
      topic: 'Gatsby & GraphQL',
    },
    {
      conference: 'React Boston',
      location: 'Boston, USA',
      date: 'September 2019',
      topic: 'Design Systems',
    },
    {
      conference: 'RuhrJS',
      location: 'Bochum, Germany',
      date: 'October 2019',
      topic: 'Gatsby & GraphQL',
    },
    {
      conference: 'All Things Open Keynote',
      location: 'Raleigh, USA',
      date: 'October 2019',
      topic: 'Cross-Cultural Communication',
    },
    {
      conference: 'All Things Open',
      location: 'Raleigh, USA',
      date: 'October 2019',
      topic: 'Design Systems',
    },
    {
      conference: 'Script Conf',
      location: 'Linz, Austria',
      date: 'October 2019',
      topic: 'Design Systems',
    },
    {
      conference: 'Trondheim DC',
      location: 'Trondheim, Norway',
      date: 'October 2019',
      topic: 'Design Systems',
    },
    {
      conference: 'Reactiv Conf',
      location: 'Prague, Czech Republic',
      date: 'October 2019',
      topic: 'Design Systems',
    },
    {
      conference: 'Codemotion Berlin',
      location: 'Berlin, Germany',
      date: 'November 2019',
      topic: 'Design Systems',
    },
    {
      conference: 'Frontend Developer Love',
      location: 'Amsterdam, Netherlands',
      date: 'February 2010',
      topic: 'TBD',
    },
    {
      conference: 'React Finland',
      location: 'Helsinki, Finland',
      date: 'May 2020',
      topic: 'TBD',
    },
  ]

  return (
    <Layout>
      <h1 className="page__title">Talks</h1>
      <div className="page__content">
        <table>
          <tr>
            <th>Conference</th>
            <th>Location</th>
            <th>Date</th>
            <th>Topic</th>
          </tr>
          {conferenceTalks.map(talk => (
            <tr>
              <td>{talk.conference}</td>
              <td>{talk.location}</td>
              <td>{talk.date}</td>
              <td>
                <TopicTag topic={talk.topic} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  )
}

export default TalksPage
