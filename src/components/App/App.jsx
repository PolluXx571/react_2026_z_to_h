import { useState, useEffect } from 'react';
import './App.css';

function App() {
      const [text, setText] = useState('');
      const [todos, setTodos] = useState(() => {
            const savedTodos = localStorage.getItem('todos');
            return savedTodos ? JSON.parse(savedTodos) : [];
      });

      const [editingIndex, setEditingIndex] = useState(null);
      const [editText, setEditText] = useState('');
      
      useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

      const addTask = () => {
            if (!text.trim()) return;

            setTodos((prev) => [
                  ...prev,
                  {
                        text,
                        completed: false,
                  },
            ]);

            setText('');
      };

      const deleteTodo = (index) => {
            setTodos((prev) => prev.filter((_, i) => i !== index));
      };

      const completeTodo = (index) => {
            setTodos((prev) =>
                  prev.map((todo, i) =>
                        i === index
                              ? {
                                      ...todo,
                                      completed: !todo.completed,
                                }
                              : todo,
                  ),
            );
      };

      const editTodo = (index) => {
            setEditingIndex(index);
            setEditText(todos[index].text);
      };

      const saveTodo = (index) => {
            if (!editText.trim()) return;

            setTodos((prev) =>
                  prev.map((todo, i) =>
                        i === index
                              ? {
                                      ...todo,
                                      text: editText,
                                }
                              : todo,
                  ),
            );

            setEditingIndex(null);
            setEditText('');
      };

      const cancelEdit = () => {
            setEditingIndex(null);
            setEditText('');
      };

      return (
            <div className='min-h-screen bg-slate-100 flex justify-center pt-20'>
                  <div className='w-full max-w-2xl bg-white rounded-xl shadow-lg p-6'>
                        <h1 className='text-4xl font-bold text-center mb-8 text-slate-800'>ToDo App</h1>

                        <div className='flex gap-3 mb-6'>
                              <input
                                    type='text'
                                    value={text}
                                    placeholder='Enter your plan...'
                                    className='flex-1 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    onChange={(e) => setText(e.target.value)}
                              />

                              <button
                                    type='button'
                                    className='bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg font-medium active:scale-95 transition-all'
                                    onClick={addTask}
                              >
                                    Add
                              </button>
                        </div>

                        <ul className='space-y-3'>
                              {todos.map((todo, index) => (
                                    <li
                                          key={index}
                                          className='flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm'
                                    >
                                          {editingIndex === index ? (
                                                <>
                                                      <input
                                                            value={editText}
                                                            onChange={(e) => setEditText(e.target.value)}
                                                            className='flex-1 border border-gray-300 rounded-lg px-3 py-2 mr-4'
                                                      />

                                                      <div className='flex gap-2'>
                                                            <button
                                                                  onClick={() => saveTodo(index)}
                                                                  className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg'
                                                            >
                                                                  Save
                                                            </button>

                                                            <button
                                                                  onClick={cancelEdit}
                                                                  className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg'
                                                            >
                                                                  Cancel
                                                            </button>
                                                      </div>
                                                </>
                                          ) : (
                                                <>
                                                      <span
                                                            className={`font-medium ${
                                                                  todo.completed
                                                                        ? 'line-through text-gray-400'
                                                                        : 'text-slate-700'
                                                            }`}
                                                      >
                                                            {todo.text}
                                                      </span>

                                                      <div className='flex gap-2'>
                                                            <button
                                                                  onClick={() => editTodo(index)}
                                                                  className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg active:scale-95 transition-all'
                                                            >
                                                                  Edit
                                                            </button>

                                                            <button
                                                                  onClick={() => completeTodo(index)}
                                                                  className='bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg active:scale-95 transition-all'
                                                            >
                                                                  ✓
                                                            </button>

                                                            <button
                                                                  onClick={() => deleteTodo(index)}
                                                                  className='bg-rose-500 hover:bg-rose-600 text-white p-2 rounded-lg active:scale-95 transition-all'
                                                            >
                                                                  ✕
                                                            </button>
                                                      </div>
                                                </>
                                          )}
                                    </li>
                              ))}
                        </ul>
                  </div>
            </div>
      );
}

export default App;
