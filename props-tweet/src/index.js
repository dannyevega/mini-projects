import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const tweetObj = {
  message: "This message is less than 140 characters.",
  gravatar: "nothing",
  author: {
    handle: "@dannyevega",
    name: "Danny Vega"
  },
  likes: 2,
  retweets: 1,
  timestamp: "2016-07-30 21:24:37"
};

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt=""
    />
  )
}

function Message({ msg }) {
  return (
    <div className="message">
      {msg}
    </div>
  )
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  )
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
};

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet"/>
      {count > 0 &&
        <span className="retweet-count">
          {count}
        </span>
      }
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
      {count > 0 &&
        <span className="like-count">
          {count}
        </span>
      }
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message msg={tweet.message} />
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Tweet tweet={tweetObj} />,
  document.getElementById('root')
)