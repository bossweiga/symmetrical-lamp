import React from "react";

const BarChart = ({ data }) => {
  // 数据格式：[{ label: '标签1', value: 10 }, { label: '标签2', value: 20 }, ...]

  // 找出最大值
  const max = Math.max(...data.map((item) => item.value));

  return (
    <div className="bar-chart">
      {data.map((item, index) => (
        <div
          key={index}
          className="bar"
          style={{ height: `${(item.value / max) * 100}%` }}
        >
          <span className="label">{item.label}</span>
          <span className="value">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;