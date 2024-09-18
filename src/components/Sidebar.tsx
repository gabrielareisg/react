import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import coverImage from '../assets/cover-image.jpeg'

import {PencilLine } from 'phosphor-react';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className={styles.profile}>
            <Avatar src={coverImage}></Avatar>
            <strong>Gabriela Reis</strong>
            <span>Web FullStack Developer</span>
        </div>
        <footer>
            <a href='#'>
                <PencilLine size={20}></PencilLine>
                Editar seu perfil
            </a>
        </footer>

        </aside>
    )
}