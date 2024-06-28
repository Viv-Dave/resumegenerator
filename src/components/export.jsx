import htmlToImage from 'html-to-image'; // Assuming modern import style
import { jsPDF } from "jspdf";

htmlToImage.toPng(document.getElementById('myPage'), { quality: 0.95 })
  .then(function (dataUrl) {
    const img = new Image(); // Create an image element
    img.src = dataUrl; // Set the image source to the data URL

    img.onload = function () { // Wait for the image to load
      const pdf = new jsPDF();
      pdf.addImage(img, 'JPEG', 0, 0); // Add the image to the PDF as JPEG
      pdf.save("download.pdf");
    };
  });
