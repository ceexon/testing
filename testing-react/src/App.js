import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import Header from './components/header/Header';
import HeadLine from './components/Headline/Headline';
import Button from './components/button/Button';
import Post from './components/post/Post';
import { fetchPosts } from "./redux/actions/post";

const typesArray = [
  {
    money: { cash: 2000 },
    present: true,
    level: 5,
    name: "Human"
  }
];

class App extends React.Component{
  getPosts = () => {
    this.props.fetchPosts();
  }
  render() {
    const {posts} = this.props;
    return (
      <BrowserRouter data-test="App Component">
        <Header />
        <HeadLine
          title="Post"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit doloremque dolorem vero error a, quam aperiam voluptatibus?
              Unde, dolorum. Corrupti error d ignissimos libero rerum, dolorem natus
              ipsa sapiente ex earum!"
          myArray={typesArray}
        />

        <div className="container mt-3">
          <Button text="Get Posts" action={this.getPosts} />
          <div className="mt-4 row">
            {posts.map(post => {
              const {title, body} = post;
              return (
              <Post title={title} body={body} key={title} />
            )})}
          </div>
        </div>
      </BrowserRouter>
  )}
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect (mapStateToProps, {fetchPosts}) (App);
