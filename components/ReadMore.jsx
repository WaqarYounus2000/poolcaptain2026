"use client";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import "@/styles/readmore.css"

export default function ReadMore({
    text,
    maxLength = 320,
}) {
    const [expanded, setExpanded] = useState(false);

    if (!text) return null;

    const shouldTrim = text.length > maxLength;

    const displayText =
        expanded || !shouldTrim
            ? text
            : text.slice(0, maxLength) + "...";

    return (
        <p className="serviceContentText">
            {displayText}

            {shouldTrim && (
                <>
                    {" "}
                    <button
                        type="button"
                        className="readMoreBtn"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? (
                            <>
                                Read Less <FaArrowUp />
                            </>
                        ) : (
                            <>
                                Read More <FaArrowRight />
                            </>
                        )}
                    </button>
                </>
            )}
        </p>
    );
}