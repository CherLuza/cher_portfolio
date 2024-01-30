
import React, { useState } from 'react'

import '../styles/components/askuser.sass'

const AskUser = () => {
 const [user, setUser] = useState('')

 const handleNameChange = () => {
  const name = prompt("Qual é o seu nome?");
  setUser(name);

  // Aqui você pode fazer qualquer coisa que precise com o nome, como exibir um alerta ou enviá-lo para um servidor, etc.
  alert(`${name}, seja bem-vindo(a) ao meu Portfólio. Sinta-se à vontade!`)
  console.log(name)
 }

 return (
  <div>
   <button className="btn-askuser" onClick={handleNameChange}>Qual é o seu nome?</button>
   {user && <p className="nameuser">Olá, {user}!</p>}
  </div>
 )
}

export default AskUser
