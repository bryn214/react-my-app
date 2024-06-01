import React, { Component } from 'react';
import subject from '../css/Subject.module.css';

class Subject extends Component {
    render() {
      var data = this.props.data;
      return (
        <header className={subject.area}>
              <h1 className={subject.title}><a href="/" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}>{this.props.title}</a></h1>
               <div>{this.props.sub}</div>
               <div>지금까지 <span className={subject.number}>{data.length}회</span> 기록</div>
        </header>
      );
    }
  }
  
export default Subject;  