function generateKundli() {
  const svgObject = document.getElementById("kundliChart");

  svgObject.addEventListener("load", function () {
    const svg = svgObject.contentDocument;

    svg.getElementById("h1").textContent = "Su";
    svg.getElementById("h2").textContent = "Mo";
    svg.getElementById("h3").textContent = "Ma";
    svg.getElementById("h4").textContent = "Me";
    svg.getElementById("h5").textContent = "Ju";
    svg.getElementById("h6").textContent = "Ve";
    svg.getElementById("h7").textContent = "Sa";
    svg.getElementById("h8").textContent = "Ra";
    svg.getElementById("h9").textContent = "Ke";
  });

  alert("✅ Kundli Generated (Demo)");
}
