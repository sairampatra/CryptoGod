import { Line } from "react-chartjs-2";
import Alert from "../Alert/Alert";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
function CoinInfo({ historicdata, setdays, setcoininterval, days, currency }) {
  let chartDays = [
    {
      label:'24 Hours',
      value: 1
    }, {
      label:'7 Days',
      value: 7
    }, {
      label:'69 Days',
      value: 69
    }, {
      label:'90 Days',
      value: 90
    }, {
      label:'365 Days',
      value: 365
    },
  ]


  Chart.register(CategoryScale);
  if (!historicdata) {
    return <Alert message="errorfetching the data" type="info" />;
  }
  const handleSelectChange = (e) => {
    setdays(e.target.value) 
  }
  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 w-full md:w-3/4 ">
     <div className="h-[400px] w-full">
     <Line
        data={{
          labels: historicdata?.prices?.map((coinPrice) => {
            let date = new Date(coinPrice[0]);
                                let time = date.getHours()>12?`${date.getHours() - 12}:${date.getMinutes()} PM`:
            `${date.getHours()}:${date.getMinutes()} AM`;
            return days===1 ? time:date.toLocaleDateString();
          }),
          datasets: [
            {
              label: `price (Past ${days} ${days<=1 ? 'day':'days'}) in ${currency.toUpperCase()} `,
              data: historicdata.prices.map((coinPrice) => coinPrice[1]),
            },
          ],

        }}
        options={
            {
                responsive:true,
                maintainAspectRatio:false,
                elements:{
                    point:{
                        // maintain
                        radius:0
                    }
                }
            }
        }
      />
     </div>
      <div className="flex justify-center mt-5 w-full">
      <select className="select select-bordered w-full max-w-xs" onChange={handleSelectChange}>
        {
          chartDays.map((day,index)=>{
            return <option key={index}  value={day.value} selected={days == day.value}>{day.label}</option>
          })
        }
</select>
      </div>
    </div>
  );
}
export default CoinInfo;
