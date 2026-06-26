import { useState } from "react"

function MyComponent(){

    // 값이 변경되면 화면이 자동으로 갱신되는 아주 특별한 state 변수
    // Component 클래스를 상속하지 않았기에 this.state라는 멤버변수가 존재하지 않음.
    // 원래 함수형 컴포넌트는 간단하게 UI만 표시하는 목적이었음. 
    // 즉, Component의 유용한 능력은 아무것도 가지고 있지 않았음.
    // 리엑트의 버전이 갱신되면서.. 함수형컴포넌트에서도 클래스형 컴포넌트기능들을 사용할 수 있도록 개선되었음.
    // 이렇게 함수형에서 클래스형의 기능들을 사용할 수 있는 기법을 Hook 기술이라고 부르기로 했음.

    // 이 HOOK 중에서 가장 중요한 useState() 사용
    // message 라는 이름의 state 변수와 setState()용 함수를 만들어보기
    let [message, setMessage]= useState('this is state message') //()안에 초기값을 지정

    // let [n1, n2, n3] = # 배열 구조분해할당

    return(
        <div style={{border:'2px solid black', padding:8,margin:4}}>
            <h3>함수형 컴포넌트에서 state 사용해보기</h3>
            
            {/* state변수 만들어 출력해보기 */}
            <p> {message} </p>
            {/* 버튼 클릭하여 message 변수 변경(state변수이니 자동으로 화면 갱신) */}
            {/* 클릭되면 aaa라는 지역함수 호출[return 키워드 전에 함수가 있어야 함] */}
            <button onClick={aaa}>chang message</button>

        </div>
    )
}
export default MyComponent4