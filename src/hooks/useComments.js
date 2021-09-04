import { useEffect, useState } from "react";
import axios from "axios";
function useComments(id) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        setComments(res.data);
      });
  }, [id]);
  return comments;
}

export default useComments;
