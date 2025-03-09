//For Download Form As Pdf Format
// src/utils/pdfUtils.js
import { jsPDF } from "jspdf";

export const handleDownload = (formData) => {
    const doc = new jsPDF();


//For Set And Style Image In PDf
    if (formData.image) {
        const reader = new FileReader();
        reader.onload = (e) => {

            const imgData = e.target.result;

            const imageWidth = 35; // Width of the image
            const imageHeight = 35; // Height of the image
            const margin = 10; // Margin between text and image
            const textX = 10; // X-coordinate for the text
            const textY = 30; // Y-coordinate for the text
            const imageX = doc.internal.pageSize.getWidth() - imageWidth - margin; // Position the image to the right of the text
            const imageY = 30; // Align the top of the image with the top of the text

            //Finally Add Image
            doc.addImage(imgData, 'PNG', imageX, imageY, imageWidth, imageHeight);
            addTextToPDF(doc, formData, textX, textY);
        };
        reader.readAsDataURL(formData.image);
    } else {
        addTextToPDF(doc, formData, 10, 30); // Default text position when there's no image
    }

};



//For Set And Style Other Text In PDf(Lile Id,Name,etc...)
    const addTextToPDF = (doc, formData) => {

        // Set up styles Font
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.setTextColor(40);

        // Add Title
        doc.text("User Registration Details", 105, 20, null, null, "center");

        // Add horizontal line below title
        doc.setLineWidth(0.5);
        doc.line(10, 25, 200, 25);

        // Reset styles for the body text
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.setTextColor(0);


        // Define the initial positions (Table)
        let x = 10; // initial x position for the text
        let y = 75; // initial y position for the text

        // Function to add a label and value pair with a border
        const addLabelAndValue = (label, value, addBorder = true) => {
            const labelWidth = 40; // width for label column
            const valueWidth = 150; // width for value column
            const rowHeight = 10; // height for each row

            if (addBorder) {
                doc.rect(x, y - 7, labelWidth + valueWidth, rowHeight, "S");
            }

            doc.setFont("helvetica", "bold");
            doc.text(`${label}:`, x + 2, y);

            doc.setFont("helvetica", "normal");
            doc.text(value, x + labelWidth + 2, y);

            y += rowHeight; // increment y position for the next row
        };

        // Add form data with borders
        addLabelAndValue("ID", formData.id);
        addLabelAndValue("Name", formData.name);
        addLabelAndValue("Number", formData.number);
        addLabelAndValue("Email", formData.email);
        addLabelAndValue("Country", formData.country);
        addLabelAndValue("State", formData.state);
        addLabelAndValue("City", formData.city);
        addLabelAndValue("Gender", formData.gender);
        addLabelAndValue("Date of Birth", formData.dateOfBirth.toLocaleDateString());
        addLabelAndValue("Course", formData.course);
        addLabelAndValue("Hobbies", formData.hobbies.join(", "));

        // Save the PDF
        doc.save('form-data.pdf');
    };








