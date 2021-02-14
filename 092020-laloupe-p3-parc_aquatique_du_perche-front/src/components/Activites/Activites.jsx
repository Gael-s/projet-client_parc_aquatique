import React, { useEffect, useState } from "react";
import CompBloc from "../CompBloc/CompBloc";

const Activites = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/infocomp?type=activite")
      .then((data) => data.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="compBlocWrapper">
      {activities.map((item) => (
        <CompBloc {...item} key={item.article} />
      ))}
    </div>
  );
};

export default Activites;
