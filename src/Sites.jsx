import React, { useState, useEffect } from 'react'
import SitePicker from './SitePicker'
import SiteMap from './SiteMap'
import loadSitesData from './dataHelper'
import './milligram.sass'

function SiteContainer(props) {
    // all sites
    const [sites, setSites] = useState([])
    // current site
    const [site, setSite] = useState(null)

    const fetchData = async () => {
        let _sites = await loadSitesData()

        setSites(_sites)
        if (_sites.length > 0) {
            switchSite(_sites[0])
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const switchSite = (site) => {
        setSite(site)
    }

    return (
        <div>
            <SitePicker sites={sites} onSiteSelected={switchSite} />
            {site && <SiteMap site={site} />}
        </div>
    )
}

export default SiteContainer
