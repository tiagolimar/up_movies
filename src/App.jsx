function App() {
  return (
    <>
      <div className="container pt-4">
        <h2>Cadastro de Filmes</h2>
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Título
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Sinopse
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Votos
            </label>
            <input type="text" className="form-control" />
          </div>
          <button className="btn btn-dark">Adicionar</button>
        </form>
      </div>
    </>
  );
}

export default App
