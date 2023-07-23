const uploadLogo = document.getElementById("logo-input-container");
const uploadLogoInput = document.getElementById("input-file-logo");

uploadLogo.addEventListener("click", () => {
  uploadLogoInput.click();
});

const uploadCompanyProfile = document.getElementById(
  "upload-company-profile-btn"
);
const uploadCompanyProfileInput = document.getElementById(
  "company-profile-input"
);

uploadCompanyProfile.addEventListener("click", () => {
  uploadCompanyProfileInput.click();
});
