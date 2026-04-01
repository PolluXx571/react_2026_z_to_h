import React, { useState } from 'react';
import emailCheck from './useFeatures';

function Validation() {
      const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            schoolCloseTime: '',
      });

      const [isEmailValid, setIsEmailValid] = useState(true);
      const [isSubmitted, setIsSubmitted] = useState(false); // Başarı mesajı için
      const [hasError, setHasError] = useState(false); // Genel hata mesajı için

      const handleChange = (e) => {
            const { name, value } = e.target;

            // Her değişiklikte başarı mesajını saklayalım ki kullanıcı yeni bir şey yazınca kaybolsun
            setIsSubmitted(false);
            setHasError(false);

            setFormData((prev) => ({
                  ...prev,
                  [name]: value,
            }));

            if (name === 'email') {
                  if (value === '') {
                        setIsEmailValid(true);
                  } else {
                        setIsEmailValid(emailCheck(value));
                  }
            }
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            // Basit bir kontrol: Tüm alanlar dolu mu, email geçerli mi ve şifreler eşleşiyor mu?
            const allFieldsFilled = Object.values(formData).every((val) => val !== '');
            const isPasswordMatch = formData.password === formData.confirmPassword;

            if (allFieldsFilled && isEmailValid && isPasswordMatch) {
                  setIsSubmitted(true);
                  setHasError(false);
                  console.log('Veriler gönderildi:', formData);
            } else {
                  setHasError(true);
                  setIsSubmitted(false);
            }
      };

      const handleClear = () => {
            setFormData({
                  fullName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  schoolCloseTime: '',
            });
            setIsEmailValid(true);
            setIsSubmitted(false);
            setHasError(false);
      };

      return (
            <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
                  <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                        <h2 className='text-2xl font-bold mb-6 text-gray-800 text-center'>Registration Form 📝</h2>

                        <div className='space-y-4'>
                              <input
                                    type='text'
                                    name='fullName'
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder='Name and Surname'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                              />

                              <div>
                                    <input
                                          type='email'
                                          name='email'
                                          value={formData.email}
                                          onChange={handleChange}
                                          placeholder='Email Address'
                                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                                isEmailValid
                                                      ? 'border-gray-300 focus:ring-blue-500'
                                                      : 'border-red-500 focus:ring-red-500'
                                          }`}
                                    />
                                    {!isEmailValid && (
                                          <p className='text-xs text-red-500 mt-1 ml-1'>
                                                Please enter a valid email address. 📧
                                          </p>
                                    )}
                              </div>

                              <input
                                    type='password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder='Password'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                              />

                              <input
                                    type='password'
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder='Confirm Password'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                              />

                              {formData.password !== formData.confirmPassword && formData.confirmPassword !== '' && (
                                    <p className='text-xs text-red-500 mt-1 ml-1'>Passwords do not match. 🔑</p>
                              )}

                              <select
                                    name='schoolCloseTime'
                                    value={formData.schoolCloseTime}
                                    onChange={handleChange}
                                    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
                              >
                                    <option value=''>School closing time</option>
                                    <option value='15:00'>15:00</option>
                                    <option value='16:00'>16:00</option>
                                    <option value='17:00'>17:00</option>
                              </select>
                        </div>

                        <div className='flex flex-col gap-3 mt-6'>
                              <button
                                    type='submit'
                                    className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold'
                              >
                                    Register
                              </button>
                              <button
                                    type='button'
                                    onClick={handleClear}
                                    className='w-full bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition-colors font-semibold'
                              >
                                    Clear Form
                              </button>
                        </div>

                       
                        <div className='mt-4 text-center text-sm font-medium'>
                              {hasError && <div className='text-red-600'>Please check the form fields ❌</div>}
                              {isSubmitted && (
                                    <div className='text-green-600'>The data has been successfully submitted ✅</div>
                              )}
                        </div>
                  </form>
            </div>
      );
}

export default Validation;
