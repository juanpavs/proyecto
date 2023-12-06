/*import React, { useState } from 'react';
import ReporteSection from './ReporteSection.js';
import './styles/ReporteSection.css';

function Reporte() {
  const [isDownloadClicked, setIsDownloadClicked] = useState(false);
  const [isViewClicked, setIsViewClicked] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloadClicked(!isDownloadClicked);
    setIsViewClicked(false);
  };

  const handleViewClick = () => {
    setIsViewClicked(!isViewClicked);
    setIsDownloadClicked(false);
  };

  return (
    <div className="reporte-section">
      <div className="reporte-buttons">
        <button
          className={`reporte-button ${isDownloadClicked ? 'active' : ''}`}
          onClick={handleDownloadClick}
        >
          Descargar PDF
        </button>
        <button
          className={`reporte-button ${isViewClicked ? 'active' : ''}`}
          onClick={handleViewClick}
        >
          Ver PDF
        </button>
      </div>
      {isDownloadClicked && <p className="reporte-content">Acción: Descargar PDF</p>}
      {isViewClicked && <p className="reporte-content">Acción: Ver PDF</p>}
      <ReporteSection />
    </div>
  );
}

export default Reporte;*/


/*import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { saveAs } from 'file-saver';

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    // Simplemente cambia 'path/to/your/file.pdf' con la ruta a tu propio archivo PDF
    const pdfPath = 'Downloads/reporte.pdf';
    saveAs(pdfPath, 'reporte.pdf');
  };

  return (
    <div>
      <Document file="Downloads/reporte.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      
      <p>
        Página {pageNumber} de {numPages}
      </p>

      <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
        Anterior
      </button>
      <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
        Siguiente
      </button>

      <button onClick={handleDownload}>
        Descargar PDF
      </button>
    </div>
  );
};

export default PDFViewer;*/

/*import React, { Component } from 'react';
import jsPDF from 'jspdf';

class Reporte extends Component {
  generarPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Contenido del PDF', 20, 20); // Puedes personalizar el contenido aquí
    pdf.save('reporte.pdf');
  };

  verPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Contenido del PDF', 20, 20); // Puedes personalizar el contenido aquí
    window.open(pdf.output('bloburl'), '_blank');
  };

  render() {
    return (
      <div>
        <Reporte />
        <h1>Reporte</h1>
        <button onClick={this.generarPDF}>Descargar PDF</button>
        <button onClick={this.verPDF}>Ver PDF</button>
      </div>
    );
  }
}

export default Reporte;*/


import React, { useState } from 'react';
import jsPDF from 'jspdf';

const Reporte = () => {
  const [mostrarPDF, setMostrarPDF] = useState(false);

  const generarPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Contenido del PDF', 20, 20);
    const url = pdf.output('bloburl');
    setMostrarPDF(url);
  };

  const verPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Contenido del PDF', 20, 20);
    const url = pdf.output('bloburl');
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1>Reporte</h1>
      <button onClick={generarPDF}>Descargar PDF</button>
      <button onClick={verPDF}>Ver PDF</button>
      {mostrarPDF && <iframe title="PDF" src={mostrarPDF} width="100%" height="500px" />}
    </div>
  );
};

export default Reporte;



