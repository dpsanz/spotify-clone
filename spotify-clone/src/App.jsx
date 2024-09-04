function App() {
  return (
    <div className="bg-pink-700 h-screen w-screen flex flex-col">
      <div className="bg-pink-500 h-16 w-screen"></div>
      <div className="bg-gray-300 flex-1 w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4 overflow-auto">
        <div className="bg-cyan-400 flex flex-col items-center justify-around p-4">
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
          <div className="bg-pink-500 h-24 w-24"></div>
        </div>
        
        <div className="bg-gray-300 flex flex-col items-center justify-around p-4">
          <div className="bg-pink-500 h-24 w-24 mb-4">
            <div className="bg-cyan-400 h-6 w-12 mx-auto"></div>
          </div>
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
        </div>

        <div className="bg-gray-300 flex flex-col items-center justify-around p-4">
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
        </div>

        <div className="bg-gray-300 flex flex-col items-center justify-around p-4">
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
        </div>

        <div className="bg-gray-300 flex flex-col items-center justify-around p-4">
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
          <div className="bg-pink-500 h-24 w-24 mb-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
