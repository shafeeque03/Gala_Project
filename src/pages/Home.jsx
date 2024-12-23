import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import QuotationCard from "../components/QuotationCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [quotations, setQuotations] = useState([
    {
      _id: "1",
      quotationId: "78878",
      status: "accepted",
      expiryDate: "2024-08-31",
      totalAmount: "78999",
    },
    {
      _id: "2",
      quotationId: "67890",
      status: "rejected",
      expiryDate: "2024-09-15",
      totalAmount: "45999",
    },
    {
      _id: "3",
      quotationId: "34567",
      status: "pending",
      expiryDate: "2024-10-05",
      totalAmount: "12999",
    },
  ]);

  const navigate = useNavigate(); // Initialize navigate function

  // Filter quotations based on search query
  const filteredQuotations = quotations.filter((quotation) =>
    quotation.quotationId.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between max-w-3xl mx-auto mb-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by Quotation ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        {/* Add Quotation Button */}
        <button
          onClick={() => navigate("/add-quotation")} // Navigate to Add Quotation page
          className="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg shadow hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          Add Quotation
        </button>
      </div>

      {/* Quotation List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredQuotations.length > 0 ? (
          filteredQuotations.map((quotation) => (
            <QuotationCard key={quotation._id} value={quotation} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No quotations found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
