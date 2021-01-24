# Movie App 2021

React Js Fundamentals Course (2021 Update Boom!!)
# 단축키
// 한줄복사 : shift + alt + ↓
// 멀티 커서 에디팅 : Ctrl + Alt + 방향키

# 문법
// add = () => {};   : es6 문법! 람다식과 비슷하게 생겼다.
// add = () => {};   => Javascript 형태로 바꾼다면 function add(){} 같은 형태임!
// JavaScript에서는 다른 onClick이나 eventListener를 등록해야 하지만 React에서는 자동적으로 button 태그에 onclick을 가지고 있다.
// onClick={this.add}   => 클릭했을 때 함수 실행
// onClick={this.add()} => 페이지 로드 될때 함수 실행

# 필기
# Day 1
// 1. Component

// Component : HTML을 반환하는 함수!  , 형태가 정해져 있다.
// <Kimchi/> : Kimchi.js 안에 있는 function을 Retrun한 결과
// 자식 Component로 정보를 보내는 방법 : Props
// map : array 내에 item에 함수를 전달! 하는 메소드

# Day2
// 2. React.Component 

// React.Component : Java 에서 인터페이스와 같은 역할! 많은 메소드 들이 React.Component에 구현되어 있고 이를 extends 받은 자식 클래스에서 이를 가져다가 사용!
//                 : React.Component는 function이 아니기 때문에 return이 없다! 대신 render라는 것이 있음!(render는 React.Component에서 사용하는 유일한 Function이다!)
// React는 자동적으로 모든 Class Component의 render Method를 실행하고자 한다.

// 2-1. state

// Function Component 대신 Class Component를 사용하는 이유 : Class Component에는 state가 있기 때문이다!
// state : state는 Object! , Component에 data를 넣을 공간이 있고 데이터는 동적이다! , state에는 바뀌는 혹은 바꾸고 싶은 data를 집어넣는다!
//       : state는 Component의 data를 바꾸고 싶을때 사용한다! class내에서 => {this.state.??}
// ★★★state를 사용할 때는 setState( ) 를 사용한다!★★★
// ★★★setState를 호출하면 react는 state를 refresh하고 render Function을 호출한다.★★★
// 반대로 말하면 setState를 사용하지 않으면 새 state와 함께 render Function이 호출되지 않을 것이다!

// 2-2. Life Cycle Method

// Life Cycle Method : react가 Component를 생성하고 없애는 과정에서 실행되는 Method
//                   : Component가 생성되기 전에 실행되는 함수(Mounting) / render 함수(Update) / Component를 끝내는 함수(Unmounting) 3가지 종류가 있는것 같다.

// ※ Mounting(시작)
// Mounting : Component가 Screen에 표시될때 / Component가 Website로 전달 될 때
// constructor() : 기본적으로 React에는 없는 함수! / JavaScript에서 Class를 만들때 호출되는 함수다!
//               : 사용하려면 함수 내에 super(props); 키워드를 사용해야 한다.
// static getDerivedStateFromProps() : 
// render() : rendering!
// componentDidMount()  : 처음 component를 rendered 해주고 난 후에 호출되는 메소드!

// constructor() -> render() -> componentDidMount()의 순서로 호출되고 이 일련의 과정들을 Mounting이라고 한다.

// ※ Update
// Update : Component의 상태가 바뀔 때 실행된다.

// static getDerivedStateFromProps() : 자주 안씀
// shouldComponentUpdate() : 자주안씀
// render() : rendering
// getSnapshotBeforeUpdate() : 자주 안씀
// componentDidUpdate() : setState 호출 -> Component 호출 -> render 호출 -> 업데이트 완료 후 componentDidUpdate 호출

// ※ UnMounting (종료? 죽임?) 

// componentWillUnmount() : 컴포넌트가 DOM 상에서 제거될 때 호출된다.

# Day 3

// Axios
// : Axios란 Promise 기반의 HTTP Client!

// 일반적으로 자바스크립트에서 API를 연동하기 위해서 fetch-api를 사용한다.
// 리액트에도 fetch-api가 있지만 자바스크립트 Built-in 라이브러리라는 특성 때문인지 React에서는 Axios를 많이 사용한다.

// Axios vs Fetch


![Axios vs Fetch](https://user-images.githubusercontent.com/51774351/105630893-e8db8680-5e8e-11eb-9970-0f0d9939a733.PNG)



// Axios의 장점


![Axios vs Fetch](https://user-images.githubusercontent.com/51774351/105631035-ae261e00-5e8f-11eb-9b68-4a5a085cbab2.PNG)




