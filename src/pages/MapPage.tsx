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
      <h3 className="text-light">Карта станций</h3>
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
            <h4 className="text-light">В разработке </h4>
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
