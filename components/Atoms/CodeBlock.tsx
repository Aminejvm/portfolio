import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = ({ language, value }: any): JSX.Element => (
  <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
);

export default CodeBlock;
