import React, { Component } from 'react';
import './css/App.css';
import './css/Button.module.css';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateControl from "./components/CreateControl";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_contend_id:2,
      subject:{title:'일기', sub:'수고했어 오늘도 😌'},
      welcome:{title:'welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'오랜만에', desc: '하 하 핳 하', date:'24.05.20'},
        {id:2, title:'오늘의 다짐', desc: '리액트로 게시판 만들기 실습 꼭 완성해야징', date:'24.05.21'},
        {id:3, title:'케이크', desc: '먹구시펑 주디가 안먹는다구해서 못머것당.', date:'24.05.22'}
      ]
    }
  }
  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_contend_id) {
          return data;
          break;
        }
        i = i + 1;
      }
  }
  getContent(){
    var _title, _desc = null, _article;
    if(this.state.mode === 'welcome') {
      //_title = this.state.welcome.title;
      //_desc = this.state.welcome.desc;
      // _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent onChangeMode={function(_mode) {
        if(_mode === 'delete'){
          if(window.confirm('이 일기를 삭제할까요?')) {
            var i = 0;
            var _contents = Array.from(this.state.contents);
            while(i < this.state.contents.length) {
              if(_contents[i].id === this.state.selected_contend_id) {
                _contents.splice(i, 1);
                break;
              }
              i = i + 1;
            }
            this.setState({
              mode:'welcome',
              contents:_contents
            });
            alert('삭제되었습니다.');
          }
        } else {
          this.setState({
            mode:_mode
          });
        }
      }.bind(this)}
      title={_content.title} desc={_content.desc} date={_content.date}>
      </ReadContent>;
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        // var _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // )
        var _contents = Array.from(this.state.contents);
        _contents.push(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:_contents,
          mode:'read',
          selected_contend_id:this.max_content_id
        });
      }.bind(this)}
      ></CreateContent>
    } else if(this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id) {
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        });
      }.bind(this)}
      ></UpdateContent>
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          data={this.state.contents}
          onChangePage={function(){
            this.setState({
              mode:'welcome'});
          }.bind(this)}
          >
        </Subject>
        <CreateControl onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></CreateControl>
        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_contend_id:Number(id)
          });
        }.bind(this)} 
        data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode) {
          if(_mode === 'delete'){
            if(window.confirm('really?')) {
              var i = 0;
              var _contents = Array.from(this.state.contents);
              while(i < this.state.contents.length) {
                if(_contents[i].id === this.state.selected_contend_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert("deleted!");
            }
          } else {
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}
        >
        </Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
