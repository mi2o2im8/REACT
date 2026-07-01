import { useState } from "react"
import Movie from "./Movie"
import './MovieList.css'
import Pagination from "./Pagination"

function MovieList(props){ //속성으로 전달된 값을 파라미터로 받음.

    // 한페이지에 표시할 영화개수 지정값을 저장하는 state변수
    const [number, setNumber]= useState(12) //초기값 9개
    // 현재페이지 번호
    const [page, setPage]= useState(1) //페이지 초기값 1

    return(
        <div className="Container">
            <div className="title">
                <h3>MOVIE LIST</h3>
            </div>
            <div className="info">
                영화 개수 : {props.movies.length}
            </div>
            <div className="movies">
                {/* 영화 개수만큼 카드모양UI 로 영화정보(제목, 포스터, 개봉일, 평점)를 보여주기 */}
                {/* 현재 페이지가 1개면 */}
                {
                    props.movies.slice((page-1)*number, (page-1)*number + number).map(movie=> <Movie movie={movie} key={movie}></Movie>)
                }
            </div>
            <div className="pagination">
                {/* 별도의 컴포넌트로 Pagination UI 구현 */}
                <Pagination total={props.movie.length} page={page} number={number}></Pagination>
            </div>
        </div>
    )
}
export default MovieList