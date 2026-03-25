import React, { useEffect, useState } from 'react';

function Useimg() {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
            let isMounted = true;

            fetch('https://jsonplaceholder.typicode.com/posts')
                  .then((response) => {
                        if (!response.ok) {
                              throw new Error('API error');
                        }
                        return response.json();
                  })
                  .then((data) => {
                        if (isMounted && Array.isArray(data)) {
                              setUsers(data);
                        }
                  })
                  .catch((err) => {
                        if (isMounted) {
                              setError(err.message);
                        }
                  })
                  .finally(() => {
                        if (isMounted) {
                              setLoading(false);
                        }
                  });

            return () => {
                  isMounted = false;
            };
      }, []);

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;

      return (
            <div>
                  <img src='/favicon.svg' alt='icon' />

                  <ul>
                        {users.map((user) => (
                              <li key={user.id}>{user?.title ?? 'No title'}</li>
                        ))}
                  </ul>
            </div>
      );
}

export default Useimg;
