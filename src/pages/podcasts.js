import React from 'react'
import Layout from '../components/layout'

import './pages.css'

const PodcastsPage = () => {
  const guestPodcasts = [
    {
      podcast: 'The Changelog',
      link: 'https://changelog.com/podcast/342',
      episode: '',
      date: '',
    },
    {
      podcast: 'IT Career Energizer',
      link: 'https://itcareerenergizer.com/tag/emma-wedekind/',
      episode: '',
      date: '',
    },
    {
      podcast: 'Real Talk JavaScript',
      link: 'https://www.stitcher.com/podcast/realtalk-javascript/e/60354449',
      episode: '',
      date: '',
    },
    {
      podcast: 'React Podcast',
      link: 'https://reactpodcast.simplecast.fm/57',
      episode: '',
      date: '',
    },
    {
      podcast: 'Michael Jolley',
      link: 'https://www.youtube.com/watch?v=cK3Z7CASHl0&feature=youtu.be',
      episode: '',
      date: '',
    },
    {
      podcast: 'Devpath FM',
      link:
        'https://player.fm/series/devpathfm/ux-engineer-and-coding-coach-founder-emma-wedekind',
      episode: '',
      date: '',
    },
    {
      podcast: 'Chats With Kent Dodds',
      link:
        'https://kentcdodds.com/chats-with-kent-podcast/seasons/01/episodes/creating-successful-mentor-relationships-with-emma-wedekind',
      episode: '',
      date: '',
    },
    {
      podcast: 'Egghead Podcast',
      link:
        'https://egghead.io/podcasts/creating-authentic-content-and-developing-yourself-with-emma-wedekind',
      episode: 'Creating Authentic Content And Developing Yourself',
      date: '',
    },
    {
      podcast: 'How To Code Well',
      link: 'https://www.youtube.com/watch?v=j9oBzlfex6g&t=2217s',
      episode: '',
      date: '',
    },
    {
      podcast: 'High Performance Images With Gatsby',
      link: 'https://www.youtube.com/watch?v=JNHw1DMMQaM&t=867s',
      episode: '',
      date: '',
    },
    {
      podcast: 'Building A Gatsby Theme',
      link: 'https://www.youtube.com/watch?v=W2uTfay3doo&t=1262s',
      episode: '',
      date: '',
    },
  ]

  const fullTimePodcasts = [
    {
      podcast: 'Ladybug Podcast',
      link: '',
      episode: 'What The Heck Is GraphQL?',
      date: '',
    },
    {
      podcast: 'JS Party',
      link: '',
      episode: 'What The Heck Is GraphQL?',
      date: '',
    },
  ]

  return (
    <Layout>
      <h1 className="page__title">Podcasts</h1>
      <div className="page__content">
        <h2>Full-Time Podcasts</h2>
        <table>
          <tr>
            <th>Podcast</th>
            <th>Episode</th>
            <th>Date</th>
          </tr>
          <tbody>
            {fullTimePodcasts.map(podcast => (
              <tr key={podcast.link}>
                <td>
                  <a target="blank" href={podcast.link}>
                    {podcast.podcast}
                  </a>
                </td>
                <td>{podcast.episode}</td>
                <td>{podcast.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Guest Podcasts & Live Streams</h2>
        <table>
          <tr>
            <th>Podcast</th>
            <th>Episode</th>
            <th>Date</th>
          </tr>
          <tbody>
            {guestPodcasts.map(podcast => (
              <tr key={podcast.link}>
                <td>
                  <a target="blank" href={podcast.link}>
                    {podcast.podcast}
                  </a>
                </td>
                <td>{podcast.episode}</td>
                <td>{podcast.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default PodcastsPage
