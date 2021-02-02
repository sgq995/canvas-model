import Section from './components/Section';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__upper App__row">
        <Section title="Aliados Clave" />

        <div className="App__column">
          <Section title="Actividades Clave" />
          <Section title="Recursos Clave" />
        </div>

        <Section title="Propuesta de Valor" />

        <div className="App__column">
          <Section title="Relación con Clientes" />
          <Section title="Canales" />
        </div>

        <Section title="Segmento de Clientes" />
      </div>

      <div className="App__bottom App__row">
        <Section title="Estructura de Costes" />
        <Section title="Flujos de Ingreso" />
      </div>
    </div>
  );
}

export default App;
