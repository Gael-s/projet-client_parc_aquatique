import React, { useState, useEffect } from "react";
import "./Reservation.css";
import FormReservation from "./FormReservation";

const Reservation = () => {
  const [selectData, setSelectData] = useState();
  const [data, setData] = useState([]);
  const days = [1, 2, 3, 4, 5, 6, 0];
  const daysLabel = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/aquagym")
      .then((value) => value.json())
      .then((value) => setData(value));
  }, []);
  // const data = [
  //   {
  //     jour: [2, 1],
  //     horaire: 9.0,
  //     max: [30, 35],
  //     current: [14, 21],
  //   },
  //   {
  //     jour: [3],
  //     horaire: 9.3,
  //     max: [30],
  //     current: [15],
  //   },
  //   {
  //     jour: [0],
  //     horaire: 9.0,
  //     max: [30],
  //     current: [14],
  //   },
  //   {
  //     jour: [3],
  //     horaire: 9.3,
  //     max: [30],
  //     current: [15],
  //   },
  // ];

  const formatHour = (time) => {
    const hour = Math.floor(time);
    let minutes = ((time - hour).toFixed(2) * 100).toString();
    if (minutes.length < 2) {
      minutes = `${minutes}0`;
    }
    return `${hour}h${minutes}`;
  };

  const orderData = (a, b) => {
    if (a.horaire < b.horaire) {
      return -1;
    }
    if (a.horaire > b.horaire) {
      return 1;
    }
    return 0;
  };
  data.sort(orderData);

  const changeSelectData = (el, day) => {
    setSelectData({ el, day });
  };
  console.log(data);
  return (
    <div className="position-relat">
      <section
        role="button"
        className="reservation-outline"
        onClick={() => selectData && setSelectData()}
        onKeyDown={() => selectData && setSelectData()}
        tabIndex={0}
      >
        <div className="reservation-line">
          <div className="reservation-case days" />
          <p className="opacity-none">n</p>
          <div className="reservation-case days">Lundi</div>
          <p className="opacity-none">n</p>
          <div className="reservation-case days">Mardi</div>
          <p className="opacity-none">n</p>
          <div className="reservation-case days">Mercredi</div>
          <p className="opacity-none">n</p>
          <div className="reservation-case days">Jeudi</div>
          <p className="opacity-none">n</p>
          <div className="reservation-case days">Vendredi</div>
          <p className="opacity-none">n</p>
          <div className="reservation-case days">Samedi</div>
          <p className="opacity-none">n</p>
          <div className="reservation-case days">Dimanche</div>
          <p className="opacity-none">n</p>
        </div>
        {data.map((el) => (
          <div className="reservation-line">
            <div className="reservation-case">{formatHour(el.horaire)}</div>
            {days.map((day) => {
              return el.jour.includes(day) ? (
                <>
                  <div
                    role="button"
                    className="reservation-case tiles"
                    onClick={() => changeSelectData(el, day)}
                    onKeyDown={() => changeSelectData(el, day)}
                    tabIndex={0}
                  >
                    <p>Réserver</p>
                  </div>
                  <p className="color-red">
                    {`${
                      el.maximum - el.current[el.jour.indexOf(day)]
                    } places restantes`}
                  </p>
                </>
              ) : (
                <>
                  <div className="reservation-case tiles">Pas cours</div>
                  <p className="opacity-none">n</p>
                </>
              );
            })}
          </div>
        ))}
      </section>
      {selectData && (
        <FormReservation
          {...selectData}
          daysLabel={daysLabel}
          formatHour={formatHour}
        />
      )}
    </div>
  );
};

export default Reservation;
