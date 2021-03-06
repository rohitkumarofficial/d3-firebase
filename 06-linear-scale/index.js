const svg = d3.select('svg');
console.log(d3)
d3.json('menu.json').then(data => {

    const y = d3.scaleLinear()
    .domain([0,1000])
    .range([0,500])


    // Join the data  to rect
    const rects = svg.selectAll('rect')
        .data(data)

    rects.attr('width', 50)
        .attr('height', d => y(d.orders))
        .attr('fill', 'orange')
        .attr('x', (d, i) => i * 70)

    // Append enter selection to the DOM
    rects.enter()
        .append('rect')
        .attr('width', 50)
        .attr('height', d => y(d.orders))
        .attr('fill', 'orange')
        .attr('x', (d, i) => i * 70)
})