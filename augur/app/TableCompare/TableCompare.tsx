// AugurComparisonTable.tsx

import React from "react";
import "./TableCompare.css";

interface AugurComparisonTableProps {
  className?: string;
}

const AugurComparisonTable: React.FC<AugurComparisonTableProps> = ({
  className,
}) => {
  const tabs: ("AUGUR" | "THE OTHER GUYS")[] = ["AUGUR", "THE OTHER GUYS"];

  const renderTableRows = () => {
    const rows = [
      {
        title: "Limits",
        augur: "NO LIMITS",
        otherGuys: "LIMITS ON PAYOUTS, TRADES, DEPOSITS & WITHDRAWALS",
      },
      {
        title: "Fees",
        augur: "1.5%",
        otherGuys: "5-10%",
      },
      {
        title: "Markets",
        augur: "GLOBAL MARKETS",
        otherGuys: "REGIONAL MARKETS",
      },
      {
        title: "Profit",
        augur: "NOT FOR PROFIT",
        otherGuys: "TAKES PROFIT WITH FEES AND SPREAD",
      },
    ];

    return rows.map((row, index) => (
      <tr key={index}>
        <td className="cell">{row.augur}</td>
        <td className="cell">{row.otherGuys}</td>
      </tr>
    ));
  };

  return (
    <div className="bg-white text-customColor">
      <div className={`flex justify-center items-center h-screen ${className}`}>
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              {tabs.map((tab) => (
                <th key={tab} className="bg-blue-500 text-white py-2 px-4">
                  {tab}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
    </div>
   
  );
};

export default AugurComparisonTable;
