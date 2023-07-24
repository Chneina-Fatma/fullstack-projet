import React from 'react'
import "./shop.css"
import Navbarr from './Navbarr'
import { Link } from 'react-router-dom'
 
import Productt from './Productt'





function Shop() {
  return (
    <div className='camera-hd'>
       <div className="Navvv" >
  <Navbarr/>
</div>

{/* import CRSL */}
{/* <div><Carrousel/></div>  */}

{/* FIN CRSL */}

{/* header */}
<header className="entry-header">
				<h1 className="entry-title">Shop</h1><nav id="thebase-breadcrumbs" aria-label="Breadcrumbs"
 className="thebase-breadcrumbs">
 <div className="thebase-breadcrumb-container"><span>
 <Link to="/" itemprop="url" className="thebase-bc-home">
 <span style={{color:"black",}}>Home</span></Link></span> <span className="bc-delimiter">/</span>
  <span className="thebase-bread-current">Shoping</span></div></nav>			</header>
       {/* {/* fin */}

  
    <Productt/>
    


    
    </div>
  )
}

export default Shop