export default function Die({die, holdDie}) {
    return (
        <div 
            className={die.isHeld ? "die held" : "die"} 
            onClick={() => holdDie(die.id)}
        >
            {die.value}
        </div>
    )
}