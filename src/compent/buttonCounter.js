//a linha de baixo chama um arquivo exclusivo para CSS
import classes from "./buttonCounter.module.css";
import { useState, useEffect } from "react";


function ButtonCounter() {

    const [counter, setCounter] = useState(0);

    function count(counter){
        setCounter(counter + 1);


        //bota sua api aqui, em vez do Fetch pode usar o Axios
        fetch('https://superchat-a5b12-default-rtdb.firebaseio.com/tips.json').then(response => {
            return response.json();
        }).then(data => {
       
            console.log(data);

        });

    }

    return (
        // Na função onClick tive que botar a Arrow function pq ele entrava em loop (não sei pq, encontrei no stack overflow)
        <button onClick={() => count(counter)} className={ classes.button }>Button Clicks: {counter}</button>
        // no React o parametro class é Class name e usa o classes importado do arquivo de CSS
        // poderia usar o parametro 'style' direto também
    )
}

export default ButtonCounter;