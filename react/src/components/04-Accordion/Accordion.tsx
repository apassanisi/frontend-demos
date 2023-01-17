import { useState } from 'react';

interface AccordionProps {
  title: string,
  contents: string
}

function Accordion({ title, contents }: AccordionProps) {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <button onClick={() => setCollapsed(!collapsed)}>{title}</button>
      {collapsed ? <p>{contents}</p> : null}
    </div>
  );
}

export default Accordion;
