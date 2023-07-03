import React from "react";
import TeamInfo from "./teamteam";
import speakers from "./Utility/teamname";
import Navbar from "./Navbar";
import meenal from "../assets/meenal.jpg"
import organizername from "../components/Utility/organizersname"
import volunteers from "../components/Utility/volunteers"
import techteam from "../components/Utility/techteam"

function CreateSpeakerCard(speakers) {
  return (
    <TeamInfo
      key={speakers.key}
      imgURL={speakers.imgURL}
      name={speakers.name}
      profession={speakers.profession}
    />
  );

}
function organizers(organizername) {
  return (
    <TeamInfo
      key={organizername.key}
      imgURL={organizername.imgURL}
      name={organizername.name}
      profession={organizername.profession}
      insta={organizername.insta}
      linkedin={organizername.linkedin}
      mail={organizername.mail}
    />
  );
}

function volunteername(volunteers) {
  return (
    <TeamInfo
      key={volunteers.key}
      imgURL={volunteers.imgURL}
      name={volunteers.name}
      profession={volunteers.profession}
      insta={volunteers.insta}
      linkedin={volunteers.linkedin}
      mail={volunteers.mail}
    />
  );
}
function techname(techteam) {
  return (
    <TeamInfo
      key={techteam.key}
      imgURL={techteam.imgURL}
      name={techteam.name}
      profession={techteam.profession}
      insta={techteam.insta}
      linkedin={techteam.linkedin}
      mail={techteam.mail}
    />
  );
}


function Team() {
  return (
    <div className="all" id="Team">
      <Navbar />
      <div className="blackback">
        <h1 className="team-heading">
          <span>LICENSE</span> <span className="team-heading-red">HOLDER</span>
        </h1>
        <TeamInfo
          // key={}
          imgURL={meenal}
          name={"Meenal Rathore"}
          profession={"License holder"}
          linkedin={""}
          insta={"https://instagram.com/meenal_rathore22?igshid=MzRlODBiNWFlZA=="}
          mail={"mailto:meenalrathore08@gmail.com"}
        />

        <h1 className="team-heading">
          <span>ORGANIZING</span> <span className="team-heading-red">COMMITTEE</span>
        </h1>
        {organizername.map(organizers)}

        <h1 className="team-heading">
          <span>VOLUNTEERS</span>
        </h1>
        {volunteers.map(volunteername)} 

        <h1 className="team-heading">
          <span>TECHNICAL</span> <span className="team-heading-red">TEAM</span>
        </h1>
        {techteam.map(techname)}
      </div>
    </div>
  );
}

export default Team;
