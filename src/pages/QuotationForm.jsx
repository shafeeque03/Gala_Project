import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  ShoppingCart, 
  FileText, 
  Tag, 
  DollarSign 
} from 'lucide-react';

const QuotationForm = () => {
  const [rows, setRows] = useState([{ item: '', description: '', quantity: 1, price: 0, totalPrice: 0 }]);
  const [professionTax, setProfessionTax] = useState(0);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;

    if (name === 'quantity' || name === 'price') {
      updatedRows[index].totalPrice = 
        (parseFloat(updatedRows[index].quantity) || 0) * 
        (parseFloat(updatedRows[index].price) || 0);
    }

    setRows(updatedRows);
  };

  const addNewRow = () => {
    setRows([...rows, { item: '', description: '', quantity: 1, price: 0, totalPrice: 0 }]);
  };

  const removeRow = (indexToRemove) => {
    setRows(rows.filter((_, index) => index !== indexToRemove));
  };

  const subtotal = rows.reduce((total, row) => total + row.totalPrice, 0);
  const totalWithTax = (subtotal + (subtotal * (professionTax / 100))).toFixed(2);

  return (
    <div className="min-h-screen bg-white font-['Inter'] antialiased">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] p-6 flex items-center">
            <ShoppingCart className="mr-4 text-white" size={32} />
            <h2 className="text-4xl font-bold text-white tracking-tight">Invoice Generator</h2>
          </div>
          
          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    {['Item', 'Description', 'Qty', 'Price', 'Total', 'Action'].map((header, index) => (
                      <th 
                        key={index} 
                        className="p-4 text-left text-gray-500 font-semibold uppercase tracking-wider text-sm"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr 
                      key={index} 
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4">
                        <input
                          type="text"
                          name="item"
                          value={row.item}
                          onChange={(e) => handleInputChange(index, e)}
                          className="w-full border-b border-gray-300 focus:border-[#6a11cb] text-gray-800 py-2 transition-colors placeholder-gray-400"
                          placeholder="Item name"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="text"
                          name="description"
                          value={row.description}
                          onChange={(e) => handleInputChange(index, e)}
                          className="w-full border-b border-gray-300 focus:border-[#6a11cb] text-gray-800 py-2 transition-colors placeholder-gray-400"
                          placeholder="Description"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          name="quantity"
                          value={row.quantity}
                          onChange={(e) => handleInputChange(index, e)}
                          className="w-24 border-b border-gray-300 focus:border-[#6a11cb] text-gray-800 py-2 transition-colors"
                          min="1"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          name="price"
                          value={row.price}
                          onChange={(e) => handleInputChange(index, e)}
                          className="w-24 border-b border-gray-300 focus:border-[#6a11cb] text-gray-800 py-2 transition-colors"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="p-4 font-bold text-gray-800">
                        ${row.totalPrice.toFixed(2)}
                      </td>
                      <td className="p-4">
                        {rows.length > 1 && (
                          <button 
                            onClick={() => removeRow(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <label className="flex items-center text-gray-700">
                Tax Rate (%):
                <input
                  type="number"
                  value={professionTax}
                  onChange={(e) => setProfessionTax(e.target.value)}
                  className="ml-2 w-20 border-b border-gray-300 focus:border-[#6a11cb] text-gray-800 py-2 transition-colors"
                  min="0"
                  max="100"
                  placeholder="Tax %"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap justify-between items-center gap-4">
              <button 
                onClick={addNewRow}
                className="flex items-center bg-[#6a11cb] text-white px-4 py-2 rounded-lg hover:bg-[#5a0fc4] transition-colors shadow-md hover:shadow-lg"
              >
                <Plus className="mr-2" size={20} /> Add Item
              </button>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-700">
                  Subtotal: <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </p>
                <p className="text-xl font-bold text-gray-700">
                  Total (with Tax): <span className="text-gray-900">${totalWithTax}</span>
                </p>
              </div>
              <button 
                className="flex items-center bg-[#2575fc] text-white px-4 py-2 rounded-lg hover:bg-[#1565fc] transition-colors shadow-md hover:shadow-lg"
              >
                <Plus className="mr-2" size={20} /> Generate Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationForm;