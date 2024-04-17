"use client";

import { useState } from "react";
import { MouseEvent } from "react";

type ItemType = string;

const Fridge = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [search, setSearch] = useState("");

  const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItems([...items, search]);
    setSearch("");
  };

  const handleDelete = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" onClick={handleAdd}>
          add
        </button>
      </form>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => handleDelete(index)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Fridge;
