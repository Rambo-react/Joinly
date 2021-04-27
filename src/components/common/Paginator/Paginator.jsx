import React from 'react';
import s from './Paginator.module.css';

let Paginator = (totalUsersCount, pageSize, currentPage, onPageChanged) => {
    //расчет количества страниц и создание массива для этих номеров(math.ceil округление до целого числа в большую сторону)
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
                <div className={s.containerPages}>
                    {pages.map(p => {

                        return (<span className={currentPage === p && s.selectedPage}
                            onClick={(e) => { onPageChanged(p) }} >{p}</span>)
                    })}
                </div>
    )
}

export default Paginator;