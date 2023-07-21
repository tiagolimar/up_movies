import { useState } from "react";
import { InputForm } from "./components/InputForm";
import { Button } from "./components/Button";

function App() {
  const [fields, setFields] = useState({
    'titulo':'',
    'sinopse':'',
    'votos':''
  });

  function updateFilm(event){
    setFields({...fields,[event.target.id]:event.target.value});
  }

  function submit(e){
    e.preventDefault();
    console.log('Submeteu');
  }

  function reset(e){
    e.preventDefault();
    Object.keys(fields).forEach(key => {fields[key] = ''})
    console.log('Resetou');
  }

  function campo(titulo,id_name,fn){
    return(
      <div className="col-md-4">
      <label htmlFor="" className="form-label">{titulo}</label>
      <input 
        type="text"
        value={fields[id_name]}
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
          <InputForm title="Título" width={12} onChange={updateFilm} />
          <InputForm title="Sinopse" width={6} onChange={updateFilm} />
          <InputForm title="Votos" width={6} onChange={updateFilm} />
          <InputForm title="Banana" width={12} onChange={updateFilm} />

          <Button title="Enviar" />
          <Button title="Limpar" />
        </form>
      </div>
      {console.log(fields)}
    </>
  );
}

export default App
