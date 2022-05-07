import { useEffect, useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import api from '../../../api.json'
import './map.scss'
import 'mapbox-gl/dist/mapbox-gl.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

const key = 'pk.eyJ1IjoicGFzY3VjaCIsImEiOiJjbDJzcjVzOWEwMWhsM2RvOXM4c2x3ZDExIn0.MHtq4GI2KxqTHUqG58MfiQ'
const style = 'mapbox://styles/pascuch/cl2tk7qqo000s14o177zcb02u'

export default function Map ({ width, height }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  const parse = JSON.parse(JSON.stringify(api))

  const lugar = parse.hotels.filter(e => e.countryCity.includes('Buenos Aires'))

  const coordinates = lugar.map(e => ({ longitude: e.longitude, latitude: e.latitude }))

  const center = getCenter(coordinates)

  const [viewState, setViewState] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11.5
  })

  return (
    <div className='map'>
      <ReactMapGL
        mapboxAccessToken={key}
        {...viewState}
        onMove={e => setViewState(e.viewState)}
        mapStyle={style}
        style={{ width, height }}
      >
        {lugar.map(el => (
          <div key={el.id}>
            <Marker
              latitude={el.latitude}
              longitude={el.longitude}
            >
              <button
                onClick={() => setSelectedLocation(el)}
                className='map__btn'
              >
                <FaMapMarkerAlt size={20} />
              </button>
              {selectedLocation.latitude
                ? (
                  <Popup
                    onClose={() => setSelectedLocation({})}
                    closeButton={false}
                    latitude={selectedLocation.latitude}
                    longitude={selectedLocation.longitude}
                    offsetTop={40}
                  >
                    <div className='popup'>
                      <img src={selectedLocation.image} alt='img' />
                      <button className='popup__btn'>
                        <h5 className='popup__btn__name'> {selectedLocation.name}</h5>
                      </button>
                      {selectedLocation.stars === 1 && <div className='popup__stars'><AiFillStar /></div>}
                      {selectedLocation.stars === 2 && <div className='popup__stars'><AiFillStar /> <AiFillStar /></div>}
                      {selectedLocation.stars === 3 && <div className='popup__stars'><AiFillStar /> <AiFillStar /><AiFillStar /></div>}
                      {selectedLocation.stars === 4 && <div className='popup__stars'><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /></div>}
                      {selectedLocation.stars === 5 && <div className='popup__stars'><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>}
                    </div>
                  </Popup>
                  )
                : null}
            </Marker>
          </div>
        ))}

      </ReactMapGL>
      <p className='prueba'>{selectedLocation.latitude && selectedLocation.latitude}</p>
    </div>
  )
}
