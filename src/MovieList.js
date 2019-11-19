import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

function MovieList({ title, summary, image, year, genres }) {
    const Movielist = styled.div`
        margin: 8px;
        background-color: white;
        border-radius: 12px;
        height: 550px;
    `
    const Image = styled.img`
        border-radius: 12px;
    `

    const Moviedata = styled.div`
    `

    const Movietitle = styled.h3`
        font-size: 18px;
        margin: 7px 0px;
        display: flex;
        justify-content: center;
        padding: 0px 10px;
        word-break: break-all;
    `
    const Movieyear = styled.h5`
        color: grey;
        font-size: 8px;
        display: flex;
        justify-content: flex-end;
        padding-right: 9.7px;
    `

    const Moviegenres = styled.ul`
        color: grey;
        font-size: 12px;
        display: flex;
        justify-content: flex-end;
        padding-right: 9.7px;
        margin: 3px 0px;
    `

    const Genresli = styled.li`
        display: flex;
        padding-left: 5px;
    `

    const Moviesummary = styled.p`
        color: #455a64;
        margin-top: 7.5px;
        display: flex;
        justify-content: center;
        font-size: 16px;
        padding: 0 9.7px;
        word-break: break-all;
    `

    return (
        <Movielist>
            <Image src={image} alt={title} title={title} />
            <Moviedata>
                <Movietitle>{title}</Movietitle>
                <Movieyear>{year}</Movieyear>
                <Moviegenres>
                    {genres.map((genres, index) =>
                        <Genresli key={index}>{genres}</Genresli>)}
                </Moviegenres>
                <Moviesummary>{summary.slice(0, 160)}...</Moviesummary>
            </Moviedata>
        </Movielist>
    )
}

MovieList.propTypes = {
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    summary: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default MovieList;
