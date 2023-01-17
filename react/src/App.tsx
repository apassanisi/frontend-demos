import { useState } from 'react';
import Counter from './components/01-Counter/Counter';
import ContactForm from './components/02-ContactForm/ContactForm';
import TodoList from './components/03-TodoList/TodoList'
import AccordionApp from './components/04-Accordion/App'

// Should be typed as `JSX.Element`
const componentMap: { [k: string]: any } = {
  'Counter': Counter,
  'ContactForm': ContactForm,
  'TodoList': TodoList,
  'Accordion': AccordionApp
}

function App() {

  const [selectedComponent, setSelectedComponent] = useState('Counter')

  function DynamicComponent() {
    const Component = componentMap[selectedComponent]
    return (
      <Component />
    )
  }

  return (
    <div>
      <h1>Front End Demos</h1>
      <select
        onChange={(e) => setSelectedComponent(e.target.value)}
        id="selectedComponent">
        <option value="none">Select an option</option>
        {
          Object.keys(componentMap).map((component, index) => {
            return (
              <option key={index} value={component}>{component}</option>
            )
          })
        }
      </select>
      <DynamicComponent />
    </div>
  );
}

export default App;
