import { useState } from "react"
import { FiSearch } from "react-icons/fi";

import "./index.css"

const Navbar = props =>{
    const {activeSearchMethod,searchMethods,getData} = props
    
    const [city,setCity] = useState("")
    const [country,setCountry] = useState("")
    const [zipCode,setZipCode] = useState("")
    // const 
    
    const citySearchinputContainer = (
        <div className="input-container">
            <div className="search-img-container">
                <FiSearch className="icon" />
            </div>
            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="City Name" className="input-bar" required />
        </div>
    ) 
    
    const zipCodeinputContainer = (
        <div className="zip-code-search-container">
            <div className="input-container">
                <div className="search-img-container">
                <FiSearch className="icon" />
                </div>
                <input value={country} onChange={(e)=>setCountry(e.target.value)} type="text" placeholder="Country Code" className="input-bar" required />
            </div><div className="input-container">
                <div className="search-img-container">
                <FiSearch className="icon" />
                </div>
                <input value={zipCode} onChange={(e)=>setZipCode(e.target.value)} type="text" placeholder="Zip Code" className="input-bar" required />
            </div>
        </div>
    )
    
    const searchContainer =  activeSearchMethod=== searchMethods.city ? citySearchinputContainer : zipCodeinputContainer
    
    const search = e =>{
        e.preventDefault()
        
        if(activeSearchMethod===searchMethods.city){
            if(city.trim!==""){
                getData(`?q=${city}`)
            }
        }
        else{
            getData(`?zip=${zipCode},${country}`)
        }
    }
    
    return(
        <nav className="navabr" >
            <form onSubmit={search} className="search-form">
                <div className="search-container">
                    {searchContainer}
                </div>
                <button type="submit" className="search-button">
                    search
                </button>
            </form>
        </nav>
    )
}

export default Navbar