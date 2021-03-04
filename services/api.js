import axios from "axios";
axios.defaults.baseURL = "http://api-test.sitiocancun.org/";

async function getSignature() {
  const keys = {
    public_key: "4ELKABTS5Q",
    secret_key: "ae414c65add499eebcc94dd71cea9b983ac5cebc",
  };

  const {
    data: {
      message: { Authorization },
    },
  } = await axios.post("/login", keys);
  axios.defaults.headers.common["Signature"] = Authorization;
}

async function getAllPackages() {
  // setup default headers
  await getSignature();
  const {
    data: { message },
  } = await axios.get("promotions/packages/en");
  return message;
}
async function getPopularTours() {
  // setup default headers
  await getSignature();
  const {
    data: { message },
  } = await axios.get("promotions/populartours/en");
  return message;
}
/*
generic function by parameter (No funciona :v)
async function getHotels(id){
  // setup default headers
  await getSignature()
  const {data : {message}} = await axios.get('hotels/'+id)
  return message;
}
*/
export { getAllPackages, getPopularTours };
