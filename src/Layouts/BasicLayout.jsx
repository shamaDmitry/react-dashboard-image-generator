import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container relative py-3 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default BasicLayout;
