import React, {Component} from 'react';
import button from '../css/Button.module.css'

class CreateControl extends Component {
    render() {
        return (
            <div className={button.area}>
                <button className={button.create}><a href="/create" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>일기 쓰기</a></button>
            </div>
        );
    }
}

export default CreateControl;  