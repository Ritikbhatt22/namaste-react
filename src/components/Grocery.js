const Grocery = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-center text-2xl font-bold mb-6">Welcome! 🎉</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded shadow-lg">Box 1</div>
                <div className="bg-green-500 text-white p-4 rounded shadow-lg col-span-2">Wide Box 2</div>
                <div className="bg-red-500 text-white p-4 rounded shadow-lg">Box 3</div>
            </div>
        </div>
    );
}

export default Grocery;