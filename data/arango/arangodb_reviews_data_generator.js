const faker = require('faker');
const fs = require('fs');
const { argv } = require('yargs');

const lines = argv.lines || 10000000; // 10M listings,
const filename = argv.output || 'arango_reviews.csv';
const stream = fs.createWriteStream(filename);


const getRandom = (num) => Math.floor(Math.random() * num) + 1;
const getRandomReview = () => ((Math.random() * 5).toFixed(1))

const generateReview = (listing_id, review_id) => {
    // listing_id INTEGER NOT NULL,
    // customer_id INTEGER NOT NULL references customers(id),
    const customer_id = getRandom(10000000);
    // review text NOT NULL,
    const review = faker.lorem.paragraph();
    // review_date date,
    const review_date = faker.date.recent(90);
    // cleanliness NUMERIC(2,1),
    const cleanliness = getRandomReview();
    // communication NUMERIC(2,1),
    const communication = getRandomReview();
    // check_in NUMERIC(2,1),
    const check_in = getRandomReview();
    // accuracy NUMERIC(2,1),
    const accuracy = getRandomReview();
    // location_review NUMERIC(2,1),
    const location_review = getRandomReview();
    // value_review NUMERIC(2,1)
    const value_review = getRandomReview();

    return `${review_id},${listing_id},${customer_id},${review},${review_date},${cleanliness},${communication},${check_in},${accuracy},${location_review},${value_review}\n`
};

const startWriting = (writeStream, encoding, done) => {
    let review_id = 0;
    let i = lines;
    function writing(){
      let canWrite = true
      do {
        i--;
        // loop , use i as listing_id, 
        const getRandomReviewAmount = Math.floor(Math.random() * 10) + 2;
        for (let j = 0; j < getRandomReviewAmount; j++) {
          review_id ++;
          let record = generateReview(i + 1, review_id);
          if(i === 0){
            writeStream.write(record, encoding, done)
          }else{
            canWrite = writeStream.write(record, encoding)
          }
        }
      } while(i > 0 && canWrite)
      if(i > 0 && !canWrite){
        writeStream.once('drain', writing);
      }
    }
    writing()
}

stream.write(`review_id,listing_id,customer_id,review,review_date,cleanliness,communication,check_in,accuracy,location_review,value_review\n`, 'utf-8')
startWriting(stream, 'utf-8', () => {
stream.end()
})

// node arangodb_reviews_data_generator.js --lines 10 --output sample_reviews.csv
// wc -l reviews.csv