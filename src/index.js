import * as marked from "https://cdn.skypack.dev/marked@4.1.1";
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

// replace import statement for marked if need be
// default text in editor, parsed text shows in preview
const defText = "# This is the editor window for my markdown preview app \n## This makes a smaller heading \n### You can edit the text here and see what shows up \n\n#### Try it out!!\n\nThis is regular text, but... `inline code goes between single backticks` \n\n[this links to my site](https://trev-site.herokuapp.com/) and another random [link here](https://reactjs.org/) :D :D \n\n```function foo(){return 'foo!'}```\n\n1. list item 1\n\n1. list item 2\n\n1. list item 3\n\n**This is important... _maybe_?!**\n\n> Block quotes\n\n> You can quote people with '>' at length\n\n    codeblock here let foo = (x) => {return x*2}\n\n![mossyhouse](https://trev-site.herokuapp.com/static/contact_img.jpg)"


// editor window component
// display text editor up top with default text
// set text in editor to state
// pass text to innerHTML in preview window
class EditorWindow extends React.Component {
  // constructor & state
  constructor(props) {
    super(props); this.state = {userText: this.props.text};
  }
  // class functions
  
  // render
  render() {
    
    return (
      <div>
      <div id="editorWrap">
        <textarea id="editor" 
          value={this.state.userText} 
          onChange={(text) => this.setState({userText: text.target.value})}></textarea>
      </div>
      <div id="previewWrap">
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.state.userText)}}></div>
      </div>
      </div>
    )
  }
}


// rendering to DOM/HTML page
const root = ReactDOM.createRoot(
document.getElementById("app"));

root.render(
  <div>
    <EditorWindow text={defText} />
  </div>
)