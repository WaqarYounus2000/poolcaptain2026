"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaDownload,
  FaWhatsapp,
  FaWater,
  FaRulerCombined,
} from "react-icons/fa";

import CustomPoolSolutions from "@/components/CustomPoolSolutions";

import "./poolcalculation.css";

export default function PoolCalculationClient() {

  const printRef = useRef(null);

  // ================= INPUTS =================

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [deep, setDeep] = useState("");
  const [shallow, setShallow] = useState("");

  const [shape, setShape] = useState("rectangle");
  const [unit, setUnit] = useState("ft");

  // ================= RESULTS =================

  const [avg, setAvg] = useState(0);
  const [volume, setVolume] = useState(0);
  const [liters, setLiters] = useState(0);
  const [ukGallons, setUkGallons] = useState(0);
  const [tilesFt, setTilesFt] = useState(0);
  const [tilesM, setTilesM] = useState(0);

  // ================= CALCULATIONS =================

  useEffect(() => {

    let l = Number(length) || 0;
    let w = Number(width) || 0;
    let d = Number(deep) || 0;
    let s = Number(shallow) || 0;

    // meter to feet
    if (unit === "m") {
      l *= 3.281;
      w *= 3.281;
      d *= 3.281;
      s *= 3.281;
    }

    const avgDepth = (d + s) / 2;

    let vol = 0;
    let area = 0;

    if (shape === "rectangle") {

      vol = l * w * avgDepth;
      area = l * w;

    } else {

      const r = l / 2;

      vol = Math.PI * r * r * avgDepth;
      area = Math.PI * r * r;
    }

    const litersVal = vol * 28.3168;
    const uk = litersVal / 4.546;

    setAvg(avgDepth.toFixed(2));
    setVolume(vol.toFixed(2));
    setLiters(litersVal.toFixed(2));
    setUkGallons(uk.toFixed(2));
    setTilesFt(area.toFixed(2));
    setTilesM((area * 0.092903).toFixed(2));

  }, [length, width, deep, shallow, shape, unit]);

  // ================= PRINT =================

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "PoolCaptain-Engineering-Report",

    pageStyle: `
      @page {
        size: A4 landscape;
        margin: 12mm;
      }

      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    `,
  });

  // ================= WHATSAPP =================

  const handleWhatsApp = () => {

    const message = `
POOL CAPTAIN REPORT

Pool Shape: ${shape}
Measurement Unit: ${unit}

Length: ${length}
Width: ${width}

Deep End: ${deep}
Shallow End: ${shallow}

Average Depth: ${avg} ft
Volume: ${volume} cu ft

Water Capacity: ${liters} liters
UK Gallons: ${ukGallons}

Tiles Area: ${tilesFt} sq ft
Tiles Area: ${tilesM} sq m
    `;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>

      {/* ================= HERO ================= */}

      <section className="calculatorHero">

        <div className="heroWaves">

          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heroContent"
        >

          <div className="heroBadge">
            Pool Captain Karachi Pakistan
          </div>

          <h1>Swimming Pool Calculator</h1>

          <p>
            Professional Swimming Pool Volume,
            Water Capacity & Tile Area Estimation Tool
          </p>

        </motion.div>

      </section>

      {/* ================= MAIN ================= */}

      <section className="calculatorSection">

        <div
          ref={printRef}
          className="calculatorContainer"
        >

          {/* ================= WATERMARK ================= */}

          <div className="bgWatermark"></div>

          <div className="bigTextWatermark">
            POOL CAPTAIN
          </div>

          {/* ================= HEADER ================= */}

          <div className="reportHeader">

            <div className="reportTitle">

              <h2>
                Swimming Pool Calculator
              </h2>

              <p>
                Professional Engineering Report
              </p>

            </div>

            <div className="reportLogo">

              <Image
                src="/images/logo.png"
                alt="Pool Captain"
                width={90}
                height={90}
                priority
              />

            </div>

          </div>

          {/* ================= GRID ================= */}

          <div className="calculatorGrid">

            {/* ================= LEFT ================= */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glassCard formCard"
            >

              <h3>Pool Information</h3>

              {/* SHAPE */}

              <div className="inputGroup">

                <label>Pool Shape</label>

                <select
                  value={shape}
                  onChange={(e) => setShape(e.target.value)}
                >

                  <option value="rectangle">
                    Rectangle Pool
                  </option>

                  <option value="circle">
                    Circular Pool
                  </option>

                </select>

              </div>

              {/* UNIT */}

              <div className="inputGroup">

                <label>Measurement Unit</label>

                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >

                  <option value="ft">
                    Feet
                  </option>

                  <option value="m">
                    Meters
                  </option>

                </select>

              </div>

              {/* LENGTH */}

              <div className="inputGroup">

                <label>
                  Length ({unit === "ft" ? "ft" : "m"})
                </label>

                <input
                  type="number"
                  placeholder="Enter Length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />

              </div>

              {/* WIDTH */}

              {shape === "rectangle" && (

                <div className="inputGroup">

                  <label>
                    Width ({unit === "ft" ? "ft" : "m"})
                  </label>

                  <input
                    type="number"
                    placeholder="Enter Width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />

                </div>
              )}

              {/* DEPTH */}

              <div className="inputRow">

                <div className="inputGroup">

                  <label>
                    Deep End ({unit === "ft" ? "ft" : "m"})
                  </label>

                  <input
                    type="number"
                    placeholder="Deep"
                    value={deep}
                    onChange={(e) => setDeep(e.target.value)}
                  />

                </div>

                <div className="inputGroup">

                  <label>
                    Shallow End ({unit === "ft" ? "ft" : "m"})
                  </label>

                  <input
                    type="number"
                    placeholder="Shallow"
                    value={shallow}
                    onChange={(e) => setShallow(e.target.value)}
                  />

                </div>

              </div>

              {/* ================= SUMMARY ================= */}

              <div className="measurementSummary">

                <h4>Measurement Summary</h4>

                <div className="summaryRow">
                  <span>Pool Shape</span>
                  <b>{shape}</b>
                </div>

                <div className="summaryRow">
                  <span>Measurement Unit</span>
                  <b>{unit === "ft" ? "Feet" : "Meters"}</b>
                </div>

                <div className="summaryRow">
                  <span>Length</span>
                  <b>{length || 0}</b>
                </div>

                {shape === "rectangle" && (
                  <div className="summaryRow">
                    <span>Width</span>
                    <b>{width || 0}</b>
                  </div>
                )}

                <div className="summaryRow">
                  <span>Deep End</span>
                  <b>{deep || 0}</b>
                </div>

                <div className="summaryRow">
                  <span>Shallow End</span>
                  <b>{shallow || 0}</b>
                </div>

              </div>

            </motion.div>

            {/* ================= RIGHT ================= */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glassCard resultCard"
            >

              <h3>Engineering Report</h3>

              <div className="resultItem">

                <div className="left">
                  <FaRulerCombined />
                  <span>Average Depth</span>
                </div>

                <b>{avg} ft</b>

              </div>

              <div className="resultItem featured">

                <div className="left">
                  <FaWater />
                  <span>UK Gallons</span>
                </div>

                <b>{ukGallons}</b>

              </div>

              <div className="resultItem">

                <div className="left">
                  <FaWater />
                  <span>Pool Volume</span>
                </div>

                <b>{volume} cu ft</b>

              </div>

              <div className="resultItem">

                <div className="left">
                  <FaWater />
                  <span>Water Capacity</span>
                </div>

                <b>{liters} L</b>

              </div>

              <div className="resultItem">

                <div className="left">
                  <FaRulerCombined />
                  <span>Tiles Area (sq ft)</span>
                </div>

                <b>{tilesFt}</b>

              </div>

              <div className="resultItem">

                <div className="left">
                  <FaRulerCombined />
                  <span>Tiles Area (sq m)</span>
                </div>

                <b>{tilesM}</b>

              </div>

              {/* ================= BUTTONS ================= */}

              <div className="actionButtons">

                <button
                  className="downloadBtn"
                  onClick={handlePrint}
                >

                  <FaDownload />
                  Download Report

                </button>

                <button
                  className="whatsappBtn"
                  onClick={handleWhatsApp}
                >

                  <FaWhatsapp />
                  WhatsApp

                </button>

              </div>

            </motion.div>

          </div>

          {/* ================= FOOTER ================= */}

          <div className="reportFooter">

            Pool Captain Karachi Pakistan •
            Professional Swimming Pool Engineering Report

          </div>

        </div>

      </section>

      <CustomPoolSolutions />

    </>
  );
}