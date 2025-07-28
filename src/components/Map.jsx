// src/components/Map.jsx
import React, { useEffect, useRef } from 'react'

function Map() {
  const mapRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID`
    script.async = true
    script.onload = () => {
      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.5665, 126.978),
        zoom: 13,
      })
      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.5665, 126.978),
        map,
        title: '서울 중심'
      })
    }
    document.head.appendChild(script)
  }, [])

  return (
    <div className="mt-5">
      <h5 className="fw-bold">🗺️ 경기장 위치 보기</h5>
      <div ref={mapRef} style={{ height: '300px', width: '100%' }} />
    </div>
  )
}

export default Map
