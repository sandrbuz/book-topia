import React from 'react';
import styles from './Paginator.module.css';

const Item = ({p,currentPage}) => {
    return (
        <span className={`${styles.btnPaggination} ${currentPage == p && styles.currPage}`}>{p}</span>
    )
}



const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.btnsWrapper}>
            {pages.map(p => {
                if (p === 1 || p === pagesCount || p === currentPage || (p >= currentPage - 5 && p <= currentPage + 5)) {
                    return <span
                        onClick={() => { onPageChanged(p) }}  key={p}>
                        {(p === pagesCount && currentPage < pagesCount - 6) ?
                         <span> ... <Item p={p} currentPage={currentPage}/></span> : (p === 1 && currentPage > 7) ? 
                         <span><Item p={p} currentPage={currentPage}/> ... </span> : 
                         <Item p={p} currentPage={currentPage}/>}
                    </span>
                }
            })}
        </div>
    )
}

export default Paginator;


