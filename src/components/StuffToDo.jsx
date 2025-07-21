import React, { useState } from "react"

export default function StuffToDo() {
  const initialTasks = [
    "Long long longggg hug",
    "Watch that batshit psycho kids horror mobie",
    "Eat icecream for breakfast, lunch and dinnah",
    "visit charminar"
  ]

  const [checked, setChecked] = useState(new Array(initialTasks.length).fill(false))

  const toggleCheck = (index) => {
    const updated = [...checked]
    updated[index] = !updated[index]
    setChecked(updated)
  }

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">📝 Stuff to Do</h2>
      <ul className="space-y-3 max-w-md mx-auto">
        {initialTasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-2 text-sm sm:text-2xl shadow hover:bg-opacity-20 transition-all ${
              checked[index] ? "line-through text-gray-400" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggleCheck(index)}
              className="mr-3 w-10 h-4"
            />
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}
