import React from 'react'

export const style = {
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: "5px",
}

export const TextBlock = ({ content, className }) =>
    <div className={`text-justify ${className}`} style={{ fontSize: "13px" }}>{content}</div>

export const HtmlBlock = ({ body, className }) =>
    <div
        className={`text-justify ${className}`}
        style={{ fontSize: "13px" }}
        dangerouslySetInnerHTML={{ __html: body }}
    />