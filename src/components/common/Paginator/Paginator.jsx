import React, { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = ({ currentPage, pageSize, onPageChanged, totaltemsCount, portionSize = 10 }) => {
    //расчет количества страниц и создание массива для этих номеров(math.ceil округление до целого числа в большую сторону)

    let pagesCount = Math.ceil(totaltemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        
        


            <div className={s.containerPages}>
                {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}> &lt; </button>}

                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return (<span className={`${s.pageNumber} ${currentPage === p && s.selectedPage}`}
                            onClick={(e) => { onPageChanged(p) }} key={p} >{p}</span>)
                    })}

                {portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionNumber + 1) }}> &gt; </button>}
            </div>

      
    )
}

export default Paginator;