import React, {Component} from 'react';
import detail from '../css/Detail.module.css'

class ReadContent extends Component {
    render() {
        return (
            <article className={detail.area}>
                <h3>{this.props.title}</h3>
                <div className={detail.control}>
                    <a href="/update" className={detail.edit} onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }.bind(this)}>수정</a>
                    <a href="/delete" className={detail.delete} onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode('delete');
                    }.bind(this)}>삭제</a>
                </div>
                <div className={detail.date}>{this.props.date}</div>
                <div>{this.props.desc}</div>

            </article>
        );
    }
}

export default ReadContent;
