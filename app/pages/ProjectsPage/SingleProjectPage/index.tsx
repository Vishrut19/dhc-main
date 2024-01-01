import React, { useState } from "react";
import axios from "axios";
import Gallery from "./ImagesGallery";
import Delete from "@/app/icons/Delete";
import File from "@/app/icons/File";
import Desc from "./Desc";
import Information from "./Information";
import Details from "./Details";
import Overview from "./Overview";
import Plan from "./Plan";
import Amenties from "./Amenties";
import About from "./About";
import ProjectMap from "./ProjectMap";
import Preloader from "@/app/components/Preloader/Preloader";
import { useLoadingContext } from "@/app/context/loading";
import {
  displayErrorMessage,
  displaySuccessMessage,
  uploadImages,
} from "@/app/utils/helpers";
import { ProjectsService } from "@/app/services/Projects.service";
import { useRouter } from "next/router";
const images = [
  "/assets/images/g1.png",
  "/assets/images/g2.png",
  "/assets/images/g3.png",
  "/assets/images/g4.png",
  "/assets/images/g5.png",
  "/assets/images/g1.png",
  "/assets/images/g2.png",
  "/assets/images/g3.png",
  "/assets/images/g4.png",
  "/assets/images/g5.png",
];
const SingleProjectPage = ({ data }: any) => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<any>();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState("");
  const { isLoading, setIsLoading } = useLoadingContext();
  const formData: any = {};
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setSelectedFile(selectedFile);
      setFileUploaded(true);
    }
  };

  const handleAddYoutubeLink = () => {
    if (youtubeLink.trim() !== "") {
      // Add YouTube link logic
      setIsLoading(true);
      formData.projectID = data.id;
      formData.brochureUrl = "Default";
      formData.tourUrl = youtubeLink;

      axios
        .post("https://dhc.shellcode.co.in/updateBVT.php", formData)
        .then((response) => {
          displaySuccessMessage(response.data.message);
          setYoutubeLink(""); // Clear the input after successful addition
        })
        .catch((err) => {
          console.error("Error adding YouTube link:", err);
          displayErrorMessage("Error adding YouTube link");
        })
        .finally(() => setIsLoading(false));
    } else {
      displayErrorMessage("Please enter a YouTube link.");
    }
    console.log("youtube Link: ", youtubeLink);
  };

  const handleDeleteYoutubeLink = () => {
    // Delete YouTube link logic
    setIsLoading(true);
    formData.projectID = data.id;
    formData.tourUrl = "Delete";
    formData.brochureUrl = "Default";
    axios
      .post("https://dhc.shellcode.co.in/updateBVT.php", formData)
      .then((response) => {
        displaySuccessMessage(response.data.message);
        setYoutubeLink(""); // Clear the input after successful deletion
      })
      .catch((err) => {
        console.error("Error deleting YouTube link:", err);
        displayErrorMessage("Error deleting YouTube link");
      })
      .finally(() => setIsLoading(false));
  };

  const getFileLabel = () => {
    return selectedFile ? selectedFile.name : "Upload Brochure";
  };

  const handleDeleteFile = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedFile(null);
    setFileUploaded(false);
  };
  const upload = async () => {
    setIsLoading(true);
    if (!selectedFile) {
      displayErrorMessage("upload first");
      setIsLoading(false);
      return;
    }
    const imageUrl = await uploadImages([selectedFile]);
    formData.projectID = data.id;
    formData.brochureUrl = imageUrl[0];
    formData.tourUrl = "Empty";
    ProjectsService.updateBrouchere(formData)
      .then((res) => displaySuccessMessage(res.data.message))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const changeStatus = (status: string, id: string, e: any) => {
    e.preventDefault();
    setIsLoading(true);
    ProjectsService.changeStatus({ projectID: id, status: status })
      .then((ress) => router.reload())
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  return (
    <section className="section">
      <div className="section__content">
        <div className="sproject">
          <div className="sproject__top">
            <div className="sproject__top-left">
              {data.images && <Gallery images={data.images} />}
            </div>
            <div className="sproject__top-right">
              <Desc data={data} />
              <div className="sproject__brochure">
                <input
                  accept=".pdf"
                  className="project__form-input"
                  type="file"
                  id={`fileInput`}
                  onChange={(e) => handleFileChange(e)}
                />
                <div
                  className="project__form-input-container"
                  style={{ display: "flex" }}
                >
                  <label
                    className="project__form-input-label no-space"
                    htmlFor={`fileInput`}
                  >
                    {getFileLabel()}
                  </label>
                  {fileUploaded && (
                    <span
                      className="delete-icon"
                      style={{
                        marginLeft: "10px",
                        marginTop: "20px",
                        cursor: "pointer",
                      }}
                      onClick={(e) => handleDeleteFile(e)}
                    >
                      <Delete />
                    </span>
                  )}
                </div>
                <button
                  style={{ marginTop: "10px" }}
                  onClick={() => upload()}
                  className="btn"
                >
                  update brochure
                </button>
              </div>
              <div className="sproject__youtube-link">
                <input
                  className="project__form-input-youtube"
                  type="text"
                  placeholder="Enter YouTube Link"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                />
                {youtubeLink && (
                  <span
                    className="delete-icon"
                    style={{
                      marginLeft: "10px",
                      marginTop: "20px",
                      cursor: "pointer",
                    }}
                    onClick={handleDeleteYoutubeLink}
                  >
                    <Delete />
                  </span>
                )}
                <button
                  style={{ marginTop: "10px" }}
                  onClick={handleAddYoutubeLink}
                  className="btn"
                >
                  Add YouTube Link
                </button>
              </div>
            </div>
          </div>

          <Information data={data} changeStatus={changeStatus} />
          <Details data={data} />
          <Overview data={data} />
          {data.FloorPlans && <Plan data={data.FloorPlans} />}
          <Amenties amenties={data.amenities} />
          <About data={data} />
          <ProjectMap locationLink={data.LocationLink} />
        </div>
      </div>
    </section>
  );
};

export default SingleProjectPage;
