# Movie App 2021

React Js Fundamentals Course (2021 Update Boom!!)

# 단축키

// 한줄복사 : shift + alt + ↓
// 멀티 커서 에디팅 : Ctrl + Alt + 방향키

# 문법

// add = () => {}; : es6 문법! 람다식과 비슷하게 생겼다.<br/>
// add = () => {}; => Javascript 형태로 바꾼다면 function add(){} 같은 형태임!<br/>
// JavaScript에서는 다른 onClick이나 eventListener를 등록해야 하지만 React에서는 자동적으로 button 태그에 onclick을 가지고 있다.<br/>
// onClick={this.add} => 클릭했을 때 함수 실행<br/>
// onClick={this.add()} => 페이지 로드 될때 함수 실행<br/>

![Axios에서 가져온 데이터를 state에 넣을때](https://user-images.githubusercontent.com/51774351/105632060-b2086f00-5e94-11eb-8fd2-f5df25d57d6d.PNG)

// {movies : movies } => state안에 movies Array에 axios에서 가져온 movies 를 넣으려면 이렇게도 작성할 수 있지만 {moives} 처럼 작성 할 수도 있다. ==> ES6의 문법!

# Github Terminal

## Push : git push -u origin master

# Chrome App

// JSONview : JSON 파일을 예쁘게 보여준다~

# Extension

// 1. Prettier : 코드 예쁘게 포맷해줌. setting.json에 옵션 추가 및 ctrl+, 후 Deafult Formatter 검색해서 esbenp.prettier-vscode로 변경<br/>

# Error

// 1. Each child in a list should have a unique "key" prop : 리액트에서는 엘리먼트가 많을 경우 고유한 key라는 것을 정해주어야한다.<br/>
// 2. Typo in static class property declaration : Proptype 쓸때 Movie.PropTypes 같이 PropTypes의 P를 대문자로 쓰면 에러남! 소문자로 써줘야함!<br/>

# 필기

# Day 1

// 1. Component

// Component : HTML을 반환하는 함수! , 형태가 정해져 있다.<br/>
// <Kimchi/> : Kimchi.js 안에 있는 function을 Retrun한 결과<br/>
// 자식 Component로 정보를 보내는 방법 : Props<br/>
// map : array 내에 item에 함수를 전달! 하는 메소드<br/>

# Day2

// 2. React.Component

// React.Component : Java 에서 인터페이스와 같은 역할! 많은 메소드 들이 React.Component에 구현되어 있고 이를 extends 받은 자식 클래스에서 이를 가져다가 사용!<br/>
// : React.Component는 function이 아니기 때문에 return이 없다! 대신 render라는 것이 있음!(render는 React.Component에서 사용하는 유일한 Function이다!)<br/>
// React는 자동적으로 모든 Class Component의 render Method를 실행하고자 한다.<br/>

// 2-1. state

// Function Component 대신 Class Component를 사용하는 이유 : Class Component에는 state가 있기 때문이다!<br/>
// state : state는 Object! , Component에 data를 넣을 공간이 있고 데이터는 동적이다! , state에는 바뀌는 혹은 바꾸고 싶은 data를 집어넣는다!<br/>
// : state는 Component의 data를 바꾸고 싶을때 사용한다! class내에서 => {this.state.??}<br/>
// ★★★state를 사용할 때는 setState( ) 를 사용한다!★★★<br/>
// ★★★setState를 호출하면 react는 state를 refresh하고 render Function을 호출한다.★★★<br/>
// 반대로 말하면 setState를 사용하지 않으면 새 state와 함께 render Function이 호출되지 않을 것이다!<br/>

// 2-2. Life Cycle Method

// Life Cycle Method : react가 Component를 생성하고 없애는 과정에서 실행되는 Method<br/>
// : Component가 생성되기 전에 실행되는 함수(Mounting) / render 함수(Update) / Component를 끝내는 함수(Unmounting) 3가지 종류가 있는것 같다.<br/>

// ※ Mounting(시작)<br/>

// Mounting : Component가 Screen에 표시될때 / Component가 Website로 전달 될 때<br/>
// constructor() : 기본적으로 React에는 없는 함수! / JavaScript에서 Class를 만들때 호출되는 함수다!<br/>
// : 사용하려면 함수 내에 super(props); 키워드를 사용해야 한다.<br/>
// static getDerivedStateFromProps() : <br/>
// render() : rendering!<br/>
// componentDidMount() : 처음 component를 rendered 해주고 난 후에 호출되는 메소드!<br/>

// constructor() -> render() -> componentDidMount()의 순서로 호출되고 이 일련의 과정들을 Mounting이라고 한다.

// ※ Update<br/>
// Update : Component의 상태가 바뀔 때 실행된다.

// static getDerivedStateFromProps() : 자주 안씀<br/>
// shouldComponentUpdate() : 자주안씀<br/>
// render() : rendering<br/>
// getSnapshotBeforeUpdate() : 자주 안씀<br/>
// componentDidUpdate() : setState 호출 -> Component 호출 -> render 호출 -> 업데이트 완료 후 componentDidUpdate 호출<br/>

// ※ UnMounting (종료? 죽임?)

// componentWillUnmount() : 컴포넌트가 DOM 상에서 제거될 때 호출된다.

# Day 3

// Axios<br/>
// : Axios란 Promise 기반의 HTTP Client!<br/>

// 일반적으로 자바스크립트에서 API를 연동하기 위해서 fetch-api를 사용한다.<br/>
// 리액트에도 fetch-api가 있지만 자바스크립트 Built-in 라이브러리라는 특성 때문인지 React에서는 Axios를 많이 사용한다.<br/>

// Axios vs Fetch

![Axios vs Fetch](https://user-images.githubusercontent.com/51774351/105630893-e8db8680-5e8e-11eb-9970-0f0d9939a733.PNG)

// Axios의 장점

![Axios vs Fetch](https://user-images.githubusercontent.com/51774351/105631035-ae261e00-5e8f-11eb-9b68-4a5a085cbab2.PNG)

// axios 는 빠르지 않기 때문에 Data를 가져올 때 조금 기다려야 하는데 function에 async 키워드를 사용하면 비동기로 처리한다!<br/>
// 변수의 값 부분에 await도 같이 추가! , async 키워드를 사용하지 않으면 await도 사용할 수 없다.

![Axios 비동기 처리](https://user-images.githubusercontent.com/51774351/105631697-0e6a8f00-5e93-11eb-991f-876b9128c726.PNG)

# YTS API

// Movie List , Movie Detail 등 가져와서 사용하는 API!<br/>
// https://yts.mx/api

// 사용할 때는 https://yts-proxy.nomadcoders1.now.sh/list_movies.json 로 가서 사용하자~
