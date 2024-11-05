import React from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line , Bar} from "react-chartjs-2";

import childs_data from "../../data/childs_data.json"
import standars from "../../data/standars.json"

defaults.maintainAspectRatio = false;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 15;
defaults.plugins.title.color = "black";

export const CuidadorInicio = () => {
  return (
    <div className="cuadador__inicio">
        <div className="dataCard BMI">
        <Line
          data={{
            labels: standars.map((data) => data.age),
            datasets: [
              {
                label: "Emilia",
                data: childs_data.map((data) => data.BMI),
                backgroundColor: "#FD8C00",
                borderColor: "#FD8C00",
              },
              {
                label: "Estandar",
                data: standars.map((data) => data.BMI),
                backgroundColor: "black",
                borderColor: "black",
              },
            ]
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "BMI",
              },
            },
          }}
        />
        </div>
        <div className="dataCard Arm">
        <Line
          data={{
            labels: standars.map((data) => data.age),
            datasets: [
              {
                label: "Emilia",
                data: childs_data.map((data) => data.armCircumference),
                backgroundColor: "#FD8C00",
                borderColor: "#FD8C00",
              },
              {
                label: "Estandar",
                data: standars.map((data) => data.armCircumference),
                backgroundColor: "black",
                borderColor: "black",
              },
            ]
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Circurferencia de Brazo",
              },
            },
          }}
        />
        </div>
        <div className="dataCard Head">
        <Line
          data={{
            labels: standars.map((data) => data.age),
            datasets: [
              {
                label: "Emilia",
                data: childs_data.map((data) => data.headCircumference),
                backgroundColor: "#FD8C00",
                borderColor: "#FD8C00",
              },
              {
                label: "Estandar",
                data: standars.map((data) => data.headCircumference),
                backgroundColor: "black",
                borderColor: "black",
              },
            ]
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Circurferencia de Cabeza",
              },
            },
          }}
        />
        </div>
        <div className="dataCard Height">
        <Line
          data={{
            labels: standars.map((data) => data.age),
            datasets: [
              {
                label: "Emilia",
                data: childs_data.map((data) => data.height),
                backgroundColor: "#FD8C00",
                borderColor: "#FD8C00",
              },
              {
                label: "Estandar",
                data: standars.map((data) => data.height),
                backgroundColor: "black",
                borderColor: "black",
              },
            ]
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Altura",
              },
            },
          }}
        />
        </div>
        <div className="dataCard Wheight">
        <Bar
          data={{
            labels: standars.map((data) => data.age),
            datasets: [
              {
                label: "Emilia",
                data: childs_data.map((data) => data.weight),
                backgroundColor: "#FD8C00",
                borderColor: "#FD8C00",
              },
              {
                label: "Estandar",
                data: standars.map((data) => data.weight),
                backgroundColor: "black",
                borderColor: "black",
              },
            ]
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Peso",
              },
            },
          }}
        />
        </div>
    </div>
  )
}

export default CuidadorInicio