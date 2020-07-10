import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 80bS3rti8UIizN2a4xF5DZ8MreSpqov6P9lqtl0ocT090VFNkyk7feWub48YXIwIvwZUCew2sSEy6shmijJoz8QIUQiiG_evm7Lj38DTr3etloVrqcG7AzHf8SL2XnYx",
  },
});
