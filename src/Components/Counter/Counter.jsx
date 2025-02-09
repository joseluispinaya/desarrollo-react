import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/features/counter/counterSlice.js'

const Counter = () => {
    // state.counter.value la palabra counter se declara en store.js
    const count = useSelector((state) => state.counter.value)
    const isLogged = useSelector((state) => state.counter.isLogged)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <span>{isLogged}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span style={{ margin: '0 10px' }}>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                
            </div>
            <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(5))}
                    style={{ marginTop: '10px' }}
                >
                    Increment by Amount
                </button>
        </div>
    )
}

export default Counter;
