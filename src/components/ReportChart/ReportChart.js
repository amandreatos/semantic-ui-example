import React from 'react';
import { Bar } from "react-chartjs-2";

const ReportChart = props => {
    let chartOptions = { responsive: true, legend: { position: "bottom" } };

    return <div className="ReportChart">
        <Bar data={this.props.chartData} options={chartOptions} />
      </div>;
};

export default ReportChart;