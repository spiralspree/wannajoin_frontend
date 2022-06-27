import axios from 'axios'
import React, {useState} from 'react'

export default function Button() {
  const [buttonText, setButtonText] = useState("Button")
  const url = "https://wannajoin-backend-test.herokuapp.com/"

  const fetchFromBackend = () => {
    axios.get(url)
    .then(response => {
      setButtonText(response.data)}
    )
  }

  return (
    <div onClick={fetchFromBackend}>{buttonText}</div>
  )
}
