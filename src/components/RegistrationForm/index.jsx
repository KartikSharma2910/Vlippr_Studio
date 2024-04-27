import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    formState: { errors },
    trigger,
    watch,
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

  const formData = new FormData();
  formData.append("name", watch("fullName"));
  formData.append("email", watch("email"));
  formData.append("phone", watch("phoneNumber"));
  formData.append("company", watch("companyName"));
  formData.append("studio_name", watch("studioName"));
  formData.append("studio_type", watch("studioType"));
  formData.append("address", watch("address"));
  formData.append("city", watch("city"));
  formData.append("state", watch("state"));
  formData.append("zip_code", watch("zipCode"));
  formData.append("description", watch("studioDescription"));
  formData.append("hourly_rate", watch("hourly"));
  formData.append("full_day_rate", watch("fullDay"));

  const features = [];
  Object.entries(watch()).forEach(([key, value]) => {
    if (key.endsWith("Feature") && value) {
      features.push(key.replace("Feature", ""));
    }
  });
  formData.append("features[]", [...features]);
  formData.append("half_day_rate", watch("halfDay"));

  const handleSubmit = async () => {
    setIsLoading(true);

    const response = await axios.post(
      "http://vlippr-php.ap-south-1.elasticbeanstalk.com/Script/api.php?v=1.0&platform=desktop&type=regsiter_studio_request",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          api_key: "1312a113c58715637a94437389326a49",
        },
      }
    );
    console.log(response.data);

    setIsLoading(false);
  };

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
          onClick={() => trigger().then((res) => res && handleSubmit())}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Register My Studio"}
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
