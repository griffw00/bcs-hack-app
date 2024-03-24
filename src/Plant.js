// import background from "http://localhost:3000/plant.png";
import './Plant.css';
import React, { useState } from 'react';

function Plant() {
  const [textBoxText, setTextBoxText] = useState("");
  const [textBoxText2, setTextBoxText2] = useState("");
  const [textBoxTextTitle, setTextBoxTextTitle] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }

  function clickedFlower() {
    setTextBoxText2("The flower of a plant serves as its reproductive organ, facilitating the process of pollination and subsequent seed production. Through intricate mechanisms, flowers attract pollinators such as bees, butterflies, and birds, ensuring the continuation of the plant species. Their diverse shapes, colors, and scents have evolved to appeal to specific pollinators, highlighting the fascinating co-evolution between plants and their pollinators.");
    setTextBoxTextTitle("Flower");
  }

  function clickedLeaf() {
    setTextBoxText2("A leaf is a vital organ of a plant, typically flat and green, specialized for photosynthesis and transpiration. It plays a crucial role in capturing sunlight and converting it into chemical energy, which fuels the plant's growth and metabolism. Additionally, leaves facilitate gas exchange, allowing carbon dioxide to enter the plant and oxygen to exit during photosynthesis while regulating water loss through transpiration.");
    setTextBoxTextTitle("Leaf");
  }

  function clickedStem() {
    setTextBoxText2("The stem is a fundamental part of a plant's anatomy, providing support and structure while facilitating the transport of water, nutrients, and photosynthetic products throughout the plant. It serves as a conduit for the movement of these substances between the roots and the leaves. Additionally, stems often house specialized tissues such as xylem and phloem, which play essential roles in water and nutrient transport.");
    setTextBoxTextTitle("Stem");
  }

  function clickedRoot() {
    setTextBoxText2("A root system is the underground portion of a plant that anchors it in the soil and absorbs water and nutrients. It consists of various types of roots, including the primary root (often a taproot in dicotyledonous plants) and its lateral branch roots. The root system's architecture can vary depending on the plant species and environmental conditions, with fibrous root systems common in monocotyledonous plants and taproot systems prevalent in dicotyledonous plants.");
    setTextBoxTextTitle("Root System");
  }

  function clickedNode() {
    setTextBoxText2("Nodes are crucial anatomical points along a plant's stem where leaves, branches, and buds emerge. They play a pivotal role in the plant's growth and development, serving as sites for new growth and branching. Additionally, nodes often house specialized structures called axillary buds, which can potentially develop into new shoots or branches, contributing to the plant's overall structure and form.");
    setTextBoxTextTitle("Node");
  }

  function clickedLatBud() {
    setTextBoxText2("Lateral buds are small, dormant structures found in the axils of leaves along a plant's stem. They have the potential to develop into new branches or shoots, contributing to the plant's overall growth and architecture. These buds play a crucial role in lateral branching, allowing the plant to increase its foliage and potentially its reproductive capacity.");
    setTextBoxTextTitle("Lateral Bud");
  }

  function clickedShoot() {
    setTextBoxText2("A shoot is a vital part of a plant's anatomy, typically comprising stems, leaves, and buds. It serves as the primary organ for photosynthesis, enabling the plant to produce energy from sunlight. Shoots also facilitate the transportation of water and nutrients throughout the plant, contributing to its growth and development.");
    setTextBoxTextTitle("Shoot");
  }

  function clickedTaproot() {
    setTextBoxText2("A taproot is a central, primary root that grows vertically downward from the plant's seed. It anchors the plant securely into the soil and aids in water and nutrient absorption from deeper layers. Taproots often exhibit thickening to store nutrients and water, providing the plant with a reserve during periods of drought or scarcity. This root structure is characteristic of many dicotyledonous plants and serves as a vital component of their overall root system architecture.");
    setTextBoxTextTitle("Taproot");
  }

  function clickedLatRoot() {
    setTextBoxText2("A lateral branch root is a secondary root that extends horizontally from the main or taproot of a plant. These roots emerge from the main root's sides and contribute to the plant's stability and ability to absorb water and nutrients from a wider area of soil. Lateral branch roots play a crucial role in anchoring the plant and increasing its surface area for efficient resource uptake, particularly in plants with taproot systems like dicotyledons.");
    setTextBoxTextTitle("Lateral Branch Root");
  }

  function clickedShootSys() {
    setTextBoxText2("The shoot system of a plant encompasses all the above-ground structures, including stems, leaves, flowers, and fruits. It is responsible for photosynthesis, support, reproduction, and the transportation of water, nutrients, and sugars throughout the plant. The shoot system's architecture varies widely among different plant species, reflecting adaptations to various environmental conditions and ecological niches.");
    setTextBoxTextTitle("Shoot System");
  }


  function handleMouseEnter() { 
    setTextBoxText("Flower");
  }
  
  function handleMouseLeave() { 
    setTextBoxText("");
  }

  function handleMouseEnterLeaf() { 
    setTextBoxText("Leaf");
  }

  function handleMouseEnterStem() { 
    setTextBoxText("Stem");
  }

  function handleMouseEnterRoot() { 
    setTextBoxText("Root System");
  }

  function handleMouseEnterNode() { 
    setTextBoxText("Node");
  }

  function handleMouseEnterLatBud() { 
    setTextBoxText("Lateral Bud");
  }

  function handleMouseEnterShoot() { 
    setTextBoxText("Shoot");
  }

  function handleMouseEnterTaproot() { 
    setTextBoxText("Taproot");
  }

  function handleMouseEnterLatRoot() { 
    setTextBoxText("Lateral Branch Root");
  }

  function handleMouseEnterShootSys() { 
    setTextBoxText("Shoot System");
  }


  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          LET'S LEARN ABOUT PLANTS
        </p>
        <div className="textbox" style={{ top: mousePosition.y, left: mousePosition.x }}>
          {textBoxText}
        </div>
        <div className="textboxRight">{textBoxText2}</div>
        <div className="textboxTitle">{textBoxTextTitle}</div>
        {/* <div> */}
        {/* <img
        src="https://images.edrawmax.com/article/science-diagrams/plant/parts-of-plant.jpg"
        alt="react logo"
      /> */}
        {/* <div style={{ backgroundImage: "url(/plant.png)" }}>
          Hello World
        </div> */}
        {/* <button onClick={clicked1}>Item1 </button>
        </div>
        <div>
          <button style={{ display: "none" }}>Hidden Button</button>
        </div> */}
          <div className="image-container">
          <img src="plant.png" alt="plant" className="image" />

          <button 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={clickedFlower} className="button1">Flower</button>

          <button 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={clickedFlower} className="buttonFlowerImg">Flower1</button>

          <button 
          onMouseEnter={handleMouseEnterLeaf}
          onMouseLeave={handleMouseLeave}
          onClick={clickedLeaf} className="buttonLeafImg">Leaf</button>

          <button 
          onMouseEnter={handleMouseEnterLeaf}
          onMouseLeave={handleMouseLeave}
          onClick={clickedLeaf} className="buttonLeafImg2">Leaf</button>

          <button 
          onMouseEnter={handleMouseEnterStem}
          onMouseLeave={handleMouseLeave}
          onClick={clickedStem} className="buttonStemImg">Stem</button>

          <button 
          onMouseEnter={handleMouseEnterRoot}
          onMouseLeave={handleMouseLeave}
          onClick={clickedRoot} className="buttonRootImg">Stem</button>

          <button 
          onMouseEnter={handleMouseEnterNode}
          onMouseLeave={handleMouseLeave}
          onClick={clickedNode} className="button2">Node</button>

          <button 
          onMouseEnter={handleMouseEnterLatBud}
          onMouseLeave={handleMouseLeave}
          onClick={clickedLatBud} className="buttonLateralBud">Lateral Bud</button>

          <button 
          onMouseEnter={handleMouseEnterShoot}
          onMouseLeave={handleMouseLeave}
          onClick={clickedShoot} className="buttonShoot">Shoot</button>

          <button 
          onMouseEnter={handleMouseEnterLeaf}
          onMouseLeave={handleMouseLeave}
          onClick={clickedLeaf} className="buttonLeaf">Leaf</button>

          <button 
          onMouseEnter={handleMouseEnterStem}
          onMouseLeave={handleMouseLeave}
          onClick={clickedStem} className="buttonStem">Stem</button>

          <button 
          onMouseEnter={handleMouseEnterTaproot}
          onMouseLeave={handleMouseLeave}
          onClick={clickedTaproot} className="buttonTaproot">Taproot</button>

          <button 
          onMouseEnter={handleMouseEnterLatRoot}
          onMouseLeave={handleMouseLeave}
          onClick={clickedLatRoot} className="buttonBranchRoot">Lateral Branch Roots</button>

          <button 
          onMouseEnter={handleMouseEnterShootSys}
          onMouseLeave={handleMouseLeave}
          onClick={clickedShootSys} className="buttonShootSystem">Shoot System</button>

          <button 
          onMouseEnter={handleMouseEnterRoot}
          onMouseLeave={handleMouseLeave}
          onClick={clickedRoot} className="buttonRootSystem">Root System</button>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a> */}
      </header>
    </div>
    

  );
}

export default Plant;
