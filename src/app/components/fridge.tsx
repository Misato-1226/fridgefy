"use client";

import { useState } from "react";
import { MouseEvent } from "react";
import { MdDeleteForever } from "react-icons/md";

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
    <div className="rounded-md p-3 h-full border-2 border-slate-300 w-3/12">
      <p className="text-center">My fridge</p>
      <form className="p-2 flex justify-center items-center w-full">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-inherit"
        />
        <button
          type="submit"
          onClick={handleAdd}
          className="py-2 px-6 rounded-lg text-sm font-medium bg-lime-300 text-teal-800"
        >
          add
        </button>
      </form>
      {items.map((item, index) => (
        <div key={index} className="flex">
          <span>{item}</span>
          <MdDeleteForever
            onClick={() => handleDelete(index)}
            className="size-8"
          />
        </div>
      ))}
    </div>
  );
};

export default Fridge;
