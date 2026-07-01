import {Link} from "react-router-dom"
import './Sidebar.css'

function Sidebar(){
    return(
        <div className="sidebar_body">
            <div className="sidebar_title">
                <h2 >브레드 라운지</h2>
            </div>

            <nav>
                <ul>
                    <li><Link to='no'>공지사항</Link></li>
                    <li>
                        게시판
                        <ul>
                            <li><Link to="/">전체 게시판</Link></li>
                            <li><Link to='no'>자유의 마당</Link></li>
                            <li><Link to='no'>질문 있어요</Link></li>
                            <li><Link to='no'>레시피 공유</Link></li>
                        </ul>
                    </li>
                    <li><Link to='no'>즐겨찾기</Link></li>
                    <li><Link to='no'>내가 쓴 글</Link></li>
                    <li><Link to='no'>설정</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Sidebar