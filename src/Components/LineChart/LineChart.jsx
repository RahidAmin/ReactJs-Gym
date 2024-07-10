
import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData =
        [
            { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 90 },
            { id: 2, name: "Bob", math: 85, physics: 88, chemistry: 80 },
            { id: 3, name: "Charlie", math: 92, physics: 90, chemistry: 85 },
            { id: 4, name: "David", math: 74, physics: 70, chemistry: 75 },
            { id: 5, name: "Emma", math: 88, physics: 80, chemistry: 82 },
            { id: 6, name: "Frank", math: 90, physics: 85, chemistry: 88 },
            { id: 7, name: "Grace", math: 95, physics: 92, chemistry: 95 },
            { id: 8, name: "Henry", math: 80, physics: 78, chemistry: 80 },
            { id: 9, name: "Iris", math: 84, physics: 82, chemistry: 85 },
            { id: 10, name: "Jack", math: 76, physics: 75, chemistry: 78 }
        ];


    return (
        <div>
            <LChart width={400} height={400} data={subjectMarksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;