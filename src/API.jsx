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
const paymentIP = 'https://energylandia-services.exa22.com/v1';
// const paymentIP = 'http://ec2-18-119-61-59.us-east-2.compute.amazonaws.com:38000/v1';
// const paymentIP = 'http://18.221.159.17:38000/v1'
// const remoteServer = "http://ec2-18-221-151-46.us-east-2.compute.amazonaws.com:5111/v1"

export function getSerial() {
  return axios
    .get(serverIP + `/clk/v1/device/serial`)
    .then(function (response) {
      // console.log('/device/serial', response)
      return response;
    })
    .catch(function (error) {
      // console.log('/device/serial', error)
      return error;
    });
}

export const getTechBreak = (serial) => {
  return axios
  .get(paymentIP + `/machine/status/technical-break?serial=${serial}`)
  .then(response => {
    // console.log('/technical break',response)
    return response;
  })
  .catch(error => {
    // console.log(error)
    return error;
  });
}

export const getFakeData = () => {
  return axios
  .get(fakeIP)
  .then(response => {
    return response;
  })
  .catch(error => {
    return error;
  });
}

export const paymentStart = (paymentData, serial) => {
  console.log(paymentData, serial)
  return axios
  .post(paymentIP + `/payment/start?serial=${serial}`, paymentData)
  .then(response => {
    console.log('/payment/start',response)
    return response;
  })
  .catch(error => {
    console.log('/payment/start', error)
    return error;
  });
}

export const paymentCancel = (paymentType, serial) => {
  return axios
  .post(paymentIP + `/payment/cancel?payment_type=${paymentType}&serial=${serial}`)
  .then(response => {
    // console.log(`/payment/cancel?payment_type=${paymentType}&serial=${serial}`,response)
    return response;
  })
  .catch(error => {
    // console.log(`/payment/cancel?payment_type=${paymentType}&serial=${serial}`, error)
    return error;
  });
}

export const machineReset = (serial) => {
  return axios
  .post(paymentIP + `/machine/reset?serial=${serial}`)
  .then(response => {
    // console.log(`/machine/reset?serial=${serial}`,response)
    return response;
  })
  .catch(error => {
    // console.log(`/machine/reset?serial=${serial}`,error)
    return error;
  });
}

export const getPaymentStatus = (paymentType, serial) => {
  return axios
  .get(paymentIP + `/payment/status?payment_type=${paymentType}&serial=${serial}`)
  .then(response => {
    // console.log(`/payment/status ${paymentType}`, response.data)
    return response;
  })
  .catch(error => {
    // console.log(`/payment/status ${paymentType}`, error)
    return error;
  });
}

export const machineRelease = (products, serial) => {
  console.log(products, serial)
  return axios
  .post(paymentIP + `/machine/release?serial=${serial}`,products)
  .then(response => {
    // console.log(`MACHINE RELEASE`,response.data)
    return response;
  })
  .catch(error => {
    // console.log(`MACHINE RELEASE`, error)
    return error;
  });
}

export function getProducts(serial) {
  return axios
    .get(paymentIP + `/products/?serial=${serial}`)
    .then(function (response) {
      // console.log('/products/',response.data)
      return response;
    })
    .catch(function (error) {
      // console.log(error)
      return error;
    });
}

export const paymentEnd = (paymentType, serial) => {
  return axios
  .post(paymentIP + `/payment/end?payment_type=${paymentType}&serial=${serial}`)
  .then(response => {
    // console.log(`/payment/end_${paymentType}`, response.data)
    return response;
  })
  .catch(error => {
    // console.log(`/payment/end_${paymentType}`, error)
    return error;
  });
}