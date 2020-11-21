# Study_React

## 11.14 repositary 생성
리액트 공부 시작

## 11.18
NomadCoders - react - Movie Web Services
1) State를 다룰 때에는 class형의 Component를 작성할 것

###Screenshots
------------
![스크린샷 2020-11-21 오후 8 59 52](https://user-images.githubusercontent.com/61345090/99876792-8078ea80-2c3c-11eb-904f-1403619bbba5.png)

2) Component render 시에 React 내부 동작 순서
1. 컴포넌트 최초 생성 시에
    1. class 내 constructor을 통해 state 초기화
    2. componentWillMount API 실행
    3. Rendering
    4. componentDidMount는 렌더링 후에 실행되는 api
    
2. state 변경 시
    1. shouldComponentUpdate -> render -> componentWillUpdate -> componentDidUpdate
    
    
#####출처 : https://velopert.com/reactjs-tutorials

3. PropTypes 사용
* 타입 확인을 위해 오류처리 기능
* 사용시에 반드시 import PropTypes from "prop-types" 선언;

###Screenshot
----------
<img width="470" alt="스크린샷 2020-11-21 오후 9 05 47" src="https://user-images.githubusercontent.com/61345090/99876884-54119e00-2c3d-11eb-9109-0338690a1605.png">

