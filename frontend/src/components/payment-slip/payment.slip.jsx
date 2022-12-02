import React from "react";
import { PDFDocument } from "pdf-lib";

import styles from "./payment.slip.module.scss";

export const PaymentSlip = ({ linkText, info }) => {
  const paymentModel = info.payment_model || "";
  const paymentReferenceNumber = info.payment_reference_number || "";

  function addDataToPdf(pdf) {
    const form = pdf.getForm();

    const paymentPurposeField = form.getTextField("topmostSubform[0].Page1[0].Z3[1]");
    const paymentRecieverField = form.getTextField("topmostSubform[0].Page1[0].Z3[2]");
    const paymentCodeField = form.getTextField("topmostSubform[0].Page1[0].Z3[3]");
    const paymentAmountField = form.getTextField("topmostSubform[0].Page1[0].Z3[5]");
    const paymentBankAccountField = form.getTextField("topmostSubform[0].Page1[0].Z3[6]");
    const paymentModelField = form.getTextField("topmostSubform[0].Page1[0].Z3[7]");
    const paymentReferenceNumberField = form.getTextField("topmostSubform[0].Page1[0].Z3[10]");

    paymentPurposeField.setText(info.payment_purpose.toString());
    paymentRecieverField.setText(info.payment_receiver.toString());
    paymentCodeField.setText(info.payment_code.toString());
    paymentAmountField.setText("= ");
    paymentBankAccountField.setText(info.payment_bank_account.toString());
    paymentModelField.setText(paymentModel.toString());
    paymentReferenceNumberField.setText(paymentReferenceNumber.toString());
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
