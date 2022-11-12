import React from 'react';
import {PDFtoIMG} from 'react-pdf-to-image';
import file from './soham.pdf';

const Pdf = () =>
    <div>
    {/* <object data={file} type="application/pdf" width="100%" height="100%">
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object> */}
        <PDFtoIMG file={'./soham.pdf'}>
            {({pages}) => {
                console.log(pages)
                {/* if (!pages.length) return 'Loading...';
                return pages.map((page, index)=>
                    <img key={index} src={page}/>
                ); */}
            }}
        </PDFtoIMG>
    </div>

export default Pdf;