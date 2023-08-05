const Loader = () => {
  return (
    <div className="relative">
      <div className="w-20 h-20 border-blue-200 border-2 rounded-full"></div>
      <div className="w-20 h-20 border-blue-800 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
    </div>
  );
};

export default Loader;
