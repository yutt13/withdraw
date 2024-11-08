import React, { useState } from 'react';

const App = () => {
  const [balance, setBalance] = useState(10000); // เริ่มต้นด้วยยอดเงิน 10,000 บาท
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [history, setHistory] = useState([]);

  // ฟังก์ชันสำหรับถอนเงิน
  const handleWithdraw = (amount) => {
    // รวมเงื่อนไขตรวจสอบการถอน
    if (amount > balance - 1) {
      alert("ไม่สามารถถอนเงินเกินจํานวนที่มีอยู่ในบัญชีได้");
      return;
    }
    
    // หากผ่านเงื่อนไขให้ถอนเงิน
    const newBalance = balance - amount;
    setBalance(newBalance);
    setHistory([{ amount, balance: newBalance }, ...history]);
  };

  // ฟังก์ชันสำหรับการถอนเงินตามจำนวนที่ผู้ใช้กรอก
  const handleCustomWithdraw = () => {
    handleWithdraw(Number(withdrawAmount));
    setWithdrawAmount(0); // รีเซ็ตฟิลด์ป้อนข้อมูล
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 flex space-x-8">
        
        {/* ส่วนระบบถอนเงิน */}
        <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-2">ระบบถอนเงิน</h2>
          <p className="mb-6">
            ยอดเงินคงเหลือ: <span className="font-bold text-green-600">{balance} บาท</span>
          </p>
          
          {/* ปุ่มถอนเงินตามจำนวนที่กำหนด */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button onClick={() => handleWithdraw(100)} className="bg-[#77F4BF] text-white p-2 rounded-lg text-lg">ถอน 100 บาท</button>
            <button onClick={() => handleWithdraw(500)} className="bg-green-500 text-white p-2 rounded-lg text-lg">ถอน 500 บาท</button>
            <button onClick={() => handleWithdraw(1000)} className="bg-green-500 text-white p-2 rounded-lg text-lg">ถอน 1,000 บาท</button>
            <button onClick={() => handleWithdraw(5000)} className="bg-green-500 text-white p-2 rounded-lg text-lg">ถอน 5,000 บาท</button>
          </div>

          {/* ฟิลด์สำหรับใส่จำนวนเงินที่ต้องการถอนเอง */}
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="จำนวนเงินที่ต้องการถอน"
            className="w-full p-3 mb-4 border rounded-lg text-lg"
          />
          <button
            onClick={handleCustomWithdraw}
            className="bg-blue-500 text-white w-full p-3 rounded-lg text-lg font-semibold"
          >
            ถอนเงิน
          </button>
        </div>

        {/* ส่วนประวัติการถอนเงิน */}
        <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">ประวัติการถอนเงิน</h2>
          <ul className="space-y-4">
            {history.map((entry, index) => (
              <li key={index} className="flex justify-between border-b border-gray-200 pb-2">
                <span>ถอน: {entry.amount} บาท</span>
                <span>คงเหลือ: {entry.balance} บาท</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
