async function loadSitesData() {
    const api = window.LIBREROSE.apiUrl
    if (!api) {
        console.error('window.LIBREROSE.apiUrl MUST be set')
        return _emptyItems()
    }
    try {
        const res = await fetch(api)
        const data = await res.json()
        return data.towns || []
    } catch (e) {
        return _emptyItems()
    }
}

function _emptyItems() {
    return []
}

export default loadSitesData
