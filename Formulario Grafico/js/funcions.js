var botonEnviar = window.enviar.addEventListener("click",(event) => {
    event.preventDefault();
    let dato1 = window.Datos1.value;
    let dato2 = window.Datos2.value;
    
    let datos = [dato1,dato2];
    
    new Chartist.Bar(
    "#student",
    {
      labels: ["Graduandos de grado", "Graduandos de post-grado"],
      series: [datos],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70  },
    }
  );
});
