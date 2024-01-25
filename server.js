import React from "react";
import ReactPDF from "@react-pdf/renderer";
import Template from "./templates/Template";

import express from "express";

const app = express();
const port = 8087;

app.use(express.json());

app.post("/create", async (req, res) => {
    try {
        // Lógica asincrónica para generar el PDF con react-pdf
        // Puedes recibir los parámetros necesarios desde req.body como cualquier consulta HTTP

        // Estas propiedades estan hardcodeadeas
        const initialProps = {
            title: "Hello World",
            description: "This is the description of the PDF",
            userData: {
                name: "John Doe",
                age: 30,
                phone: "1234567890",
            },
        };

        // Simulación de un retraso asincrónico para mostrar el concepto
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Genera un UUID para el nombre del PDF
        const uuid = Math.floor(Math.random() * 1000000000);

        // Guarda el PDF localmente
        const pdfPath = `${__dirname}/pdf-generated/example${uuid}.pdf`;

        // Create PDF file
        ReactPDF.render(
            <Template
                title={initialProps.title}
                description={initialProps.description}
                userData={initialProps.userData}
            />,
            pdfPath
        );

        console.log("PDF guardado en:", pdfPath);

        // Respuesta al cliente (opcional)
        res.send("PDF generado y guardado localmente.");
    } catch (error) {
        res.status(500).send("Error interno al generar o guardar el PDF");
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
