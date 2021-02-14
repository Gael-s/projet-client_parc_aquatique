import React, { useEffect, useState } from "react";
import CompBloc from "../CompBloc/CompBloc";

const Actualites = () => {
  const [actuList, setActu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/infocomp?type=actualités")
      .then((data) => data.json())
      .then((data) => setActu(data));
  }, []);
  return (
    <div className="compBlocWrapper">
      {actuList.map((item) => (
        <CompBloc {...item} key={item.article} />
      ))}
    </div>
  );
};

export default Actualites;
