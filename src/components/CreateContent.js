import React, {Component} from 'react';
import editor from '../css/Editor.module.css';

class CreateContent extends Component {
    render() {
        const today = new Date();
        const formattedYear = today.getFullYear().toString().slice(-2);
        const formattedMonth = ("00" + (today.getMonth() + 1).toString()).slice(-2);
        const formattedDate =("00"+(today.getDate().toString())).slice(-2)
        const formattedFull = `${formattedYear}.${formattedMonth}.${formattedDate}`;
        return (
            <article className={editor.area}>
                <h3>오늘의 일기</h3>
                <form action="/create_process" method="post"
                      onSubmit={function (e) {
                          e.preventDefault();
                          this.props.onSubmit(
                              e.target.title.value,
                              e.target.desc.value,
                              e.target.date.value
                          );
                      }.bind(this)}
                >
                    <p>
                        <input className={editor.title} type="text" name="title" placeholder="제목"></input>
                    </p>
                    <p>
                        <textarea className={editor.desc} name="desc" placeholder="내용"></textarea>
                    </p>
                    <p>
                        <input type="hidden" name="date" value={formattedFull}></input>
                    </p>
                    <p>
                        <input type="submit" value="저장"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;  