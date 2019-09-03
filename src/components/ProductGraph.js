import React from 'react'

const yAxisLine = [
  '9%', '18%', '27%', '36%', '45%', '54%', '63%', '72%', '81%', '90%',
]

const getMax = data => {
  let max = 0
  data.forEach(item => {
    if (item.number > max) {
      max = item.number
    }
  })
  return max
}

const ProductGraph = props => {
  const max = getMax(props.data)
  return (
    <div className="earning-graph data-panel">
      <svg
        width="100%" height="100%"
      >
        <text></text>
        <g style={{'position': 'absolute', 'top': '0', 'left': '0'}}>
          {
            yAxisLine.map((y, index) => {
              return (
                <g key={index}>
                  <text x="25px" y={y}
                    style={{'fontSize': '10px', 'fill': '#aaaaaa', 'transform': `translate(0, 3px)`, 'textAlign': 'right'}}
                  >
                    {
                      index <= 0 ? max
                      : index === yAxisLine.length - 1 && 0
                    }
                  </text>
                  <line x1="49px" y1={y} x2="98%" y2={y} style={{'stroke': '#27272a', 'strokeWidth': '1'}} />      
                </g>
              )
            })
          }
        </g>
        <g style={{ 'transform': `translate(58px, 162px)` }}>
          <polyline
            points={
              props.data.map((item, index) => {
                return (
                  index * 50 + "," + item.number * 500 / 180
                )
              })
            }
            style={{'fill': 'none', 'stroke': '#ffdc6c', 'strokeWidth': '1', 'transform': 'scaleX(-1) rotate(180deg)'}} 
          />
        </g>
      </svg>  
    </div>
  )
}

export default ProductGraph