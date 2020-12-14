import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 200,
  duration: '30s',
  thresholds: {
    checks: ['rate>0.9'],
    http_req_duration: ['p(95)<2000'],
  },
};


const random_idx = () => Math.floor(Math.random()*10000000) + 1;

export default function () {
  
  for (let i = 0; i < 10; i++) {
    let idx = random_idx();
    let params = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    let idx_customer = random_idx();
    let data = JSON.stringify({
      listing_id: idx,
      customer_id: idx_customer,
      review: "stress test Post request",
      review_date: "test",
      cleanliness: 2.2,
      communication: 2.2,
      check_in: 2.2,
      accuracy: 2.2,
      location_review: 2.2,
      value_review: 2.2
    });
    let res = http.post(`http://localhost:8080/api/homes/${idx}/reviews`, data, params);
    check(res, {
      'status is 201': (r) => r.status == 201,
      'no errors': (r) => !r.error,
    })
  }

  sleep(1);
}