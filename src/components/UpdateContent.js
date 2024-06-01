import React, { Component } from 'react';
import editor from '../css/Editor.module.css';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.data.id,
            title:this.props.data.title,
            desc:this.props.data.desc,
            date:this.props.data.date
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
      return (
        <article className={editor.area}>
            <h3>수정하기</h3>
            <form action="/create_process" method="post"
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        this.state.id,
                        this.state.title,
                        this.state.desc,
                        this.state.date
                    );
                }.bind(this)}
            >
                <input type="hidden" name="id" value={this.state.id}></input>
                <input type="hidden" name="date" value={this.state.date}></input>
                <p>
                    <input
                        className={editor.title}
                        type="text"
                        name="title" 
                        placeholder="제목"
                        value={this.state.title}
                        onChange={this.inputFormHandler}>
                    </input>
                </p>
                <p>
                    <textarea
                        className={editor.desc}
                        name="desc" 
                        placeholder="내용"
                        value={this.state.desc}
                        onChange={this.inputFormHandler}>
                    </textarea>
                </p>

                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
      );
    }
  }
  
export default UpdateContent;  