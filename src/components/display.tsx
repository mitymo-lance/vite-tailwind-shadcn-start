<div className="bg-white rounded-lg shadow-md p-6 space-y-6">
  <div className="flex items-center justify-between">
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-800">Current Score</h2>
      <p className="text-4xl font-bold text-blue-600">{count}</p>
    </div>
    <Button 
      variant="default" 
      onClick={() => setCount((count) => count + 1)}
      className="px-6 py-2"
    >
      Increment Score
    </Button>
  </div>

  <div className="border-t pt-4">
    <p className="text-sm text-gray-500">
      Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
    </p>
  </div>
</div>