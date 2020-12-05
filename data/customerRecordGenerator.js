const faker = require('faker');
const fs = require('fs');
const { argv } = require('yargs');

const s3URL = 'https://ying-customer-photos.s3.us-east-2.amazonaws.com/images/';
const lines = argv.lines || 10000000; // 10M customers
const filename = argv.output || 'customers.csv';
const stream = fs.createWriteStream(filename);

const randomInt = () => Math.floor(Math.random() * 100);

const generateCustomerRecord = () => {
    const customer_name = faker.name.findName();
    const photo_url = `${s3URL}${randomInt().toString().padStart(3, '0')}.jpg`;

    return `${customer_name},${photo_url}\n`
};

const startWriting = (writeStream, encoding, done) => {
    let i = lines
    function writing(){
      let canWrite = true
      do {
        i--
        let record = generateCustomerRecord()
        if(i === 0){
          writeStream.write(record, encoding, done)
        }else{
          writeStream.write(record, encoding)
        }
      } while(i > 0 && canWrite)
      if(i > 0 && !canWrite){
        writeStream.once('drain', writing);
      }
    }
    writing()
}
  
stream.write(`customer_name,photo_url\n`, 'utf-8')
startWriting(stream, 'utf-8', () => {
stream.end()
})