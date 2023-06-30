import React, { ChangeEvent } from "react";
import {
  DivApplicationForm,
  DivButtonWrapper,
  DivFormGroup,
  H3SectionTitle,
} from "./styles";
import { Button, SelectChangeEvent } from "@mui/material";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import Router from "next/router";
import { useApplicationContext } from "@/providers/ApplicationProvider";
import { ApplicationContextType } from "@/providers/types";
import {
  anticipatedStartingSemesterOptions,
  associateOfArtOptions,
  bachelorOfArtOptions,
  bachelorOfScienceOptions,
  certificateProgramOptions,
  financialAidOptions,
  graduateCertificateOptions,
  levelOfEducationOptions,
  masterProgramOptions,
  veteranOptions,
} from "@/constants";

function ApplicationForm() {
  const { applicationValues, setApplicationValues } =
    useApplicationContext() as ApplicationContextType;

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    let newValues: Record<string, string> = Object.assign(applicationValues);
    newValues[name] = value;

    setApplicationValues((prev) => ({ ...prev, ...newValues }));
  };

  const onSubmit = async () => {
    const email = "dwarner@osita.biz";
    const name = "TestName";

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        senderMail: email,
        name,
        content: "Test message content",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.success) {
      console.log("Message sent!");
    } else {
      console.log("Error sending message");
    }
    // Router.push("/requirement");
    // console.log(applicationValues);
  };
  return (
    <DivApplicationForm>
      <H3SectionTitle>Personal Information</H3SectionTitle>
      <DivFormGroup>
        <TextInput
          label="First Name"
          name="firstName"
          value={applicationValues.firstName}
          onChange={handleInputChange}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          value={applicationValues.lastName}
          onChange={handleInputChange}
        />
        <TextInput
          label="Email Address"
          name="emailAddress"
          value={applicationValues.emailAddress}
          onChange={handleInputChange}
        />
        <TextInput
          label="Date of Birth"
          name="dateOfBirth"
          value={applicationValues.dateOfBirth}
          onChange={handleInputChange}
        />
        <TextInput
          label="Phone Number"
          name="phoneNumber"
          value={applicationValues.phoneNumber}
          onChange={handleInputChange}
        />
        <TextInput
          label="Mailing Address"
          name="mailingAddress"
          value={applicationValues.mailingAddress}
          onChange={handleInputChange}
        />
      </DivFormGroup>

      <H3SectionTitle>Academic Information</H3SectionTitle>
      <DivFormGroup>
        <SelectInput
          label="Anticipated Starting Semester"
          onChange={handleInputChange}
          name="anticipatedStartingSemester"
          value={applicationValues.anticipatedStartingSemester}
          options={anticipatedStartingSemesterOptions}
        />
      </DivFormGroup>

      <H3SectionTitle>Intended Program</H3SectionTitle>
      <DivFormGroup>
        <SelectInput
          label="Bachelor of Arts"
          onChange={handleInputChange}
          name="bachelorOfArt"
          value={applicationValues.bachelorOfArt}
          options={bachelorOfArtOptions}
        />
        <SelectInput
          label="Bachelor of Science"
          onChange={handleInputChange}
          name="bachelorOfScience"
          value={applicationValues.bachelorOfScience}
          options={bachelorOfScienceOptions}
        />
        <SelectInput
          label="Associate of Art"
          onChange={handleInputChange}
          name="associateOfArt"
          value={applicationValues.associateOfArt}
          options={associateOfArtOptions}
        />
        <SelectInput
          label="Certificate Programs"
          onChange={handleInputChange}
          name="certificateProgram"
          value={applicationValues.certificateProgram}
          options={certificateProgramOptions}
        />
        <SelectInput
          label="Master's Programs"
          onChange={handleInputChange}
          name="masterProgram"
          value={applicationValues.masterProgram}
          options={masterProgramOptions}
        />
        <SelectInput
          label="Graduate Certificates"
          onChange={handleInputChange}
          name="graduateCertificate"
          value={applicationValues.graduateCertificate}
          options={graduateCertificateOptions}
        />
        <SelectInput
          label="Level of Education"
          onChange={handleInputChange}
          name="levelOfEducation"
          value={applicationValues.levelOfEducation}
          options={levelOfEducationOptions}
        />
        <TextInput
          label="Prior College Attendance (If applicable)"
          name="priorCollegeAttendance"
          value={applicationValues.priorCollegeAttendance}
          onChange={handleInputChange}
          helperText="If you enrolled in any college prior, please indicate the dates attended"
        />
      </DivFormGroup>

      <H3SectionTitle>Financial Information</H3SectionTitle>
      <DivFormGroup>
        <SelectInput
          label="Do you intend to apply for financial aid (U.S. Citizens only)?"
          onChange={handleInputChange}
          name="financialAid"
          value={applicationValues.financialAid}
          options={financialAidOptions}
        />
        <SelectInput
          label="Are you a veteran?"
          onChange={handleInputChange}
          name="veteran"
          value={applicationValues.veteran}
          options={veteranOptions}
        />
      </DivFormGroup>

      <H3SectionTitle>Additional Information</H3SectionTitle>
      <DivFormGroup>
        <TextInput
          label="How did you hear about us?"
          name="heardAboutUs"
          value={applicationValues.heardAboutUs}
          onChange={handleInputChange}
        />
        <TextInput
          label="Comments/Questions"
          name="comments"
          value={applicationValues.comments}
          onChange={handleInputChange}
        />
      </DivFormGroup>

      <H3SectionTitle>Submission</H3SectionTitle>

      <p>
        By submitting this form, I agree to the terms and conditions and confirm
        that all the information provided is correct to the best of my
        knowledge.
      </p>

      <DivButtonWrapper>
        <Button variant="contained" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </DivButtonWrapper>
    </DivApplicationForm>
  );
}

export default ApplicationForm;
