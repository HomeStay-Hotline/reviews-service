import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  // vus: 110, // 750
  // duration: '10s',
  thresholds: {
    checks: ['rate>0.9'],
    http_req_duration: ['p(95)<2000'],
  },
  stages: [
    {duration: '30s', target: 100},
    {duration: '30s', target: 300},
    {duration: '5m', target: 500},
    {duration: '30s', target: 0},
  ],
};


const random_idx = () => Math.floor(Math.random()*10000000) + 1;

export default function () {
  
  const before = new Date().getTime();
  const T = 7 ; // time needed to complete a VU iteration
  
  for (let i = 0; i < 10; i++) {
    let idx = random_idx();

    ////////////////////////test get request ////////////////////////
    let res = http.get(`http://localhost:8080/api/homes/${idx}/reviews`);
    check(res, {
      'response code was 200': (r) => r.status == 200,
      // 'no erros': (r) => !r.error,
    })


    //////////////////////// test post request ////////////////////////
    // let params = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // }
    // let idx_customer = random_idx();
    // let data = JSON.stringify({
    //   listing_id: idx,
    //   customer_id: idx_customer,
    //   review: "stress test Post request",
    //   review_date: "test",
    //   cleanliness: 2.2,
    //   communication: 2.2,
    //   check_in: 2.2,
    //   accuracy: 2.2,
    //   location_review: 2.2,
    //   value_review: 2.2
    // });
    // let res = http.post(`http://localhost:8080/api/homes/${idx}/reviews`, data, params);
    // check(res, {
    //   'status is 201': (r) => r.status == 201,
    // })


  }


  ///////// sleep T this one works with   option: {vus: 750 duration: '10s'}, which is not stage ///////////////
  // const after = new Date().getTime();
  // const diff = (after - before) / 1000;
  // const remainder = T - diff;
  // if (remainder > 0) {
  //     sleep(remainder);
  // } else {
  //     console.warn(`Timer exhausted! the execution time of the test took longer than T secondes. remainder is ${remainder}`);
  // }


  ///////// simple sleep ///////
  sleep(1);

}

// k6 run script.js
// k6 run --vus 10 --duration 30s script.js

