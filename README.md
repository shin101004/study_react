# study_react

# 11.14
Repository 생성

# 11.15
1. Hook 이란?
React에서 class를 작성하지 않고도 state를 사용할 수 있게 해줍니다.

1-1)
useState(초기값);
형태 : const [count, setCount] = useState(0);

-> count라는 상태가 초기에 0으로 시작하고

-> count를 관리해주는 함수 setCount를 선언

비구조화 할당을 통해 count와 setCount를 사용할 수 있도록 선언

1-2)
useRef

1-3)
useEffect(()=>{
    
    - 마운트(요소 렌더링 시에)와 언마운트(요소 삭제 시에) 작업을 담당
    
    - 아래의 빈 배열([])은 deps라고 하며 배열 안에 선언된 prop가 바뀔 때 마다 호출
}, [])

1-4)
useMemo : 이전에 연산된 값을 재사용할 때 사용, 성능 최적화용
useMemo를 씌움으로써 컴포넌트 변경에 관한 제어 실시
값을 반환

1-5)
useCallback : 
함수를 반환
