import { Component } from "react";
import { getRetirementChart } from '../utils/charts';

class RetirementChart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.chart = null
    }

    componentDidMount() {
      this.ctx = this.canvas.getContext('2d');
      this.chart = getRetirementChart(this.ctx);
    }

    componentWillUpdate(nextProps) {
      const { retirementResults } = nextProps

      const options = {
        'poupança': {
          backgroundColor: 'rgba(250, 0, 0 ,0.1)',
          pointRadius: 0,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.3)',
          lineTension: 0,
        },
        'renda fixa': {
          backgroundColor: 'rgba(0, 0, 250 ,0.1)',
          pointRadius: 0,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.3)',
          lineTension: 0,
        },
        'renda variável': {
          backgroundColor: 'rgba(0, 250, 0 ,0.1)',
          pointRadius: 0,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.3)',
          lineTension: 0,
        }
      }

      const linesets = retirementResults.map((investiment) => {
        const [label, data] = investiment
        return {
          label: label,
          data: data.timeHistory,
          ...options[label]
        }
      })

      const pointsets = retirementResults.map((investiment) => {
        const [label, data] = investiment
        return {
          label: label,
          data: [{
            x: data.retirement.age / 12,
            y: data.retirement.balance,
          }],
          pointRadius: 3,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 1)',
        }
      })

      this.chart.data = {datasets: [...linesets, ...pointsets]}
      this.chart.update()
    }

    render() {
      return (
        <canvas
          ref={canvas => {
            this.canvas = canvas;
          }}
          width="4"
          height="3"
        />
      )
    }
}

export default RetirementChart;
