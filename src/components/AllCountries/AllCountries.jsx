import React, { useState, useEffect} from 'react'
import { apiURL } from '../util/api'

const AllCountries = () => {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const getAllCountries = async()=>{
        try {
            const res = await fetch(`${apiURL}/all`)

            if(!res.ok) throw new Error('Something went wrong unfortunately')

            const data = await res.json()

            console.log(data)

            setCountries(data)
            setIsLoading(false)


        } catch (error) {
            setIsLoading(false)
            setError(error.message)
            
        }
    }

    useEffect(()=>{
      getAllCountries()
    }, [])


  return <div className="all__country__wrapper">
    <div className="country__top"></div>
    <div className="country__bottom">
      {isLoading && !error && <h4>Loading...</h4>}
      {error && !isLoading && <h4>{error}</h4>}

      {
        countries?.map(country=>(
          <div className="country__card">
            <div className="country__img">
              <img src={country.flags.png} alt="country flag" />
            </div>
          </div>
        ))
      }
    </div>
  </div>
}

export default AllCountries