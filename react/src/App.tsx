import { useState } from 'react';
import Counter from './components/01-Counter/Counter';
import ContactForm from './components/02-ContactForm/ContactForm';

const demoMap = {
  'Counter': Counter,
  'ContactForm': ContactForm
}


function App() {

  const [selectedComponent, setSelectedComponent] = useState('')
  return (
    <div>
      <h1>Front End Demos</h1>
      <select
        onChange={(e) => setSelectedComponent(e.target.value)}
        id="selectedComponent">
        {
          Object.keys(demoMap).map(component => {
            return (
              <option value={component}>{component}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default App;
