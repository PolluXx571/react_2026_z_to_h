import React from 'react';

function Header({ text, setText, addTodo }) {
      return (
            <div className='max-w-md mx-auto p-4'>
                  <h1 className='text-3xl font-extrabold text-slate-800 tracking-tight text-center sm:text-left'>
                        MY TODO APP
                  </h1>

                  <div className='flex items-center gap-2 mt-5'>
                        <input
                              type='text'
                              value={text}
                              placeholder='Add any todo...'
                              className='w-full px-4 py-2 text-slate-700 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition duration-200 placeholder-slate-400'
                              onChange={(e) => setText(e.target.value)}
                        />

                        <button
                              className='p-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-green-100 hover:text-green-600 active:scale-95 transition-all duration-200 shadow-sm flex-shrink-0'
                              onClick={addTodo}
                        >
                              <svg
                                    xmlns='http://w3.org'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    className='w-7 h-7'
                              >
                                    <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                                    />
                              </svg>
                        </button>
                  </div>
            </div>
      );
}

export default Header;
