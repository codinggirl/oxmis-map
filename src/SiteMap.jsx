import React from 'react'
import { Map, Base, Marker, InfoWindow } from 'rc-bmap'
import SiteDetail from './SiteDetail'
import './SiteMapFix.css'

function SiteNoInfo() {
    return (
        <div style={{
            padding: '40px',
            color: '#856404',
            backgroundColor: '#fff3cd',
            borderColor: '#ffeeba',
            borderRadius: '0.25rem'
        }}>未找到站点坐标</div>
    )
}

export default (props) => {
    const { site } = props
    let lat = site.latitude
    let lng = site.longitude
    if (!lat || !lng) {
        return SiteNoInfo()
    }

    return (
        <Map
            style={{
                height: '800px'
            }}
            // TODO: make the key configurable
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            zoom={14}
            scrollWheelZoom
            mapClick={false}
        >
            <Base.Point name="center" lng={lng} lat={lat} />
            <Marker>
                <Base.Point lng={lng} lat={lat} />
            </Marker>
            <InfoWindow visible={true} closeOnClick={false}>
                <Base.Point lng={lng} lat={lat} />
                <InfoWindow.Title>{site.site}</InfoWindow.Title>
                <InfoWindow.Content>
                    <SiteDetail site={site} />
                </InfoWindow.Content>
            </InfoWindow>
        </Map>
    )
}
