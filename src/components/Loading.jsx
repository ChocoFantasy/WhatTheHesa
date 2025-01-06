import React from "react";

const Loading = () => {

  return (
    <div className="loading-screen">
      <div className="loading-animation">
        {/* 這裡可以是 LOGO 或轉圈動畫 */}
        <img
          src="/ThatsSaHesa/images/Home/Loading.jpg" // 替換為你的 LOGO 或動畫圖片
          alt="Loading..."
        />
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <p>載入中...</p>
      </div>
    </div>
  );
};

export default Loading;