import { useState, useEffect } from 'react';
import '../App.css';

const Card = ({ number, selectedCards }) => {
    const [flipped, setFlipped] = useState()
    const [checked, setChecked] = useState()

    const setCardFlipped = () => {
        if (selectedCards?.length !== 2 && !checked) {
            setFlipped(true)
        }
    }

    useEffect(() => {
        let t = setTimeout(() => {
            if (flipped && !checked && (selectedCards?.length === 2 || !selectedCards)) {
                if (selectedCards?.[0] === selectedCards?.[1]) {
                    setChecked(true)
                } else {
                    setFlipped(false)
                }
            }
        }, 2000);

        return () => clearTimeout(t)
    }, [selectedCards, checked, flipped])

    return <div
        onClick={setCardFlipped}
        data-num={number}
        className={`card ${flipped ? 'flipped' : ''}`}
    >
        {(checked || flipped) ? number : ''}
    </div>
}

export default Card;