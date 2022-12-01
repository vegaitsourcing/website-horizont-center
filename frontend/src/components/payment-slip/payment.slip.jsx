import React from "react";
import { PDFDocument } from "pdf-lib";

import styles from "./payment.slip.module.scss";

export const PaymentSlip = ({ linkText, info }) => {
  let modelValue = info.payment_model;
  let pozivNaBrojValue = info.payment_reference_number;

  if (modelValue == null) modelValue = "";
  if (pozivNaBrojValue == null) pozivNaBrojValue = "";

  function addDataToPdf(pdf) {
    const form = pdf.getForm();

    const svrhaUplate = form.getTextField("topmostSubform[0].Page1[0].Z3[1]");
    const primalac = form.getTextField("topmostSubform[0].Page1[0].Z3[2]");
    const sifraPlacanja = form.getTextField("topmostSubform[0].Page1[0].Z3[3]");
    const iznos = form.getTextField("topmostSubform[0].Page1[0].Z3[5]");
    const racunaPrimaoca = form.getTextField("topmostSubform[0].Page1[0].Z3[6]");
    const model = form.getTextField("topmostSubform[0].Page1[0].Z3[7]");
    const pozivNaBroj = form.getTextField("topmostSubform[0].Page1[0].Z3[10]");

    svrhaUplate.setText(info.payment_purpose.toString());
    primalac.setText(info.payment_receiver.toString());
    sifraPlacanja.setText(info.payment_code.toString());
    iznos.setText("= ");
    racunaPrimaoca.setText(info.payment_bank_account.toString());
    model.setText(modelValue.toString());
    pozivNaBroj.setText(pozivNaBrojValue.toString());
  }

  const modifyPdf = async () => {
    const existingPdfBytes = await fetch("/documents/paymentSlip.pdf").then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    addDataToPdf(pdfDoc);
    renderPdf(await pdfDoc.save());
  };

  function renderPdf(uint8array) {
    const tempblob = new Blob([uint8array], {
      type: "application/pdf",
    });
    const docUrl = URL.createObjectURL(tempblob);
    window.open(docUrl);
  }

  return (
    <a onClick={modifyPdf} className={styles.link}>
      {linkText}
    </a>
  );
};
