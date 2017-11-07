import React from "react";
import "./app.css"
// import { data } from "./data"


const Toolbar = ({passUp, update}) => {



function selectAll(all){
  let container = [];
  var checkBox = "";
  for (var i = 0; i < all.length; i++){
    if(all[i].selected === true){
      container.push("filler")
    }
  }
  if (container.length === 0) {
    checkBox = "fa fa-square-o"
  }
  else if (container.length === all.length) {
    checkBox="fa fa-check-square-o";
  } else{
    checkBox="fa fa-minus-square-o"
  }
  return checkBox
}

function updateCheck(box){
  let container = [];
  var checkBox = "";
  for (var i = 0; i < box.length; i++){
    if(box[i].selected === true){
      container.push("filler")
    }
  }
  if(container.length != box.length){
    for(var j = 0; j < box.length; j++){
      box[j].selected=true
    }
  }else{
    for(var k = 0; k < box.length; k++){
      box[k].selected=false
    }
  }
  update(passUp)
}

function read(msg){
  for(var i = 0; i < msg.length; i++){
    if(msg[i].selected === true){
      msg[i].read=true
    }
  }
  update(passUp)
}

function unread(msg){
  for(var i = 0; i < msg.length; i++){
    if(msg[i].selected === true){
      msg[i].read = false
    }
  }
  update(passUp)
}

function noMessages(disabled){
  let container = [];
  var test = "";
  for(var i = 0; i < disabled.length; i++){
    if(disabled[i].selected == false ||  disabled[i].selected == null){
      container.push("test")
    }
  }
  if(container.length === disabled.length){
    return true
  }else{
    return false
  }
}

function unreadTally(count){
  let tally = 0;
  for(var i = 0; i < count.length; i++){
    if(count[i].read === false){
      tally ++
    }
  }
  return tally
}

//delete by id ?
function garbage(trash){

}

function addLabel(e, label){
for(var i = 0; i < label.length; i++){
  if(label[i].selected === true  && !label[i].labels.includes(e.target.value) === true){
    label[i].labels.push(e.target.value)
}
}
update(passUp)
}

//learn how this function is called in the render section
function removeLabel(e, label){
  for(var i = 0; i < label.length; i++){
    if(label[i].selected === true  && label[i].labels.includes(e.target.value) === true){
      label[i].labels.splice(label[i].labels.indexOf(e.target.value),1)
  }
update(passUp)
}
}

function remove(selected){
  let container = [];
  for(var i = 0; i < selected.length; i++){
    if(selected[i].selected === false  || selected[i].selected == null){
      container.push(selected[i])
    }
  }
  update(container)
}





  return(
    <div>
    <div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">{unreadTally(passUp)}</span>
      unread messages
    </p>

    <button className="btn btn-default" onClick={updateCheck.bind(this, passUp)}>
      <i className={selectAll(passUp)}></i>
    </button>

    <button className="btn btn-default" onClick={read.bind(this, passUp)} disabled={noMessages(passUp)}>
      Mark As Read
    </button>

    <button className="btn btn-default" onClick={unread.bind(this, passUp)} disabled={noMessages(passUp)}>
      Mark As Unread
    </button>

    <select className="form-control label-select" onChange={e => addLabel(e, passUp)}  disabled={noMessages(passUp)}>
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" onChange={e => removeLabel(e,passUp)} disabled={noMessages(passUp)}>
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default" onClick={remove.bind(this, passUp)} disabled={noMessages(passUp)}>
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>
</div>

  )

}


export default Toolbar;
