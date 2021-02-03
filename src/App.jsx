import Section from './components/Section';

import './App.css';

import keyPartnersIcon from './assets/key-partners.svg';
import keyActivitiesIcon from './assets/key-activities.svg';
import costStructureIcon from './assets/cost-structure.svg';
import keyResourcesIcon from './assets/key-resources.svg';
import valueIcon from './assets/value.svg';
import clientsIcon from './assets/clients.svg';
import channelsIcon from './assets/channels.svg';

function App() {
  return (
    <div className="App">
      <div className="App__upper App__row">
        <Section title="Aliados Clave" icon={keyPartnersIcon} />

        <div className="App__column">
          <Section title="Actividades Clave" icon={keyActivitiesIcon} />
          <Section title="Recursos Clave" icon={keyResourcesIcon} />
        </div>

        <Section title="Propuesta de Valor" icon={valueIcon} />

        <div className="App__column">
          <Section title="Relación con Clientes" />
          <Section title="Canales" icon={channelsIcon} />
        </div>

        <Section title="Segmento de Clientes" icon={clientsIcon} />
      </div>

      <div className="App__bottom App__row">
        <Section title="Estructura de Costes" icon={costStructureIcon} />
        <Section title="Flujos de Ingreso" />
      </div>
    </div>
  );
}

export default App;
