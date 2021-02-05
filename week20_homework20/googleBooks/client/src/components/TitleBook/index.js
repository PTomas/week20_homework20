import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";

function TitleBook(props) {
    const [book, setBook] = useState({});

    const {id} = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Authors(s): {props.author}</h3>
      <h3>Description: {props.description}</h3>
      <h3>Link: {props.link}</h3>
    </div>
  );
}

export default TitleBook;