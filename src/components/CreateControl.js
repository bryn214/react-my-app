import React, { Component } from 'react';
import button from '../css/Button.module.css'

class CreateControl extends Component {
    render() {
      return (
        <button className={button.create}><a href="/create" onClick={function(e){
        e.preventDefault();
        this.props.onChangeMode('create');
        }.bind(this)}>일기 쓰기</a></button>
      );
    }
  }
  
export default CreateControl;  