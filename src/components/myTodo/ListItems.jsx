import React from 'react';

function ListItems({ todos, deleteTodo, toggleTodo, editId, startEdit, handleTaskChange, saveEdit }) {
      return (
            <div className='w-full'>
                  <ul className='space-y-4 mt-6'>
                        {todos.map((todo) => {
                              const isCurrentEditing = todo.id === editId;

                              return (
                                    <li
                                          key={todo.id}
                                          className={`flex items-center justify-between w-full rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 ${
                                                isCurrentEditing
                                                      ? 'bg-indigo-50 border border-indigo-200'
                                                      : 'bg-blue-100'
                                          }`}
                                    >
                                          <div className='flex items-center gap-5 w-full mr-4'>
                                                <button
                                                      className={`p-2 rounded-xl transition-all duration-200 ${
                                                            todo.completed
                                                                  ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                                                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                                                      }`}
                                                      onClick={() => toggleTodo(todo.id)}
                                                >
                                                      <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            fill='none'
                                                            viewBox='0 0 24 24'
                                                            strokeWidth='1.5'
                                                            stroke='currentColor'
                                                            className='w-6 h-6'
                                                      >
                                                            <path
                                                                  strokeLinecap='round'
                                                                  strokeLinejoin='round'
                                                                  d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
                                                            />
                                                      </svg>
                                                </button>

                                                <div className='w-full'>
                                                      <input
                                                            type='text'
                                                            value={todo.task}
                                                            readOnly={!isCurrentEditing}
                                                            onChange={(e) => handleTaskChange(todo.id, e.target.value)}
                                                            className={`text-lg font-semibold px-2 py-1 rounded-lg w-full focus:outline-none transition-all duration-200 ${
                                                                  isCurrentEditing
                                                                        ? 'bg-white shadow-inner border border-indigo-100 text-slate-900'
                                                                        : 'bg-transparent'
                                                            } ${
                                                                  todo.completed
                                                                        ? 'line-through text-slate-400'
                                                                        : 'text-slate-800'
                                                            }`}
                                                      />
                                                </div>
                                          </div>

                                          <div className='flex items-center gap-1 flex-shrink-0'>
                                                <button
                                                      className={`p-1 rounded-lg transition-all duration-200 ${isCurrentEditing ? 'bg-indigo-200 text-indigo-800' : 'hover:bg-blue-200 hover:text-blue-600'}`}
                                                      onClick={() => startEdit(todo.id)}
                                                >
                                                      <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            fill='none'
                                                            viewBox='0 0 24 24'
                                                            strokeWidth='1.5'
                                                            stroke='currentColor'
                                                            className='w-6 h-6'
                                                      >
                                                            <path
                                                                  strokeLinecap='round'
                                                                  strokeLinejoin='round'
                                                                  d='M6 18 18 6M6 6l12 12'
                                                            />
                                                      </svg>
                                                </button>

                                                <button
                                                      className={`p-1 rounded-lg transition-all duration-200 ${isCurrentEditing ? 'bg-green-500 text-white animate-pulse' : 'hover:bg-green-200 hover:text-green-600'}`}
                                                      onClick={saveEdit}
                                                      disabled={!isCurrentEditing}
                                                >
                                                      <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            fill='none'
                                                            viewBox='0 0 24 24'
                                                            strokeWidth='1.5'
                                                            stroke='currentColor'
                                                            className='w-6 h-6'
                                                      >
                                                            <path
                                                                  strokeLinecap='round'
                                                                  strokeLinejoin='round'
                                                                  d='m4.5 12.75 6 6 9-13.5'
                                                            />
                                                      </svg>
                                                </button>

                                                <button
                                                      className='p-1 rounded-lg hover:bg-red-200 hover:text-red-600 transition-all duration-200'
                                                      onClick={() => deleteTodo(todo.id)}
                                                >
                                                      <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            fill='none'
                                                            viewBox='0 0 24 24'
                                                            strokeWidth='1.5'
                                                            stroke='currentColor'
                                                            className='w-6 h-6'
                                                      >
                                                            <path
                                                                  strokeLinecap='round'
                                                                  strokeLinejoin='round'
                                                                  d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                                                            />
                                                      </svg>
                                                </button>
                                          </div>
                                    </li>
                              );
                        })}
                  </ul>
            </div>
      );
}

export default ListItems;
