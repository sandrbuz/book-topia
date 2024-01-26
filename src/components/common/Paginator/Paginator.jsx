import React from 'react';
import styles from './Paginator.module.css';



const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div className={styles.btnsWrapper}>
                {/* solution as in lesson 55 */}
                {/* {pages.map(p => <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage == p && styles.currPage} key={p}>{p}</span>)} */}
                {/* modified solution */}
                {pages.map(p => <span
                    onClick={() => { onPageChanged(p) }} className={`${styles.btnPaggination} ${currentPage == p ? styles.currPage : p > currentPage + 10 || p < currentPage - 15 ? styles.hide : styles.visible}`} key={p}>{p}</span>)}

                {currentPage < pages.length && <span>...</span>}
        </div>
    )
}

export default Paginator;