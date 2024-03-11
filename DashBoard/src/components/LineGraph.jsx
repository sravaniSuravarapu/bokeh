import React, { useEffect, useRef } from 'react';
import * as Bokeh from 'bokehjs/build/bokeh';

const LineGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Prepare some data
    const x = [1, 2, 3, 4, 5];
    const y = [6, 7, 2, 4, 5];

    // Create a new plot with a title and axis labels
    const p = new Bokeh.Plot({
      title: 'Simple line example',
      x_axis_label: 'x',
      y_axis_label: 'y',
      width: 500,
      height: 500
    });

    // Add a line renderer with legend and line thickness
    p.line(x, y, { legend_label: 'Temp.', line_width: 2 });

    // Add the plot to the chart div
    const chart = chartRef.current;
    chart.appendChild(p.panel.el);

    // Clean up on unmount
    return () => {
      chart.removeChild(p.panel.el);
    };
  }, []);

  return <div ref={chartRef}></div>;
};

export default LineGraph;