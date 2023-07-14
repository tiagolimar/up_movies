import { useState } from "react";

function App() {
  const [fields, setFields] = useState({
    'titulo':'',
    'sinopse':'',
    'votos':''
  })

  function updateFilm(event){
    setFields({...fields,[event.target.id]:event.target.value})
    console.log(fields)
  }

  function campo(titulo,id_name,fn){
    return(
      <div className="col-md-4">
      <label htmlFor="" className="form-label">{titulo}</label>
      <input 
        type="text"
        id={id_name}
        className="form-control" 
        onChange={fn} />
    </div>
    )
  }

  return (
    <>
      <div className="container pt-4">
        <h2>Cadastro de Filmes</h2>
        <form className="row g-3">
          {campo('Título','titulo',updateFilm)}
          {campo('Sinopse','sinopse',updateFilm)}
          {campo('Votos','votos',updateFilm)}
          <button className="btn btn-dark">Adicionar</button>
        </form>
      </div>
    </>
  );
}

export default App
