

const PoolTable = () => {
    return (
        <div className="w-full overflow-x-scroll mt-4">
            <table className="table-auto w-full border-collapse border border-slate-500">
                <thead className="text-slate-100 py-2 bg-blue-500">
                    <tr>
                        <th className="py-3 font-medium">Song</th>
                        <th className="py-3 font-medium">Artist</th>
                        <th className="py-3 font-medium">Year</th>
                    </tr>
                </thead>
                <tbody className="text-slate-200">
                    <tr>
                        <td className="border border-slate-700 p-3 text-center">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="border border-slate-700 p-3 text-center">Malcolm Lockyer</td>
                        <td className="border border-slate-700 p-3 text-center">1961</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PoolTable