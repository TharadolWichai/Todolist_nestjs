'use client';

import dynamic from 'next/dynamic';

const TodoList = dynamic(() => import('@/components/TodoList'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 text-black">
      <TodoList />
    </main>
  );
}
