import axios from "axios";
import { headers } from "../constants";
export const getDataFromAPI = async (
  nickname,
  limit = 200,
  matchtype = "개인전"
) => {
  if (matchtype === "개인전") {
    matchtype =
      "7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a";
  }
  if (matchtype === "팀전") {
    matchtype =
      "effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e";
  }
  try {
    return await axios
      .get(`/api/kart/v1.0/users/nickname/${nickname}`, {
        headers,
      })
      .then((result) =>
        axios.get(
          `/api/kart/v1.0/users/${result.data.accessId}/matches?start_date=&end_date= &offset=0&limit=${limit}&match_types=${matchtype}`,
          { headers }
        )
      );
  } catch (err) {
    console.log("에러발생", err);
  }
};
