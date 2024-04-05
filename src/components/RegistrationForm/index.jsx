import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "../common";
import AdditionalService from "./AdditionalService";
import BookingAvailability from "./BookingAvailability";
import PersonalInformation from "./PersonalInformation";
import RentalInformation from "./RentalInformation";
import StudioDetails from "./StudioDetails";
import StudioFeatures from "./StudioFeatures";
import styles from "./styles";

const RegistrationForm = () => {
  const {
    control,
    formState: { errors },
    trigger,
    getValues,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      studioName: "",
      studioType: "",
      address: "",
      state: "",
      city: "",
      zipCode: "",
      studioDescription: "",
      professionalLightingWquipment: false,
      virtualReality: false,
      customizableSets: false,
      soundproofing: false,
      highResolutionMonitors: false,
      greenScreenCapability: false,
      varietyofBackdrops: false,
      spaciousLayout: false,
      hourly: "",
      halfDay: "",
      fullDay: "",
      equipment: "",
      setDesign: "",
      other: "",
      days: "",
      hours: "",
      termsAndCondition: false,
      privacyPolicy: false,
    },
    mode: "all",
    criteriaMode: "all",
  });

  const forms = [
    {
      heading: "Personal Information",
      form: PersonalInformation,
    },
    {
      heading: "Studio Details",
      form: StudioDetails,
    },
    {
      heading: "Studio Features",
      form: StudioFeatures,
    },
    {
      heading: "Rental Information",
      form: RentalInformation,
    },
    {
      heading: "Additional Service Available",
      form: AdditionalService,
    },
    {
      heading: "Booking Availability",
      form: BookingAvailability,
    },
  ];

  return (
    <Box className="container" component="section">
      <Box sx={styles.container}>
        <Box sx={styles.subheading}>
          Studio <span className="outlineText">Registration Form</span>
        </Box>
        <Box sx={styles.description}>
          Empower Your Studio's Presence with NovaLens Studios
        </Box>
      </Box>
      <Box sx={styles.formContainer}>
        {forms.map(({ heading, form: FormElement }, index) => {
          return (
            <Box key={index} sx={styles.formWrapper}>
              <Box sx={styles.formHeading}>{heading}</Box>
              <FormElement control={control} errors={errors} />
            </Box>
          );
        })}
        <Box sx={styles.footer}>
          <Checkbox
            name="termsAndCondition"
            label={
              <Box>
                I agree to the{" "}
                <span className="linker">Terms and Conditions</span>, which
                outline the responsibilities and expectations for studio owners
                registering with Vlippr Studio.
              </Box>
            }
            control={control}
          />
          <Checkbox
            name="privacyPolicy"
            label={
              <Box>
                I have read and agree to the{" "}
                <span className="linker">Privacy Policy</span>, which explains
                how Vlippr Studio collects, uses, and protects personal
                information provided by studio owners.
              </Box>
            }
            control={control}
          />
        </Box>
        <Button
          sx={styles.button}
          onClick={() =>
            trigger().then((res) => res && console.log(getValues()))
          }
        >
          Register My Studio
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
