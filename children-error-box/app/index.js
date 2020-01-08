import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* ------------------------ EXERCISE 1 ------------------------ */
const ErrorBox = ({ children }) => {
  return (
    <div className="alert alert-danger error-box">
      <i className="fa fa-exclamation-triangle"/>
      {children}
    </div>
  )
}



/* ------------------------ EXERCISE 2 ------------------------ */
const FirstChildOnly = ({ children }) => {
  return (
    <div>
      First Child Only:
      {React.Children.toArray(children).slice(0,1)}
    </div>
  )
}

const LastChildOnly = ({ children }) => {
  return (
    <div>
      Last Child Only:
      {React.Children.toArray(children).slice(-1)}
    </div>
  )
}

const Head = ({ number, children }) => {
  const reactChildren = React.Children.toArray(children);
  return (
    <div>
      The first {number} items out of {reactChildren.length}:
      {reactChildren.slice(0,3)}
    </div>
  )
}

const Tail = ({ number, children }) => {
  const reactChildren = React.Children.toArray(children);
  return (
    <div>
      The last {number} items out of {reactChildren.length}:
      {reactChildren.slice(-number)}
    </div>
  )
}

const App = () => (
  <div>
    <ErrorBox>This is an error, my guy.</ErrorBox>
    <br />
    <FirstChildOnly>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </FirstChildOnly>
    <br />
    <LastChildOnly>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </LastChildOnly>
    <br />
    <Head number={3}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </Head>
    <Tail number={3}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </Tail>
  </div>
)



/* ------------------------ EXERCISE 3 ------------------------ */
const Dialogue = ({ children }) => {
  let title, body, footer;
  title = body = footer = null;

  React.Children.forEach(children, child=> {
    switch(child.type) {
      case Title:
        title = child;
        break;
      case Body:
        body = child;
        break;
      case Footer:
        footer = child;
        break;
      default:
        throw new Error("Dialog can only contain Header, Body, and Footer components.");
    }
  })

  return (
    <div className="modal show dialogue">
      <div className="modal-header">
        {title}
      </div>
      <div className="modal-body">
        {body}
      </div>
      <div className="modal-footer">
        {footer}
      </div>
    </div>
  )
}

const Title = ({ children }) => (
  <h4>{children}</h4>
)

const Body = ({ children }) => (
  <div>{children}</div>
)

const Footer = ({ children }) => (
  <div>{children}</div>
)

ReactDOM.render(
  <div className="container">
    <Dialogue>
      <Title>This is a title.</Title>
      <Body>Here's some content.</Body>
      <Footer>
        <button className="btn btn-default">Close</button>
      </Footer>
    </Dialogue>
  </div>,
  document.getElementById('app')
)