import React, { useState } from "react";

import { PDFDocument, StandardFonts } from "pdf-lib";

import styles from "./payment.slip.module.scss";

export const PaymentSlip = ({
  uplatilacValue,
  svrhaUplateValue,
  primalacValue,
  sifraPlacanjaValue,
  valutaValue,
  iznosValue,
  racunaPrimaocaValue,
  modelValue,
  pozivNaBrojValue,
}) => {
  const [pdfBytes, setpdfBytes] = useState("");

  if (modelValue == null) modelValue = "";
  if (pozivNaBrojValue == null) pozivNaBrojValue = "";

  function addDataToPdf(pdf) {
    const form = pdf.getForm();

    const uplatilac = form.getTextField("topmostSubform[0].Page1[0].Z3[0]");
    const svrhaUplate = form.getTextField("topmostSubform[0].Page1[0].Z3[1]");
    const primalac = form.getTextField("topmostSubform[0].Page1[0].Z3[2]");
    const sifraPlacanja = form.getTextField("topmostSubform[0].Page1[0].Z3[3]");
    const valuta = form.getTextField("topmostSubform[0].Page1[0].Z3[4]");
    const iznos = form.getTextField("topmostSubform[0].Page1[0].Z3[5]");
    const racunaPrimaoca = form.getTextField("topmostSubform[0].Page1[0].Z3[6]");
    const model = form.getTextField("topmostSubform[0].Page1[0].Z3[7]");
    const pozivNaBroj = form.getTextField("topmostSubform[0].Page1[0].Z3[10]");

    uplatilac.setText(uplatilacValue.toString());
    svrhaUplate.setText(svrhaUplateValue.toString());
    primalac.setText(primalacValue.toString());
    sifraPlacanja.setText(sifraPlacanjaValue.toString());
    valuta.setText(valutaValue.toString());
    iznos.setText("= " + parseFloat(iznosValue).toFixed(2).toString());
    racunaPrimaoca.setText(racunaPrimaocaValue.toString());
    model.setText(modelValue.toString());
    pozivNaBroj.setText(pozivNaBrojValue.toString());
  }

  const modifyPdf = async () => {
    const url = "Obrazac_br._1.pdf";
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    addDataToPdf(pdfDoc);
    renderPdf(await pdfDoc.save());
  };

  function renderPdf(uint8array) {
    const tempblob = new Blob([uint8array], {
      type: "application/pdf",
    });
    const docUrl = URL.createObjectURL(tempblob);
    setpdfBytes(docUrl);

    window.open(docUrl);
  }

  return (
    <a onClick={modifyPdf} className={styles.link}>
      klik
    </a>
  );
};
