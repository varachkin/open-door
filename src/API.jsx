import axios from "axios";

const serverIP = "http://0.0.0.0:6006"; 
// const serverIP = "https://192.168.18.32:6006"; // CASH
// const serverIP = "http://192.168.18.32:6006"; // CASH
// const serverIP = "http://192.168.18.128:6006"; // CASH
// const serverIP = "http://192.168.18.32:6006"; // CARD
// const serverIP = "http://0.0.0.0:6006";
// const serverIP = "http://10.8.0.2:6006"
const fakeIP = 'https://fakestoreapi.com/products';
// const paymentIP = "http://192.168.18.32:5111/v1";
// const paymentIP = "http://ec2-18-119-61-59.us-east-2.compute.amazonaws.com:5111/v1";
const paymentIP = 'https://staging-energylandia-services.exa22.com/v1';
// const paymentIP = 'http://ec2-18-119-61-59.us-east-2.compute.amazonaws.com:38000/v1';
// const paymentIP = 'http://18.221.159.17:38000/v1'
// const remoteServer = "http://ec2-18-221-151-46.us-east-2.compute.amazonaws.com:5111/v1"

export const openDoor = (box_number, serial) => {
  return axios
  .post(paymentIP + `/machine/remote-open?serial=${serial}`, {box_number: box_number})
  .then(response => {
    console.log('/Open/',response)
    return response;
  })
  .catch(error => {
    console.log('/payment/start', error)
    return error;
  });
}