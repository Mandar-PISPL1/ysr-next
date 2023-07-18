import React from 'react';

interface EmbeddedPDFProps {
  url: string;
}

const EmbeddedPDF: React.FC<EmbeddedPDFProps> = ({ url }) => {
  return (
    <div style={{ width: '100%', height: '700px' }} className="h-[500px]">
      <object data={url} type="application/pdf" width="100%" height="100%">
        <p>
          PDF cannot be displayed. Please check your browser settings to enable
          PDF viewing.
        </p>
      </object>
    </div>
  );
};

export default EmbeddedPDF;
