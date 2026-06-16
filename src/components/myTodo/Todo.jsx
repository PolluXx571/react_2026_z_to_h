import React, { useState, useEffect } from 'react';
import Header from './Header';
import ListItems from './ListItems';

function Todo() {
      const [todos, setTodos] = useState(() => {
            const savedTodos = localStorage.getItem('my_todos_list');
            return savedTodos
                  ? JSON.parse(savedTodos)
                  : [
                          { id: 1, task: 'English', completed: false },
                          { id: 2, task: 'Japanese', completed: true },
                          { id: 3, task: 'Turkish', completed: false },
                    ];
      });

      const [text, setText] = useState('');
      const [editId, setEditId] = useState(null);

      useEffect(() => {
            localStorage.setItem('my_todos_list', JSON.stringify(todos));
      }, [todos]);

      const addTodo = () => {
            if (!text.trim()) return;
            setTodos((prev) => [
                  ...prev,
                  {
                        id: Date.now(),
                        task: text,
                        completed: false,
                  },
            ]);
            setText('');
      };

      const deleteTodo = (id) => {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
      };

      const toggleTodo = (id) => {
            setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
      };

      
      const startEdit = (id) => {
            setEditId(id);
      };

      const handleTaskChange = (id, newText) => {
            setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, task: newText } : todo)));
      };

      const saveEdit = () => {
            setEditId(null);
      };

      return (
            <div className='min-h-screen bg-sky-200 p-4 flex justify-center items-start'>
                  <div className='w-full max-w-lg mt-10 rounded-xl bg-white p-6 shadow-xl'>
                        <Header text={text} setText={setText} addTodo={addTodo} />
                        <ListItems
                              todos={todos}
                              deleteTodo={deleteTodo}
                              toggleTodo={toggleTodo}
                              editId={editId}
                              startEdit={startEdit}
                              handleTaskChange={handleTaskChange}
                              saveEdit={saveEdit}
                        />
                  </div>
            </div>
      );
}

export default Todo;
