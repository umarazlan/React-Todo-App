import React from 'react'

const todoKey = "reactTodo";

export const getLocalStorageData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    // If storage is empty, "undefined", or null, return an empty array
  if (!rawTodos || rawTodos === "undefined") {
    return [];
  }
    return  JSON.parse(rawTodos);
}

export const setLocalStorageData = (task) => {
  return  localStorage.setItem(todoKey,JSON.stringify(task));
}
