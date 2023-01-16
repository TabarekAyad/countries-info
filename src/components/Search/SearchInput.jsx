import React, { useState } from 'react'

const SearchInput = ({onSearch}) => {
    const [input, setInput] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()

        onSearch(input)
    }

 return (
    <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Lookup a country'/>
    </form>
  )
}

export default SearchInput
