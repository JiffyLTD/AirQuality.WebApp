import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import HowToUse from "../components/MapPageComponents/HowToUse";

const MapPage = () => {
  const okIcon = "islands#darkGreenStretchyIcon";
  const mediumIcon = "islands#darkOrangeStretchyIcon";
  const badIcon = "islands#redStretchyIcon";

  const [stationInfo, setStationInfo] = useState(false);

  return (
    <Container className="mt-5 py-2" style={{ background: "#053566" }}>
      <h3 className="text-light">Карта метеостанций</h3>
      <hr className="text-light" />
      <Container className="py-2" style={{ background: "#00183A" }}>
        <YMaps>
          <Map
            defaultState={{ center: [57.626625, 39.893433], zoom: 10 }}
            width={"100%"}
            height={600}
          >
            <Placemark
              geometry={[57.626625, 39.893433]}
              properties={{ iconCaption: "Температура +30", iconContent: "4" }}
              options={{ preset: badIcon }}
              onClick={() => setStationInfo(true)}
            />
          </Map>
        </YMaps>
        {stationInfo ? (
          <div className="mt-5 border rounded px-5 py-5">
            <h3 className="text-light">Данные по станции</h3>
            <h4 className="text-light">Скоро будет &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-emoji-smile-upside-down-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5M4.285 6.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M10 8c-.552 0-1 .672-1 1.5s.448 1.5 1 1.5 1-.672 1-1.5S10.552 8 10 8"/>
            </svg>
            </h4>
          </div>
        ) : (
          <div></div>
        )}
        <HowToUse/>
      </Container>
    </Container>
  );
};

export default MapPage;
