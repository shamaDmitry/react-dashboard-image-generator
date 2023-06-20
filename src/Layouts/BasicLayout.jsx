import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto py-3 relative bg-red-500">
        <Outlet />
      </main>
    </div>
  );
}

export default BasicLayout;
