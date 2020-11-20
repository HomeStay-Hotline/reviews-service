import React from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import Panel from './Panel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      ratings: [],
    };
    this.getReviews = this.getReviews.bind(this);
    this.getRatings = this.getRatings.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const id = Math.floor(Math.random() * 10) + 1;
    axios.get(`/api/home/${id}/reviews`)
      .then((response) => {
        this.setState({
          reviews: response.data,
        });
      })
      .then(() => {
        this.getRatings();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // calculates the average ratings across all reviews
  getRatings() {
    const { reviews } = this.state;
    const tracker = {
      cleanliness: 0,
      communication: 0,
      check_in: 0,
      accuracy: 0,
      location: 0,
      value: 0,
    };

    for (let i = 0; i < reviews.length; i++) {
      tracker.cleanliness += reviews[i].cleanliness;
      tracker.communication += reviews[i].communication;
      tracker.check_in += reviews[i].check_in;
      tracker.accuracy += reviews[i].accuracy;
      tracker.location += reviews[i].location;
      tracker.value += reviews[i].value;
    }

    const ratings = [];

    for (const key in tracker) {
      tracker[key] /= 100;
      tracker[key] = tracker[key].toFixed(1);
      ratings.push(tracker[key]);
    }

    let average = 0;

    for (let i = 0; i < ratings.length; i++) {
      average += Number(ratings[i]);
    }

    ratings.push((average / ratings.length).toFixed(2));

    this.setState({
      ratings,
    });
  }


  render() {
    const { reviews, modalOpen, ratings } = this.state;
    if (reviews.length !== 0) {
      return (
        <div className="mainView">
          <div>
            <Ratings totalReviews={reviews.length} ratings={ratings} />
            <div>
              <Reviews
                reviews={reviews}
                ratings={ratings}
              />
            </div>
            <Panel reviews={reviews} ratings={ratings}/>
          </div>
        </div>
      );
    }
    return (
      <div>
        Loading
      </div>
    );
  }
}

export default App;
