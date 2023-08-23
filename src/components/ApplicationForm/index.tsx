import React, { ChangeEvent } from "react";
import {
  DivApplicationForm,
  DivButtonWrapper,
  DivFormGroup,
  H3SectionTitle,
  PDescription,
} from "./styles";
import { Button, SelectChangeEvent } from "@mui/material";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import { useRouter } from "next/router";
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
import Banner from "../Banner";

function ApplicationForm() {
  const {
    applicationValues,
    setApplicationValues,
    validateApplicationValues,
    hasApplicationError,
    applicationErrors,
  } = useApplicationContext() as ApplicationContextType;

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    let newValues: Record<string, string> = Object.assign(applicationValues);
    newValues[name] = value;

    validateApplicationValues(name, value);
    setApplicationValues((prev) => ({ ...prev, ...newValues }));
  };

  const router = useRouter();

  const onSubmit = async () => {
    Object.entries(applicationValues).forEach(([key, value]) => {
      validateApplicationValues(key, value as string);
    });

    // console.log(applicationErrors);
    if (hasApplicationError()) return;

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        ...applicationValues,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response;

    if (data.status === 200) {
      console.log("Message sent!");
      router.push('/thanks-submit');
    } else {
      console.log("Error sending message");
      alert("Error sending message")
    }
  };
  return (
    <DivApplicationForm>
      <Banner />
      <H3SectionTitle>Personal Information</H3SectionTitle>

      <DivFormGroup>
        <TextInput
          label="First Name"
          name="firstName"
          value={applicationValues.firstName}
          onChange={handleInputChange}
          error={applicationErrors.firstName}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          value={applicationValues.lastName}
          onChange={handleInputChange}
          error={applicationErrors.lastName}
        />
        <TextInput
          label="Email Address"
          name="emailAddress"
          value={applicationValues.emailAddress}
          onChange={handleInputChange}
          error={applicationErrors.emailAddress}
        />
        <TextInput
          label="Age"
          name="age"
          value={applicationValues.age}
          onChange={handleInputChange}
          error={applicationErrors.age}
        />
        <TextInput
          label="Phone Number"
          name="phoneNumber"
          value={applicationValues.phoneNumber}
          onChange={handleInputChange}
          error={applicationErrors.phoneNumber}
        />
        <TextInput
          label="Home State"
          name="homeState"
          value={applicationValues.homeState}
          onChange={handleInputChange}
          error={applicationErrors.homeState}
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
          error={applicationErrors.anticipatedStartingSemester}
        />
      </DivFormGroup>

      <H3SectionTitle>
        Intended Program (Please choose at least one)
      </H3SectionTitle>
      <DivFormGroup>
        <SelectInput
          label="Bachelor of Arts"
          onChange={handleInputChange}
          name="bachelorOfArt"
          value={applicationValues.bachelorOfArt}
          options={bachelorOfArtOptions}
          error={applicationErrors.bachelorOfArt}
        />
        <SelectInput
          label="Bachelor of Science"
          onChange={handleInputChange}
          name="bachelorOfScience"
          value={applicationValues.bachelorOfScience}
          options={bachelorOfScienceOptions}
          error={applicationErrors.bachelorOfScience}
        />
        <SelectInput
          label="Associate of Art"
          onChange={handleInputChange}
          name="associateOfArt"
          value={applicationValues.associateOfArt}
          options={associateOfArtOptions}
          error={applicationErrors.associateOfArt}
        />
        <SelectInput
          label="Certificate Programs"
          onChange={handleInputChange}
          name="certificateProgram"
          value={applicationValues.certificateProgram}
          options={certificateProgramOptions}
          error={applicationErrors.certificateProgram}
        />
        <SelectInput
          label="Master's Programs"
          onChange={handleInputChange}
          name="masterProgram"
          value={applicationValues.masterProgram}
          options={masterProgramOptions}
          error={applicationErrors.masterProgram}
        />
        <SelectInput
          label="Graduate Certificates"
          onChange={handleInputChange}
          name="graduateCertificate"
          value={applicationValues.graduateCertificate}
          options={graduateCertificateOptions}
          error={applicationErrors.graduateCertificate}
        />
      </DivFormGroup>

      <H3SectionTitle>Education Information</H3SectionTitle>
      <DivFormGroup>
        <SelectInput
          label="Level of Education"
          onChange={handleInputChange}
          name="levelOfEducation"
          value={applicationValues.levelOfEducation}
          options={levelOfEducationOptions}
          error={applicationErrors.levelOfEducation}
        />

        <TextInput
          label="Prior College Attendance (If applicable)"
          name="priorCollegeAttendance"
          value={applicationValues.priorCollegeAttendance}
          onChange={handleInputChange}
          helperText="If you enrolled in any college prior, please indicate the dates attended"
          error={applicationErrors.priorCollegeAttendance}
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
          error={applicationErrors.financialAid}
        />
        <SelectInput
          label="Are you a veteran?"
          onChange={handleInputChange}
          name="veteran"
          value={applicationValues.veteran}
          options={veteranOptions}
          error={applicationErrors.veteran}
        />
      </DivFormGroup>

      <H3SectionTitle>Additional Information</H3SectionTitle>
      <DivFormGroup>
        <TextInput
          label="How did you hear about us?"
          name="heardAboutUs"
          value={applicationValues.heardAboutUs}
          onChange={handleInputChange}
          error={applicationErrors.heardAboutUs}
        />
        <TextInput
          label="Comments/Questions"
          name="comments"
          value={applicationValues.comments}
          onChange={handleInputChange}
          error={applicationErrors.comments}
        />
      </DivFormGroup>

      <H3SectionTitle>Submission</H3SectionTitle>

      <PDescription>
        By submitting this form, I agree to the terms and conditions and confirm
        that all the information provided is correct to the best of my
        knowledge.
      </PDescription>

      <DivButtonWrapper>
        <Button variant="contained" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </DivButtonWrapper>
    </DivApplicationForm>
  );
}

export default ApplicationForm;
