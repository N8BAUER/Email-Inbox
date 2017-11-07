import React from 'react';
import "./app.css";
//data needs to be contained in an object to allow exporting of specific parts of a file
// import { data } from "./data"

const Messages = ({passIn, update}) => {
function readUnread(data, bg){
  if(data === true  && bg === true){
    return "row message read selected"
  }
  if(data === true){
    return "row message read"
  }
  if(data === false && bg === true){
    return "row message unread selected"
  }
  else{
    return "row message unread"
  }
}

function select(selected){
  if(selected === true){
    return true
  }else{
  return false
    }
}

function stars(active){
  if(active === true){
    return "star fa fa-star"
  }else {
    return "star fa fa-star-o"
  }
}

//ask about this for loop at a later point
function labels(exist){
  var container = []
for(var i = 0; i < exist.length; i++){
  container.push(<span key={i} className="label label-warning">{exist[i]}</span>)
}
  return container
}

//es5 must write return
// function labels(exist){
//   console.log(exist)
//    return exist.map(items => <span key={items} className="label label-warning">{items}</span>)
// }

//update state function on click, specifically checked box
function selectClick(selected){
  if(selected.selected === true){
     selected.selected=false
  }else{
     selected.selected=true
  }
  update(passIn)
}


//update state function on click, specifically star
function selectStar(starred){
  if(starred.starred === true){
     starred.starred=false
  }else{
     starred.starred=true
  }
  update(passIn)
}




return(
//curly braces are required to let react know this is javascript
  <div>
  {passIn.map((nateData) => (
    //key is a keyword for react that allows it to compare the virtaul dom to the dom
  <div key={nateData.id} className={readUnread(nateData.read, nateData.selected)}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" checked={select(nateData.selected)} onClick={selectClick.bind(this, nateData)} />
        </div>
        <div className="col-xs-2">
          <i className={stars(nateData.starred)} onClick={selectStar.bind(this, nateData)}></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
    {labels(nateData.labels)}
      <a href="#">
        {nateData.subject}
      </a>
    </div>
  </div>
))}
  </div>

)
}


export default Messages;
