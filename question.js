function getValue(message) {
    const value = prompt(message);
    return value !== null ? value : "";
}

// Basic details
document.getElementById("sum").textContent = getValue("Enter Common department");
document.getElementById("sel").textContent = getValue("Enter Student year");
document.getElementById("sel1").textContent = getValue("Enter Student semester");
document.getElementById("aa1").textContent = getValue("Enter Subject name");
document.getElementById("aa").textContent = getValue("Enter Question Paper type");
document.getElementById("me").textContent = "Date: " + getValue("Enter exam date");
document.getElementById("marks").textContent = "Maximum: " + getValue("Enter Maximum Marks");

// Part A questions
for (let i = 1; i <= 10; i++) {
    const question = getValue(`Enter ${i}${getOrdinal(i)} question`);
    const outcome = getValue(`Enter course outcome for question ${i}`);

    document.getElementById(`a${i}`).textContent = `${i}. ${question}`;
    document.getElementById(`c${i}`).textContent = outcome;
}

// Part B questions
const q11a = getValue("Enter 11(a) question");
const m11a = getValue("Enter 11(a) mark");
const c11a = getValue("Enter course outcome for question 11(a)");
document.getElementById("a11a").textContent = "11. i) " + q11a;
document.getElementById("m1").textContent = m11a;
document.getElementById("c11a").textContent = c11a;

const q11b = getValue("Enter 11(b) question");
const m11b = getValue("Enter 11(b) mark");
const c11b = getValue("Enter course outcome for question 11(b)");
document.getElementById("a11b").textContent = "   ii) " + q11b;
document.getElementById("m2").textContent = m11b;
document.getElementById("c11b").textContent = c11b;

const q12a = getValue("Enter 12(a) question");
const m12a = getValue("Enter 12(a) mark");
const c12a = getValue("Enter course outcome for question 12(a)");
document.getElementById("a12a").textContent = "12. i) " + q12a;
document.getElementById("m3").textContent = m12a;
document.getElementById("c12a").textContent = c12a;

const q12b = getValue("Enter 12(b) question");
const m12b = getValue("Enter 12(b) mark");
const c12b = getValue("Enter course outcome for question 12(b)");
document.getElementById("a12b").textContent = "   ii) " + q12b;
document.getElementById("m4").textContent = m12b;
document.getElementById("c12b").textContent = c12b;

// Part C question
const q13 = getValue("Enter 13 question");
const c13 = getValue("Enter course outcome for question 13");
document.getElementById("a13").textContent = "13. " + q13;
document.getElementById("c13").textContent = c13;

// Helper function for ordinal text
function getOrdinal(number) {
    const ordinals = ["st", "nd", "rd"];
async function downloadPDF() {
        if (number % 100 >= 11 && number % 100 <= 13) {
        return "th";
    }
    return ordinals[(number % 10) - 1] || "th";
}
}
// Download PDF
 

  async function downloadPDF() {
    const examPaper = document.getElementById("examPaper");

    if (!examPaper) {
        alert("Exam paper element not found.");
        return;
    }

    const { jsPDF } = window.jspdf;

    const canvas = await html2canvas(examPaper, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff"
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pageHeight = 297;
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    }

    pdf.save("exam-paper.pdf");
}
