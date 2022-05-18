import React from "react";
import { FileBubble } from "../components/Components";

const UploadFile = () => {
  return (
    <div className=" bg-gray-100 border-t px-4 pt-4 flex flex-row gap-4 overflow-y-scroll h-24">
      <FileBubble fileName="asdlaksd lkasl dkasl.docx" />
      <FileBubble fileName="asdla ksdlka sldk asl.docx" />
      <FileBubble fileName="asdlaks dl kasl dka sl.docx" />
      <FileBubble fileName="asdl aksdlk as ldka sl.docx" />
      <FileBubble fileName="1231.docx" />
      <FileBubble fileName="435 46.docx" />
      <FileBubble fileName="xxz c2 32.docx" />
    </div>
  );
};

export default UploadFile;
