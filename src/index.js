import React from 'react'
import ReactDOM from 'react-dom'
import Sites from './Sites'
// for css load order, we place css import here
import 'milligram/dist/milligram.css'
import './sites-rewrites.css'
import './siteMapFix.css'

ReactDOM.render(<Sites />, document.getElementById('app'))
