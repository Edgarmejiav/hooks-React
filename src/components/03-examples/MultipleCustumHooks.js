import React from 'react'
import {useCounter} from '../../hooks/useCounter'
import {UseFetch} from '../../hooks/UseFetch'
import '../02.useEffect/effects.css'

export const MultipleCustumHooks = () => {

    const {counter, incremet} = useCounter(1);
    console.log()
    const {loading, data} = UseFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>
                BreakinggDad Quoataes</h1>
            {
                loading
                    ? (

                        <div className="alert alert-info text-center">
                            Loading.....
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">
                                {quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }
            <button className="btn btn-primary" onClick={incremet}>
                Siguiente Quote</button>
        </div>
    )
}
