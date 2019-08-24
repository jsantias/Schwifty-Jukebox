import YTFinder from "youtube-finder";
import APIKey from "../../keys.js";

const client = YTFinder.createClient({ key: APIKey });

function Fetch(param, callback) {
  var params = {
    part: "snippet",
    q: param,
  };
  client.search(params, function(err, data) {
    callback(data);
  });
}

export default Fetch;
