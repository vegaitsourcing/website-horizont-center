import React, { useState } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";
import styles from "./payment.slip.module.scss";

export const PaymentSlip = ({
	linkText,
	payer,
	paymentPurpose,
	paymentRecipient,
	paymentCode,
	paymentCurrency,
	paymentAmount,
	paymentBankAccount,
	paymentModel,
	paymentReferenceNumber,
}) => {
	const [pdfBytes, setPdfBytes] = useState("");

	if (paymentModel == null) paymentModel = "";
	if (paymentReferenceNumber == null) paymentReferenceNumber = "";

	function addDataToPdf(pdf) {
		const form = pdf.getForm();

		const payerField = form.getTextField("topmostSubform[0].Page1[0].Z3[0]");
		const paymentPurposeField = form.getTextField("topmostSubform[0].Page1[0].Z3[1]");
		const paymentRecipientField = form.getTextField("topmostSubform[0].Page1[0].Z3[2]");
		const paymentCodeField = form.getTextField("topmostSubform[0].Page1[0].Z3[3]");
		const paymentCurrencyField = form.getTextField("topmostSubform[0].Page1[0].Z3[4]");
		const paymentAmountField = form.getTextField("topmostSubform[0].Page1[0].Z3[5]");
		const paymentBankAccountField = form.getTextField("topmostSubform[0].Page1[0].Z3[6]");
		const paymentModelField = form.getTextField("topmostSubform[0].Page1[0].Z3[7]");
		const paymentReferenceNumberField = form.getTextField("topmostSubform[0].Page1[0].Z3[10]");

		payerField.setText(payer.toString());
		paymentPurposeField.setText(paymentPurpose.toString());
		paymentRecipientField.setText(paymentRecipient.toString());
		paymentCodeField.setText(paymentCode.toString());
		paymentCurrencyField.setText(paymentCurrency.toString());
		paymentAmountField.setText("= " + parseFloat(paymentAmount).toFixed(2).toString());
		paymentBankAccountField.setText(paymentBankAccount.toString());
		paymentModelField.setText(paymentModel.toString());
		paymentReferenceNumberField.setText(paymentReferenceNumber.toString());
	}

	const modifyPdf = async () => {
		const paymentSlipURL = "documents/paymentSlip.pdf";
		const existingPdfBytes = await fetch(paymentSlipURL).then((res) => res.arrayBuffer());

		const pdfDoc = await PDFDocument.load(existingPdfBytes);

		addDataToPdf(pdfDoc);
		renderPdf(await pdfDoc.save());
	};

	function renderPdf(uint8array) {
		const pdfBlob = new Blob([uint8array], {
			type: "application/pdf",
		});
		const documentURL = URL.createObjectURL(pdfBlob);
		setPdfBytes(documentURL);

		window.open(documentURL);
	}

	return (
		<a onClick={modifyPdf} className={styles.link}>
			{linkText}
		</a>
	);
};
