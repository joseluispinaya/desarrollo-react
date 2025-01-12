import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/features/counter/counterSlice.js'

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
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;
