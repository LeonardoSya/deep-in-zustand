import { create } from "zustand";

type Store = {
  count: number;
  add: () => void;
  reduce: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 1,
  add: () => set((state) => ({ count: state.count + 1 })),
  reduce: () => set((state) => ({ count: state.count - 1 })),
}));

export default function App() {
  const { count, add, reduce } = useStore();

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => add()}>+</button>
      <button onClick={() => reduce()}>-</button>
    </>
  );
}
