import React from "react";
import "../index.css";
import Cellsvg from "../cellimg.jsx";
import { useEffect } from "react";

function Cell() {
  function showTooltip(evt, text) {
    var tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "black";
    tooltip.style.left = evt.pageX + 10 + "px";
    tooltip.style.top = evt.pageY + 10 + "px";
  }

  // Prepare organelles
  const organelles = [
    { id: "nucleus", text: "Nucleus: House's the cell's genetic material" },
    {
      id: "nucleus-membrane",
      text: "Nuclear Membrane: Controls flow of genetic material",
    },
    {
      id: "rough-er",
      text: "Rough Endoplasmic Reticulum: Involved in protein synthesis and transportation",
    },
    {
      id: "smooth-er",
      text: "Smooth Endoplasmic Reticulum: Fat synthesis and metabolism of sugars",
    },
    {
      id: "peroxisome",
      text: "Peroxisome: Breakdown of fats and harmful substances",
    },
    {
      id: "golgi-apparatus",
      text: "Golgi Apparatus: Sorts and transports proteins and lipids",
    },
    { id: "mitochondria", text: "Mitochondria: Powerhouse of the cell" },
    { id: "vacuole", text: "Vacuole: Storage of nutrients" },
    {
      id: "cytoplasm",
      text: "Cytoplasm: Healthy environment for cellular activities",
    },
    { id: "centrisome", text: "Centrosome: Involved in cell division" },
    { id: "lysosome", text: "Lysosome: Breaks down macromolecules" },
    {
      id: "membrane",
      text: "Cell Membrane: Regulates substances in and out of the cell",
    },
  ];

  // Call the attachEventListeners function after component mount
  useEffect(() => {
    attachEventListeners();
  }, []); // Empty dependency array ensures that this effect runs only once after component mount

  function attachEventListeners() {
    // Loop through each organelle and add an event listener
    organelles.forEach(({ id, text }) => {
      const organelle = document.getElementById(id);

      if (organelle) {
        organelle.addEventListener("mouseover", function (evt) {
          showTooltip(evt, text);
          console.log(organelle + "detected!");
        });
      } else {
        console.log("No organelle detected!");
      }
    });
  }

  // function checkForNucleus() {
  //   // Check for the presence of the nucleus element
  //   const nucleus = document.getElementById("nucleus");

  //   if (nucleus) {
  //     // Assign mouseover event listener
  //     nucleus.addEventListener("mouseover", function (evt) {
  //       showTooltip(
  //         evt,
  //         "Nucleus: Membrane-bound organelle that houses the cell's genetic material"
  //       );
  //       console.log("nucleus detected!");
  //     });

  //     // Once the event listener is assigned, stop the interval
  //     clearInterval(interval);
  //   }
  // }

  // // Start an interval to periodically check for the nucleus element
  // const interval = setInterval(checkForNucleus, 1000); // Check every 1 second (adjust as needed)

  // 1 is "nucleus"
  // 2 is "nucleus-membrane"
  // 3 is "rough-er"
  // 4 is "peroxisome"
  // 5 is "rough-er" -> this one is very sensitive, might need more
  // 6 is "golgi-apparatus"
  // 7 is ???
  // 8 is "smooth-er"
  // 9 is "mitochondria"
  // 10 is "vacuole"
  // 11 is "cytoplasm"
  // 12 is "lysosome"
  // 13 is "centrisome"
  // 14 is "membrane"

  return (
    <div className="cell-container">
      <div id="tooltip" />
      <Cellsvg className="small-cell-svg" />
    </div>
  );
}

export default Cell;
