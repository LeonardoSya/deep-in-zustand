import { create, StateCreator } from 'zustand'

// 1. 定义 store 的类型
interface CounterStore {
  count: number
  increment: () => void
  decrement: () => void
}

// 2. 创建 store
const useStore = create<CounterStore>((set: (fn: (state: CounterStore) => CounterStore) => void) => ({
  count: 0,
  increment: () => set((state: CounterStore) => ({ ...state, count: state.count + 1 })),
  decrement: () => set((state: CounterStore) => ({ ...state, count: state.count - 1 }))
}))

// 3. 在组件中使用 store
function App() {
  const { count, increment, decrement } = useStore()

  return (
    <div>
      <h1>计数器: {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

export default App
