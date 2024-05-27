import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Typography,
  CardContent,
  TextField,
  InputAdornment,
  CardActions,
  Button,
} from "@mui/material";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";

import { contactValidationSchema } from "../../validations/contactValidation";

const ContactForm = () => {
  const theme = useTheme();

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },
    validationSchema: contactValidationSchema,
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid container  rowSpacing={2}>
          <Grid xs={12} sx={{ direction: "ltr" }}>
            <Grid container spacing={2} columns={12} >
              <Grid xs={12} sm={12} md={6} lg={6} >
                <TextField
                  size="small"
                  sx={{ width: '100%' }}
                  color="secondary"
                  label="نام و نام خانوادگی"
                  name="fullname"
                  variant="outlined"
                  helperText={
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face6Rounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} sm={12} md={6} lg={6} >
                <TextField
                  size="small"
                  color="secondary"
                  label="آدرس ایمیل"
                  name="email"
                  fullWidth
                  variant="outlined"
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} sx={{ direction: "ltr" }}>
            <Grid container direction={"column"} spacing={2}>
              <Grid xs={12} md={12}>
                <TextField
                  size="small"
                  color="secondary"
                  label="عنوان"
                  name="subject"
                  variant="outlined"
                  fullWidth
                  helperText={
                    formik.touched.subject ? formik.errors.subject : null
                  }
                  error={Boolean(
                    formik.touched.subject && formik.errors.subject
                  )}
                  value={formik.values?.subjectj}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SubjectRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={12} >
                <TextField
                  multiline
                  rows={6}
                  size="small"
                  color="secondary"
                  label="متن پیام"
                  name="message"
                  variant="outlined"
                  fullWidth
                  helperText={
                    formik.touched.message ? formik.errors.message : null
                  }
                  error={Boolean(
                    formik.touched.message && formik.errors.message
                  )}
                  value={formik.values?.message}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
       <Grid container spacing={2} sx={{direction:"ltr"}} width={1}>
        <Grid xs={12}>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          theme={theme.palette.mode}
          hl="fa"
          onChange={(value) => {
            formik.setFieldValue("recaptcha", value);
          }}
        />
        {formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography variant="caption" color="error">
            {formik.errors.recaptcha}
          </Typography>
        )}
        </Grid>
        <Grid xs={12}>
          
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          fullWidth
        >
          ارسال کن
        </Button>
        </Grid>
       </Grid>
      </CardActions>
    </form>
  );
};

export default ContactForm;
