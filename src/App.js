import { map } from 'async';
import React,{useState} from 'react';
import './App.css';

function App() {
  //[a,b]가 저장됨 
  let [title,titleSet] = useState(['남자 코트 추천','강남 우동 맛집','헬창 점심 메뉴 추천']);
  let [listIdx,listIdxSet] = useState(0);
  let [likeCount,likeSet] = useState([0,0,0]);
  let [modal,modalSet] = useState(false);
  let [input,inputSet] = useState('');

  var 좋아요변경 = idx=>{
    var newLike = [...likeCount];
    newLike[idx] = likeCount[idx]+1;
    likeSet(newLike);
  }

  var 모달변경 = idx =>{
    listIdxSet(idx);
    modalSet(!modal);
  }

  function 반복된UI(){
    var arr = [];
    for(var i=0;i<3;i++){
      arr.push(<div>안녕</div>);
    }
    return arr;
  }

  var 게시글작성 = post =>{
    var newTitle = [...title];
    var newLike = [...likeCount];
  
    newTitle.unshift(post);
    newLike.unshift(0);
    
    titleSet(newTitle);
    likeSet(newLike);
  }
  

  // function 제목바꾸기(){
  //   var newArr = [...title];
  //   newArr[0] = '여자 코트 추천';
  //   titleSet(newArr);
  // modalSet(!modal)
  // }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={제목바꾸기}>버튼</button> */}
      {
        title.map((title,idx)=>{
          return (
          <div className="list" key={idx}>
            <h3 onClick={()=>모달변경(idx)}>{title}<span onClick={()=>좋아요변경(idx)}>👍{likeCount[idx]}</span></h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>)
        })
      }

      {/* {input}
      <input onChange={(e)=>{inputSet(e.target.value)}}></input> */}

      <div className="publish">
        <input onChange={(e)=>{inputSet(e.target.value)}}></input>
        <button onClick={()=>게시글작성(input)}>저장</button>
      </div>

      <Profile></Profile>

      {
        modal?<Modal title={title} idx={listIdx}></Modal>:null
      }


    </div>

  );
}

//새로운 React 문법 
function Modal(props){
  return (
    <div className="modal">
        <h2>{props.title[props.idx]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

//옛날 React 문법 
class Profile extends React.Component{
  constructor(){
    super();
    this.state = {name:'kim',age:30};
  }

  changeName=()=>{
    this.setState({name:'Park'})
  }

  render(){
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name}입니다</p>
        <button onClick={this.changeName}>버튼</button>
      </div>
    )
  }
}

export default App;
