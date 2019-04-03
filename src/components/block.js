import React from 'react'

export const style = {
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: "5px",
}

export const TextBlock = ({ content }) =>
    <div className="text-justify" style={{ fontSize: "13px" }}>{content}</div>

export const HtmlBlock = ({ body }) =>
    <div
        className="text-justify d-none d-md-block"
        style={{ fontSize: "13px" }}
        dangerouslySetInnerHTML={{ __html: body }}
    />