import { useState } from "react";
import "./Lottery.css"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

function Lottery ({n,winningSum}){
    let[ticket,setTicket]=useState(genTicket(n));
    let isWinning = sum(ticket)=== winningSum;
    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }
    return (
        <div className="container">
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket} className="new-ticket">Buy New Ticket</button>
            <h3 className="winner">{isWinning && " Congratulations, you won!"}</h3> 
        </div>
    );
}
export default Lottery;