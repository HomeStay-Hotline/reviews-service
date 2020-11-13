import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  render() {
    return (
      <div className="foo">
        Hello from app
      </div>
    );
  }
}

export default App;
