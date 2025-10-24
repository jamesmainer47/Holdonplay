'use client';

import { useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  birthdate: string;
  role: string;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      const text = await res.text(); // <-- get raw response
      console.log("Raw API response:", text);

      const data = JSON.parse(text); // try parsing manually
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);


  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-4 bg-gray-100 rounded shadow">
              <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
