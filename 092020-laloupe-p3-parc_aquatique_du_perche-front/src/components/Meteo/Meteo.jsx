import React from "react";
import "./Meteo.css";

class Meteo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: false,
      meteoState: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=48.5&lon=1.02&exclude=hourly,current,minutely,alerts&units=metric&lang=fr&appid=bc86a119f6fcddb0219a5b35c26f80c2"
    )
      .then((response) => response.json())
      .then((meteo) => {
        this.setState({ meteoState: meteo.daily });
      });
  }

  changeMeteo = () => {
    const { option } = this.state;
    this.setState({ option: !option });
  };

  date = (n) => {
    const day = new Date();
    const dd = String(day.getDate() + n).padStart(2, "0");
    const mm = String(day.getMonth()).padStart(2, "0");
    const yyyy = day.getFullYear();
    const days = new Date(yyyy, mm, dd);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return days.toLocaleDateString("fr-FR", options);
  };

  render() {
    const { option, meteoState } = this.state;
    return (
      <div className="meteo-outline">
        {option ? (
          <div>
            <h1 className="titre">Météo des 3 prochains jours:</h1>
            <div className="meteo-three">
              <div className="meteo-jour">
                <p>{this.date(0)}</p>
                <img
                  className="meteoIMG"
                  src={`http://openweathermap.org/img/w/${meteoState[0].weather[0].icon}.png`}
                  alt="icon-meteo"
                />
                <p>{`${meteoState[0].temp.day}°C`}</p>
              </div>
              <div className="meteo-jour">
                <p>{this.date(1)}</p>
                <img
                  className="meteoIMG"
                  src={`http://openweathermap.org/img/w/${meteoState[1].weather[0].icon}.png`}
                  alt="icon-meteo"
                />
                <p>{`${meteoState[1].temp.day}°C`}</p>
              </div>
              <div className="meteo-jour">
                <p>{this.date(2)}</p>
                <img
                  className="meteoIMG"
                  src={`http://openweathermap.org/img/w/${meteoState[2].weather[0].icon}.png`}
                  alt="icon-meteo"
                />
                <p>{`${meteoState[2].temp.day}°C`}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="titre">Météo du jour:</h1>
            <div className="meteo-jour">
              <p>{this.date(0)}</p>
              <img
                className="meteoIMG"
                src={
                  meteoState[0] !== undefined &&
                  `http://openweathermap.org/img/w/${meteoState[0].weather[0].icon}.png`
                }
                alt="icon-meteo"
              />
              <p>
                {meteoState[0] !== undefined && `${meteoState[0].temp.day}°C`}
              </p>
            </div>
          </div>
        )}
        {option ? (
          <button type="button" className="meteoBtn" onClick={this.changeMeteo}>
            Météo du jour
          </button>
        ) : (
          <button type="button" className="meteoBtn" onClick={this.changeMeteo}>
            Météo des 3 prochains jours
          </button>
        )}
      </div>
    );
  }
}

export default Meteo;
