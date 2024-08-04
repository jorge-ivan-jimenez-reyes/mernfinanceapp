import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

interface FormData {
  month: string;
  revenue: string;
  expenses: string;
}

const Row1 = ({ formData }: { formData: FormData }) => {
  const { palette } = useTheme();

  const data = useMemo(() => {
    if (formData) {
      return [
        {
          name: formData.month,
          revenue: Number(formData.revenue),
          expenses: Number(formData.expenses),
        },
      ];
    }
    return [];
  }, [formData]);

  const maxRevenue = data.length > 0 ? Math.max(...data.map(d => d.revenue)) : 0;

  return (
    <DashboardBox gridArea="a">
      <BoxHeader
        title="Revenue and Expenses"
        subtitle="top line represents revenue, bottom line represents expenses"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{ fontSize: "10px" }}
          />
          <YAxis
            tickLine={false}
            axisLine={{ strokeWidth: "0" }}
            style={{ fontSize: "10px" }}
            domain={[0, maxRevenue + 5000]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            dot={true}
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            dot={true}
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#colorExpenses)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Row1;
