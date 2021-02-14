import React, { useEffect, useState } from "react";
import CompBloc from "../CompBloc/CompBloc";

const Espaces = () => {
  const [espaceList, setEspace] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/infocomp?type=espace")
      .then((data) => data.json())
      .then((data) => setEspace(data));
  }, []);
  return (
    <div className="compBlocWrapper">
      {espaceList.map((item) => (
        <CompBloc {...item} key={item.article} />
      ))}
    </div>
  );
};

export default Espaces;
