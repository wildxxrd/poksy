import React, { useState, FormEvent, useEffect } from "react";
import "../globalCss.css";
import axios from "axios";
import pikachuImage from "../Images/pika.png";
import { BsFire } from "react-icons/bs";
import { IconType } from "react-icons";
import {
  GiGroundbreaker,
  GiStoneSphere,
  GiNorthStarShuriken,
  GiWaterDrop,
  GiFloatingGhost,
  GiBoxingGlove,
  GiFairy,
  GiPsychicWaves,
  GiHighGrass,
  GiSpikedDragonHead,
  GiSteelClaws,
  GiPoisonBottle,
  GiElectric,
} from "react-icons/gi";
import { FaRegSnowflake, FaBug, FaGhost } from "react-icons/fa";
import { FiWind } from "react-icons/fi";

const PoksyForm: React.FC = () => {
  const [poksyName, setPoksyName] = useState<string>("");
  const [poksyType, setPoksyType] = useState<string[]>([]);
  const [poksyAbilities, setPoksyAbilities] = useState<string[]>([]);
  const [poksyImage, setPoksyImage] = useState<string>("");
  const [poksyWeight, setPoksyWeight] = useState<number>();
  const [poksyStrongAgainst, setPoksyStrongAgainst] = useState<IconType[]>([]);
  const [poksyWeakAgainst, setPoksyWeakAgainst] = useState<IconType[]>([]);
  const [poksyNotEffect, setPoksyNotEffect] = useState<IconType[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + poksyName.toLowerCase())
      .then((response) => {
        setPoksyType(response.data.types.map((item: any) => item.type.name));
        setPoksyAbilities(
          response.data.abilities.map((item: any) => item.ability.name)
        );
        setPoksyImage(response.data.sprites.other.dream_world.front_default);
        setPoksyWeight(response.data.weight);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  //sets the strong and weak against icons
  useEffect(() => {
    if (poksyType.includes("water")) {
      setPoksyStrongAgainst([BsFire, GiGroundbreaker, GiStoneSphere]);
      setPoksyWeakAgainst([GiWaterDrop, GiHighGrass, GiSpikedDragonHead]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("fire")) {
      setPoksyStrongAgainst([GiHighGrass, FaRegSnowflake, FaBug, GiSteelClaws]);
      setPoksyWeakAgainst([
        BsFire,
        GiSpikedDragonHead,
        GiStoneSphere,
        GiWaterDrop,
      ]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("grass")) {
      setPoksyStrongAgainst([GiWaterDrop, GiGroundbreaker, GiStoneSphere]);
      setPoksyWeakAgainst([
        GiHighGrass,
        BsFire,
        GiSteelClaws,
        FaBug,
        GiSpikedDragonHead,
        GiPoisonBottle,
        FiWind,
      ]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("electric")) {
      setPoksyStrongAgainst([GiWaterDrop, FiWind]);
      setPoksyWeakAgainst([GiHighGrass, GiSpikedDragonHead, GiElectric]);
      setPoksyNotEffect([GiGroundbreaker]);
    }
    if (poksyType.includes("ice")) {
      setPoksyStrongAgainst([
        GiHighGrass,
        GiGroundbreaker,
        FiWind,
        GiSpikedDragonHead,
      ]);
      setPoksyWeakAgainst([BsFire, GiWaterDrop, FaRegSnowflake, GiSteelClaws]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("bug")) {
      setPoksyStrongAgainst([GiHighGrass, GiPsychicWaves, GiFloatingGhost]);
      setPoksyWeakAgainst([
        BsFire,
        GiBoxingGlove,
        GiPoisonBottle,
        FiWind,
        FaGhost,
        GiSteelClaws,
        GiFairy,
      ]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("dragon")) {
      setPoksyStrongAgainst([GiSpikedDragonHead]);
      setPoksyWeakAgainst([GiSteelClaws]);
      setPoksyNotEffect([GiFairy]);
    }
    if (poksyType.includes("ghost")) {
      setPoksyStrongAgainst([GiPsychicWaves, FaGhost]);
      setPoksyWeakAgainst([GiFloatingGhost]);
      setPoksyNotEffect([GiNorthStarShuriken]);
    }
    if (poksyType.includes("psychic")) {
      setPoksyStrongAgainst([GiBoxingGlove, GiPoisonBottle]);
      setPoksyWeakAgainst([GiPsychicWaves, GiSteelClaws]);
      setPoksyNotEffect([GiFloatingGhost]);
    }
    if (poksyType.includes("flying")) {
      setPoksyStrongAgainst([GiHighGrass, GiBoxingGlove, FaBug]);
      setPoksyWeakAgainst([GiElectric, GiStoneSphere, GiSteelClaws]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("fighting")) {
      setPoksyStrongAgainst([
        GiNorthStarShuriken,
        GiFloatingGhost,
        GiStoneSphere,
        FaRegSnowflake,
        GiSteelClaws,
      ]);
      setPoksyWeakAgainst([
        GiPsychicWaves,
        GiPoisonBottle,
        FiWind,
        FaBug,
        GiFairy,
      ]);
      setPoksyNotEffect([FaGhost]);
    }
    if (poksyType.includes("normal")) {
      setPoksyStrongAgainst([GiSteelClaws, GiStoneSphere]);
      setPoksyWeakAgainst([FaGhost]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("poison")) {
      setPoksyStrongAgainst([GiHighGrass, GiFairy]);
      setPoksyWeakAgainst([
        GiPoisonBottle,
        GiStoneSphere,
        GiGroundbreaker,
        FaGhost,
      ]);
      setPoksyNotEffect([GiSteelClaws]);
    }
    if (poksyType.includes("rock")) {
      setPoksyStrongAgainst([BsFire, FiWind, FaRegSnowflake, FaBug]);
      setPoksyWeakAgainst([GiBoxingGlove, GiGroundbreaker, GiSteelClaws]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("ground")) {
      setPoksyStrongAgainst([
        GiElectric,
        GiStoneSphere,
        GiSteelClaws,
        BsFire,
        GiPoisonBottle,
      ]);
      setPoksyWeakAgainst([GiHighGrass, FaBug]);
      setPoksyNotEffect([FiWind]);
    }
    if (poksyType.includes("steel")) {
      setPoksyStrongAgainst([FaRegSnowflake, GiStoneSphere, GiFairy]);
      setPoksyWeakAgainst([GiElectric, BsFire, GiWaterDrop, GiSteelClaws]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("fairy")) {
      setPoksyStrongAgainst([
        GiBoxingGlove,
        GiSpikedDragonHead,
        GiFloatingGhost,
      ]);
      setPoksyWeakAgainst([GiSteelClaws, GiPoisonBottle, BsFire]);
      setPoksyNotEffect([]);
    }
    if (poksyType.includes("dark")) {
      setPoksyStrongAgainst([FaGhost, GiPsychicWaves]);
      setPoksyWeakAgainst([GiBoxingGlove, GiFairy, GiFloatingGhost]);
      setPoksyNotEffect([FaGhost]);
    }
  }, [poksyType]);

  return (
    <div >
      <img
        className="relative mx-auto py-10 rounded-full w-80 h-80"
        src={poksyImage ? poksyImage : pikachuImage}
        alt="Pikachu"
      />
      <div className="bg-zinc-700 text-white font-bagel">
        <ul className="text-lg">
          <li>Poksy Type: {poksyType.join(",")}</li>
          <li>Poksy Abilities: {poksyAbilities.join(", ")}</li>
          <li>Poksy Average Weight: {poksyWeight}</li>
          <div className="flex-row">
            <li>
              Super Effective Against:
              {poksyStrongAgainst.map((Icon, index) => (
                <div key={index} className="inline-flex mx-1">
                  <Icon color="red" size={25} />
                </div>
              ))}
            </li>
          </div>
          <div className="flex-row">
            <li>
              Not Effective Against:
              {poksyWeakAgainst.map((Icon, index) => (
                <div key={index} className="inline-flex mx-1">
                  <Icon color="blue" size={25} />
                </div>
              ))}
            </li>
          </div>
          <div className="flex-row">
            {poksyNotEffect.length > 0 ? (
              <li>
                Not Effective Against:
                {poksyNotEffect.map((Icon, index) => (
                  <div key={index} className="inline-flex mx-1">
                    <Icon color="green" size={25} />
                  </div>
                ))}
              </li>
            ) : null}
          </div>
        </ul>
      </div>
      <form className="flex justify-center py-8 bg-zinc-700 text-white" onSubmit={handleSubmit}>
        <div className="flex-col justify-around">
          <label className="text-4xl font-medium font-bagel">
            Pokemon Name
          </label>
          <br />
          <input
            className="relative my-5 text-black border-red-300 border shadow-md focus:outline-none focus:ring-1 focus:ring-purple-600"
            type="text"
            value={poksyName}
            onChange={(e) => setPoksyName(e.target.value)}
          />
          <br />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-bagel rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PoksyForm;
