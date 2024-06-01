import React, { Component } from 'react';
import toc from '../css/Toc.module.css';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
      if(this.props.data === newProps.data) {
        return false;
      }
      return true;
    }
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
            lists.push(
                <li key={data[i].id} className={toc.list}>
                    <a
                        href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    >{data[i].title}<span className={toc.date}>{data[i].date}</span></a>
                </li>)
            i = i + 1;
        }
      return (
        <nav className={toc.area}>
          <ul>
              {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC;