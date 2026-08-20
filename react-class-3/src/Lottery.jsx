import { useState } from "react";
import "./Lottery.css"
import { genTicket,sum } from "./helper";
function Lottery (){
    let[ticket,setTicket]=useState(genTicket(3));
    let isWinning = sum(ticket)===15;
    let buyTicket = ()=>{
        setTicket(genTicket(3));
    }
    return (
        <div className="container">
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket} className="new-ticket">Buy New Ticket</button>
            <h3 className="winner">{isWinning && " Congratulations, you won!"}</h3> 
        </div>
    );
}
export default Lottery;