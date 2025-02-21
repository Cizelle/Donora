import React, { useState } from "react";
import "./DonorForm.css";

interface DocumentInfo {
  number: string;
  date?: string; // Date is optional for some documents
  place?: string;
  constituency?: string;
  country?: string;
  authority?: string;
}

interface AffidavitInfo {
  name: string;
  seal: string;
}

interface ExplanationGivenInfo {
  name: string;
}

interface FormData {
  name: string;
  permanentHomeAddress: string;
  presentAddress: string;
  tel: [string, string];
  dob: string;
  organ: string;
  spouseName: string;
  spouseDob: string;
  documents: {
    rationCard: DocumentInfo;
    voterId: DocumentInfo;
    passport: DocumentInfo;
    drivingLicense: DocumentInfo;
    pan: string;
    aadhar: string;
    other: string;
  };
  marriageProof: {
    certificate: boolean;
    affidavit: AffidavitInfo;
    other: string;
  };
  declarations: {
    understandOffenses: boolean;
    noPayment: boolean;
    freeWill: boolean;
    explanationGiven: ExplanationGivenInfo;
    understandRisks: boolean;
    withdrawConsent: boolean;
    accurateInfo: boolean;
  };
}

const DonorForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    // ... (Your initial state remains the same)
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData: FormData) => {
      // Use a callback for state updates
      const updatedFormData = { ...prevFormData }; // Create a copy

      if (name.startsWith("tel")) {
        const index = parseInt(name[3]);
        updatedFormData.tel = [...prevFormData.tel]; // Copy the array
        updatedFormData.tel[index] = value;
      } else if (type === "checkbox") {
        updatedFormData[name as keyof FormData] = checked; // Type assertion for checkbox
      } else if (name.startsWith("documents")) {
        const path = name.split(".");
        updatedFormData.documents[
          path[1] as keyof typeof updatedFormData.documents
        ][path[2] as keyof DocumentInfo] = value;
      } else if (name.startsWith("marriageProof")) {
        const path = name.split(".");
        if (path[1] === "affidavit") {
          updatedFormData.marriageProof.affidavit[
            path[2] as keyof AffidavitInfo
          ] = value;
        } else {
          updatedFormData.marriageProof[
            path[1] as keyof typeof updatedFormData.marriageProof
          ] = checked;
        }
      } else if (name.startsWith("declarations")) {
        const path = name.split(".");
        updatedFormData.declarations[
          path[1] as keyof typeof updatedFormData.declarations
        ] = checked;
      } else {
        updatedFormData[name as keyof FormData] = value; // Type assertion for other inputs/textareas
      }

      return updatedFormData;
    });
  };

  // ... (rest of your component code)
};

export default DonorForm;
