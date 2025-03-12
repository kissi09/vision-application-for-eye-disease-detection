
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, Line, ResponsiveContainer } from "recharts";

// Mock data for global trends
const regionData = [
  { name: "North America", value: 15.2 },
  { name: "Europe", value: 12.8 },
  { name: "Asia", value: 23.5 },
  { name: "Africa", value: 18.3 },
  { name: "South America", value: 14.6 },
  { name: "Oceania", value: 9.7 },
];

const trendData = [
  { year: "2018", glaucoma: 8.4, cataract: 12.3, diabetic: 7.2 },
  { year: "2019", glaucoma: 8.8, cataract: 11.9, diabetic: 7.5 },
  { year: "2020", glaucoma: 9.3, cataract: 11.5, diabetic: 8.1 },
  { year: "2021", glaucoma: 10.1, cataract: 11.2, diabetic: 8.8 },
  { year: "2022", glaucoma: 10.9, cataract: 10.8, diabetic: 9.3 },
  { year: "2023", glaucoma: 11.5, cataract: 10.5, diabetic: 9.7 },
];

export const GlobalTrends = () => {
  return (
    <div id="trends">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-400">Global Eye Disease Prevalence</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={regionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: "Prevalence (%)", angle: -90, position: "insideLeft" }} />
                <Tooltip formatter={(value) => [`${value}%`, "Prevalence"]} />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-400">Disease Trends (2018-2023)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={trendData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: "Prevalence (%)", angle: -90, position: "insideLeft" }} />
                <Tooltip formatter={(value) => [`${value}%`, "Prevalence"]} />
                <Legend />
                <Line type="monotone" dataKey="glaucoma" stroke="#3b82f6" name="Glaucoma" />
                <Line type="monotone" dataKey="cataract" stroke="#8b5cf6" name="Cataract" />
                <Line type="monotone" dataKey="diabetic" stroke="#ec4899" name="Diabetic Retinopathy" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
