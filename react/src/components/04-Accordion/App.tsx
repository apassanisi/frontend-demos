import { useState } from 'react';
import Accordion from './Accordion'

const accordionData = [
  {
    title: 'HTML',
    contents: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
  },
  {
    title: 'CSS',
    contents: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
  },
  {
    title: 'JavaScript',
    contents: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
  }
]

function AccordionApp() {
  const [accordions] = useState(accordionData)
  return (
    <div>
      <h2>04. Accordion</h2>
      <div>
        {accordions.map(({ title, contents }, index) => {
          return <Accordion key={index} title={title} contents={contents} />
        })}
      </div>
    </div>
  );
}

export default AccordionApp;
