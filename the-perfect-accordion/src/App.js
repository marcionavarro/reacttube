import React, { useEffect, useState } from 'react';
import { AccordionContainer, AccordionContent } from './Accordion';
import css from './App.css';

const Accordion = ({ items, multiple }) => {
  const [active, setActive] = useState();
  const [activeArr, setActiveArr] = useState([]);

  let p = [...items].map((item) => {
    return { name: item.name, active: false };
  });

  useEffect(() => {
    setActiveArr(p);
  }, []);

  const handleClick = (name) => {
    setActive(name === active ? null : name);

    if (multiple) {
      let ind = activeArr.findIndex((i) => i.name === name);
      let upd = [...activeArr];
      upd[ind].active = !upd[ind].active;
      setActiveArr(upd);
    }
  }

  return <AccordionContainer>
    {items.map(item => {
      let isActive = active === item.name;
      if (multiple) isActive = activeArr.some((i) => i.name === item.name && i.active)
      return <AccordionContent
        onClick={() => handleClick(item.name)}
        itemName={item.name}
        itemContent={item.content}
        isActive={isActive}
      />
    })}
  </AccordionContainer>
}

const render = () => {
  let items = [
    {
      name: "Header 1",
      content: <div>Lorem ispum dolor sit amet.</div>
    },
    {
      name: "Header 2",
      content: <div>Lorem ispum dolor sit amet.</div>
    },
    {
      name: "Header 3",
      content: <div>Lorem ispum dolor sit amet.</div>
    },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh", display: "grid", placeItems: "center", backgroundColor: "#0a0a0a" }}>
      <Accordion multiple items={items} />
    </div>
  );
}

export default render;