'use client'
import React from 'react'
import barChartData from '../../../public/chartsData.json'
import {
    PieChart, Pie, Sector, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';





type Props = {}

const page = (props: Props) => {

    const counts = {
        connectedCount: 439,
        disconnectedCount: 392,
        downCount: 10,
        offlineCount: 43
    };

    console.log('Bar Chart data...', barChartData);

    const data = [

        { name: "Connected", value: counts.connectedCount },
        { name: "Down", value: counts.downCount },
        { name: "Offline", value: counts.offlineCount },
        { name: "Disconnected", value: counts.disconnectedCount }
    ];
    const COLORS = ["#51C02F", "#FF3636", "#FBBA3B", "#7A27F1"];







    // const data2 = [
    //     {
    //         name: "Page A",
    //         uv: 4000,
    //         pv: 2400,
    //         amt: 2400
    //     },
    //     {
    //         name: "Page B",
    //         uv: 3000,
    //         pv: 1398,
    //         amt: 2210
    //     },
    //     {
    //         name: "Page C",
    //         uv: 2000,
    //         pv: 9800,
    //         amt: 2290
    //     },
    //     {
    //         name: "Page D",
    //         uv: 2780,
    //         pv: 3908,
    //         amt: 2000
    //     },
    //     {
    //         name: "Page E",
    //         uv: 1890,
    //         pv: 4800,
    //         amt: 2181
    //     },
    //     {
    //         name: "Page F",
    //         uv: 2390,
    //         pv: 3800,
    //         amt: 2500
    //     },
    //     {
    //         name: "Page G",
    //         uv: 3490,
    //         pv: 4300,
    //         amt: 2100
    //     }
    // ];



    const parseDate = (dateString: string) => {
        const dateObj = new Date(dateString)
        const month = dateObj.getMonth()
        const date = dateObj.getDate()
        return `${month}-${date}`
    }


    function transformData(barChartData: any) {
        const transformedData = barChartData.data.map((item: any) => ({
            name: parseDate(item.key),
            energyConsumed: item.totalEnergyConsumed.value,
            revenue: item.totalRevenue.value,
            fee: item.totalStripeFee.value
        }));

        return transformedData;
    }

    const data2 = transformData(barChartData)

console.log('data2=========', data2);

    return (
        <div className='w-fit mx-auto py-10'>

            <h3 className='text-4xl font-medium text-center'>Charts</h3>

            <div className='w-[32rem] py-10 '>
                <h3 className='text-[#0A5963] font-semibold text-3xl'>Charger Status</h3>
                <div className='flex gap-2 py-5 items-center'>
                    <div className=''>
                        <PieChart width={220} height={220} >
                            <Pie
                                data={data}
                                cx={120}
                                cy={100}
                                innerRadius={50}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={0}
                                dataKey="value"
                                startAngle={-90}
                                endAngle={360}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                        </PieChart>

                    </div>

                    <div className=''>
                        <div className='text-gray-500 text-lg  flex flex-col gap-3'>

                            <div className='flex gap-3 items-center'>
                                <div className='w-fit'>
                                    <div className='w-4 h-4 rounded-full bg-[#51C02F]'></div>
                                </div>
                                <div>Connected ({counts.connectedCount})</div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-fit'>
                                    <div className='w-4 h-4 rounded-full bg-[#7A27F1]'></div>
                                </div>
                                <div>Disconnected ({counts.disconnectedCount})</div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='w-fit'>
                                    <div className='w-4 h-4 rounded-full bg-[#FBBA3B]'></div>
                                </div>
                                <div>Offline ({counts.offlineCount})</div>
                            </div>


                            <div className='flex gap-3 items-center'>
                                <div className='w-fit'>
                                    <div className='w-4 h-4 rounded-full bg-[#FF3636]'></div>
                                </div>
                                <div>Down ({counts.downCount})</div>
                            </div>



                        </div>

                    </div>
                </div>




            </div>





            {/*  bar chart */}

            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={data2}

                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}

                >
                    <CartesianGrid strokeDasharray="0" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar width={50} dataKey="fee" fill="#0D615E" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>



            </div>

        </div>
    )
}

export default page