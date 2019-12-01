import React, { useState } from 'react'
var groupBy = require('lodash.groupby')

function SitePicker(props) {
    const { sites, onSiteSelected } = props
    const [pickerVisible, setPickerVisible] = useState(false)

    const _onSiteSelected = (site) => {
        setPickerVisible(false)
        onSiteSelected(site)
    }

    return (
        <div>
            <button
                className="button button-outline"
                style={{
                    width: '100%'
                }}
                onClick={() => setPickerVisible(!pickerVisible)}
            >选择服务站点</button>
            {pickerVisible && _showPicker(sites, _onSiteSelected)}
        </div>
    )
}

function _showPicker(sites, onSiteSelected) {
    // here return:
    // {
    //     townA: [
    //         {SiteA}
    //         {SiteB}
    //     ],
    //     townB: [
    //         ...
    //     ]
    // }
    const obj = groupBy(sites, 'town')
    return Object.keys(obj).map((town, i) => {
        const _sitesInTown = obj[town]
        return (
            <div key={i}>
                <strong>{town}</strong>
                <div className="row">
                    <div className="column">
                        <ul>
                            {SiteList(_sitesInTown, onSiteSelected)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    })
}

function SiteList(sites, onSiteSelected) {
    return sites.map((site, i) => (
        <li key={i} onClick={() => { onSiteSelected(site) }}>{site.site}</li>
    ))
}

export default SitePicker
