import './App.css'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './redux/features/counter/counterSlice'
import { AppDispath } from './redux/store'
import { useAppSelector } from './redux/hook';

function App() {

  const dispatch : AppDispath = useDispatch();
  const count = useAppSelector((state) => state.counter.count);
   
  const handleIncrement = (amount:number) => {
    dispatch(increment(amount))
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  console.log(count)

  return (
    <>
      Hi I am react app
      <p><b>Count is :</b></p>
      <p><b>{count}</b></p>
      <button onClick={()=>handleIncrement(5)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
