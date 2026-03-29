const Rendering = () => {
      const userData = [
            { id: 101, name: 'Alice' },
            { id: 102, name: 'Bob' },
            { id: 103, name: 'Charlie' },
      ];

      return (
            <div className='list-container'>
                  <h2>User List</h2>
                  <ul>
                        {userData?.length > 0 ? (
                              userData.map((user) => (
                                    <li key={user.id}>
                                          {user.name}---
                                          {user.id}
                                    </li>
                              ))
                        ) : (
                              <p>No Users</p>
                        )}
                  </ul>
            </div>
      );
};

export default Rendering;
