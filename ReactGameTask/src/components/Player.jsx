import { useRef } from "react";
import { useState } from "react";

export default function Player(){
  const player=useRef()
  const [playerName,setPlayerName]=useState()
  function showName(){
    console.log(player.current);//cuurent reference-in tək obyektidir. Bununla həmin reference-a çata bilər. Bu console-da input teqi qaytaracaq 
    console.log(player.current.value);//Bu console-da nputa nə yazmışıqsa onu qaytaracaq 
    setPlayerName(player.current.value)
    player.current.value=""//buttona klik edən kimi, inputun value-si boş olur.
  }
  return (
    <section id="player">
      <h2>Welcome {playerName?playerName:"unknown entity"}</h2>
      <p>
        <input ref={player} type="text"/>
        <button onClick={showName}>Set Name</button>
      </p>
    </section>
  );
}
