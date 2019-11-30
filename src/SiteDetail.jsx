import React from 'react'

// return html string
function siteDetail(props) {
    const { imageUrl, site, code, contact, phone, address } = props.site

    const imageContainer = imageUrl &&
        <div className="column">
            <img
                style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover'
                }}
                src={imageUrl} />
        </div>

    return (
        <div style={{
            width: '400px',
            height: '200px'
        }}>
            <div className="row">
                ${imageContainer}
                <div className="column">
                    {site && <div>名称：{site}</div>}
                    {code && <div>编码：{code}</div>}
                    {contact && <div>联系人：{contact}</div>}
                    {phone && <div>电话：{phone}</div>}
                    {address && <div>地址：{address}</div>}
                </div>
            </div>
        </div>
    )
}

export default siteDetail
