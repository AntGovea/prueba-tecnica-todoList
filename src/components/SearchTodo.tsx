
export const SearchTodo = () => {
  return (
    <div className="w-full h-[15%] bg-slate-600 flex flex-row px-8 justify-between">
      <input className="w-4/6 m-4 rounded-lg p-2" type="text" placeholder="Buscador..." />
      <button className="bg-slate-100 w-1/6 rounded-lg my-4 text-center ">Buscar</button>
    </div>
  )
}
