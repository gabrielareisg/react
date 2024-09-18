import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gabrielareisg.png',
      name: 'Gabriela Reis',
      role: 'Educator @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-07-25 14:00:00'),
  },
];

//iteração - criar uma estrutura de repetição

export function App() {
	return (
    <div> 
      <Header/>
      
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>

        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author} 
              content={post.content} 
              publishedAt={post.publishedAt}
            />
          )
        })}

      </main>
      
      </div>
    </div>
  )
}


