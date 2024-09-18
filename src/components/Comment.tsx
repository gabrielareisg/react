import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import coverImage from '../assets/cover-image.jpeg'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentsProps {
    content: string,
    onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment }: CommentsProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar src={coverImage} hasBorder={false} alt=""></Avatar>            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='24 de julho às 19h35' dateTime='2024-07-24 07:35:15'>Cerca de 1h atrás</time>

                        </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}></Trash>
                    </button>

                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp></ThumbsUp>
                        Aplaudir <span>{likeCount}</span>
                    </button>                    
                </footer>
            </div>
        </div>
    )
}