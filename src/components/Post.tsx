import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format } from 'date-fns';
// import ptBR from 'date-fns/locale/pt-BR';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

/*Estado = variáveis que eu quero que o componente monitore, para quando houver mudanças, o react mostre essas mudanças*/

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}


export function Post ({ author, publishedAt, content }: PostProps){
    const [comments, setComments] = useState(['Post muito bacana, hein?!'])

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        // const newCommentText = event.target.comment.value;
        
        //imutabilidade
        //... spread operator: copia os valores que já existem na variável de comentários
        setComments([...comments, newCommentText])
        setNewCommentText('');
                
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string){
        //imutabilidade: as variáveis não sofrem mutação, nunca alteramos uma variável na memória 
        //nós criamos um novo espaço na memória
        
        //lista de comentários sem o que eu deletei
        const commentsWithoutDeletedOne = comments.filter(comment => {//filter percorre cada comentario, se retornar false, remove da lista
            return comment !== commentToDelete;
        }) //nova lista sem o comentário que foi deletado

        setComments(commentsWithoutDeletedOne);// criando um novo valor pra variável comentários
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}></Avatar>                         
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment' 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>                
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}></Comment>
                })}

            </div>

        </article>
    )
}