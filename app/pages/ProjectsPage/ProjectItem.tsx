import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import Location from "@/app/icons/Location";
import Succes from "@/app/icons/Succes";
import Denied from "@/app/icons/Denied";
import { useRouter } from "next/router";
import WpIcon from "@/app/icons/WpIcon";
import Light from "@/app/icons/Light";
import House from "@/app/icons/House";
import Gym from "@/app/icons/Gym";
import SwimmingPool from "@/app/icons/SwimmingPool";
import KidsPool from "@/app/icons/KidsPool";
import Lift from "@/app/icons/Lift";
import Security from "@/app/icons/Security";
import Park from "@/app/icons/Park";
import Indoor from "@/app/icons/Indoor";
import Oxy from "@/app/icons/Oxy";
import Badminton from "@/app/icons/Badminton";
import Hall from "@/app/icons/Hall";
import Library from "@/app/icons/Library";
import Jogging from "@/app/icons/Jogging";
import Reserved from "@/app/icons/Reserved";
import { useLoadingContext } from "@/app/context/loading";
import { ProjectsService } from "@/app/services/Projects.service";
import { Switch } from "@mui/material";
import our from "@/app/pages/ProjectsPage/Our";
type Props = {
  el: any;
  type: string;
  showSwitches?: boolean;
  //   changeStatus: Function;
};
const amentiesOptions = [
  { icon: <Light />, title: "24×7 PowerBackup" },
  { icon: <House />, title: "Club House" },
  { icon: <Gym />, title: "Gymnasium" },
  { icon: <SwimmingPool />, title: "Swimming Pool" },
  { icon: <Lift />, title: "Lifts" },
  { icon: <KidsPool />, title: "Kids Pool" },
  { icon: <Security />, title: "Security" },
  { icon: <Park />, title: "Children’s Park" },
  { icon: <Indoor />, title: "Indoor Games" },
  { icon: <Oxy />, title: "Oxygen Zone" },
  { icon: <Badminton />, title: "Badminton Court" },
  { icon: <Hall />, title: "Multipurpose Hall" },
  { icon: <Library />, title: "Library" },
  { icon: <Jogging />, title: "Jogging Track" },
  { icon: <Reserved />, title: "Reserved Parking" },
];
const ProjectItem: FC<Props> = ({ el, type, showSwitches }) => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoadingContext();
  const [isTrending, setIsTrending] = useState(true);
  const [isFeatured, setIsFeatured] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateStatus = async (id: string, type: string, status: boolean) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://dhc.shellcode.co.in/updateStatus.php",
        {
          id: id,
          type: type,
          status: status,
        },
      );
    } catch (error) {
      console.error("Failed to fetch status", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handlers for switches
  const handleTrendingChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    console.log("Trending is toggled:", checked);
    setIsTrending(checked);
    await updateStatus(el.id, "isTranding", checked);
  };

  const handleFeaturedChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    console.log("Featured is toggled:", checked);
    setIsFeatured(checked);
    await updateStatus(el.id, "isFeatured", checked);
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
    <>
      {isMobile ? (
        <div className="project__item">
          <div className="project__item-card">
            <div className={`project__item-card-img`}>
              <img src={el.images} alt="" />
            </div>
            <div className="project__item-card-content-wrapper">
              <div className="project__item-content-wrapper">
                <div className="project__item-content">
                  <div className="project__item-content-left">
                    <h3
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push(`/projects/${el.id}`)}
                    >
                      {el.projectName}
                    </h3>
                    <span className="project__item-content-location">
                      <Location />
                      {`${el.country}, ${el.city}`}
                    </span>
                    {type === "default" ? (
                      <>
                        <span className="project__item-content-about">
                          About Developer
                        </span>
                        <p>{el.aboutDev}</p>
                      </>
                    ) : (
                      <>
                        <div>
                          <div className="project__item-content-our">
                            <span>Carpet Area:</span>
                            <span>{el.CarpetAreaRange}</span>
                          </div>
                          <div className="project__item-content-our">
                            <span>Construction Stage:</span>
                            <span>{el.ConstructionStage}</span>
                          </div>
                          <div className="project__item-content-our">
                            <span>BHK:</span>
                            <span>
                              {el.ApartmentType.map((el: any) => el + " ")}
                            </span>
                          </div>
                        </div>
                        <div className="project__item-features">
                          {amentiesOptions.map((feature, index) => {
                            if (el.amenities.includes(index)) {
                              return (
                                <span key={index}>
                                  {feature.icon}
                                  {feature.title}
                                </span>
                              );
                            }
                            return null; // Если индекс не присутствует в indicesToDisplay, возвращаем null
                          })}
                        </div>
                      </>
                    )}
                  </div>
                  <div
                    className={`project__item-content-right ${
                      type === "our" ? "no-space" : ""
                    }`}
                  >
                    <span>{el.budget}</span>
                    {showSwitches && (
                      <span className="project__item-switch">
                        <p>Trending</p>
                        <Switch
                          checked={isTrending}
                          onChange={handleTrendingChange}
                        />
                        <p>Featured</p>
                        <Switch
                          checked={isFeatured}
                          onChange={handleFeaturedChange}
                        />
                      </span>
                    )}
                    {type === "default" && el.status === "Pending" ? (
                      <div className="project__item-btns">
                        <button
                          onClick={(e) => changeStatus("Approved", el.id, e)}
                          className="btn"
                        >
                          Approve
                        </button>
                        <button
                          onClick={(e) => changeStatus("Rejected", el.id, e)}
                          className="btn"
                        >
                          Reject
                        </button>
                      </div>
                    ) : type === "default" && el.status === "Approved" ? (
                      <div className="project__item-status-succes project__item-status">
                        <Succes /> Approved
                      </div>
                    ) : type === "default" && el.status === "Rejected" ? (
                      <div className="project__item-status-denied project__item-status">
                        <Denied /> Rejected
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="project__item-manager-wrapper">
                {type === "our" && (
                  <div>
                    <div className="project__item-our-right">{`EMI starts at ${el.EMI}`}</div>
                    <div className=" project__item-our-right project__item-manager-posted">
                      Posted on:
                    </div>
                    <div className="project__item-our-right">
                      {el["listed at"]}
                    </div>
                    <div className="project__item-our-right project__item-manager-posted">
                      Posted From:
                    </div>
                    <div className="project__item-our-right">{el.state}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="project__item">
          <div className="project__item-card">
            <div className={`project__item-card-img`}>
              {" "}
              <img src={el.images} alt="" />
            </div>
            <div className="project__item-content">
              <div className="project__item-content-left">
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push(`/projects/${el.id}`)}
                >
                  {el.projectName}
                </h3>
                <span className="project__item-content-location">
                  <Location />
                  {`${el.country}, ${el.city}`}
                </span>
                {type === "default" ? (
                  <>
                    <span className="project__item-content-about">
                      About Developer
                    </span>
                    <p>{el.aboutDev}</p>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="project__item-content-our">
                        <span>Carpet Area:</span>
                        <span>{el.CarpetAreaRange}</span>
                      </div>
                      <div className="project__item-content-our">
                        <span>Construction Stage:</span>
                        <span>{el.ConstructionStage}</span>
                      </div>
                      <div className="project__item-content-our">
                        <span>BHK:</span>
                        <span>
                          {el.ApartmentType.map((el: any) => el + " ")}
                        </span>
                      </div>
                    </div>
                    <div className="project__item-features">
                      {amentiesOptions.map((feature, index) => {
                        if (el.amenities.includes(index)) {
                          return (
                            <span key={index}>
                              {feature.icon}
                              {feature.title}
                            </span>
                          );
                        }
                        return null; // Если индекс не присутствует в indicesToDisplay, возвращаем null
                      })}
                    </div>
                  </>
                )}
              </div>
              <div
                className={`project__item-content-right ${
                  type === "our" ? "no-space" : ""
                }`}
              >
                <span>{el.budget}</span>
                {showSwitches && (
                  <span className="project__item-switch">
                    <p>Trending</p>
                    <Switch
                      checked={isTrending}
                      onChange={handleTrendingChange}
                    />
                    <p>Featured</p>
                    <Switch
                      checked={isFeatured}
                      onChange={handleFeaturedChange}
                    />
                  </span>
                )}
                {type === "default" && el.status === "Pending" ? (
                  <div className="project__item-btns">
                    <button
                      onClick={(e) => changeStatus("Approved", el.id, e)}
                      className="btn"
                    >
                      Approve
                    </button>
                    <button
                      onClick={(e) => changeStatus("Rejected", el.id, e)}
                      className="btn"
                    >
                      Reject
                    </button>
                  </div>
                ) : type === "default" && el.status === "Approved" ? (
                  <div className="project__item-status-succes project__item-status">
                    <Succes /> Approved
                  </div>
                ) : type === "default" && el.status === "Rejected" ? (
                  <div className="project__item-status-denied project__item-status">
                    <Denied /> Rejected
                  </div>
                ) : null}
                {type === "our" && (
                  <div>
                    <div className="project__item-our-right">{`EMI starts at ${el.EMI}`}</div>
                    <div className=" project__item-our-right project__item-manager-posted">
                      Posted on:
                    </div>
                    <div className="project__item-our-right">
                      {el["listed at"]}
                    </div>
                    <div className="project__item-our-right project__item-manager-posted">
                      Posted From:
                    </div>
                    <div className="project__item-our-right">{el.state}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {type === "default" ? (
            <div className="project__item-manager">
              <span className="project__item-manager-name">Manager Name</span>
              <span className="project__item-manager-subtitle">
                {el.devDetails.name}
              </span>
              <span className="project__item-manager-posted">Posted From:</span>
              <span className="project__item-manager-from">
                {el.devDetails.ProjectLocation}
              </span>
              <a
                className="project__item-manager-wp"
                href={`https://wa.me/${el.devDetails.phone}`}
                target="__blank"
              >
                {" "}
                <div className="project__item-manager-wp">
                  <WpIcon />
                </div>
              </a>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default ProjectItem;
