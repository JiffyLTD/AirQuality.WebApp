import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import HowToUse from "../components/MapPageComponents/HowToUse";
import StationApi from "../api/StationApi";
import InfoByLocationApi from "../api/InfoByLocationApi";
import StationDataApi from "../api/StationDataApi";
import StationDataLast from "../components/MapPageComponents/StationDataLast";

const MapPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [stationInfo, setStationInfo] = useState(false);
  const [stations, setStations] = useState<any[]>([]);
  const [stationPlacemarks, setStationPlacemarks] = useState<any[]>([]);
  const [stationDataLast, setStationDataLast] = useState();

  const okIcon = "islands#darkGreenStretchyIcon";
  const mediumIcon = "islands#darkOrangeStretchyIcon";
  const badIcon = "islands#redStretchyIcon";

  function getIcon(avg_pm: number){
    if(avg_pm <= 50){
      return okIcon;
    }else if(avg_pm > 50 && avg_pm <= 100){
      return mediumIcon;
    }else if(avg_pm > 100){
      return badIcon;
    }
  }

  async function getStationData(stationId: any){
    setIsLoading(true);

    const lastData = await StationDataApi.getStationDataLast(stationId);
    setStationDataLast(lastData);
    
    setStationInfo(true);
    setIsLoading(false);
  }

  useEffect(() => {
    const getStations = async () => {
      setStations(await StationApi.getStationsWithLocation());
    }
    getStations();
  },[]);

  useEffect(() => {
    const arr: any = [];

    stations.forEach(async station => {
      const info = await InfoByLocationApi.getInfoByLocation(station.id);

      const [latitude, longitude] = station.location.split(",").map(Number);

      const element = {
        stationdId: station.id,
        latitude: latitude,
        longitude: longitude,
        pm_avg: (info.avgPm_1 + info.avgPm_2_5 + info.avgPm_10) / 3
      };

      arr.push(element);

      setStationPlacemarks(arr);
    });
  }, [stations])

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
            {stationPlacemarks.length > 0 ?
              stationPlacemarks.map(info => (
                <Placemark
                  key={info.stationdId}
                  geometry={[info.latitude, info.longitude]}
                  properties={{ iconContent: info.pm_avg }}
                  options={{ preset: getIcon(info.pm_avg) }}
                  onClick={async () => await getStationData(info.stationdId)}
                />)
              )
              :
              <p></p>
            }
          </Map>
        </YMaps>
        {stationInfo ? (
          <div className="mt-5 border rounded px-5 py-3">
            <h3 className="text-light">Данные по станции</h3>
            {
              isLoading ?
                <div className="text-center">
                  <Spinner className="text-light" animation='grow'/>
                </div>
                :
                <StationDataLast stationDataLast= {stationDataLast}/>
            }
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
