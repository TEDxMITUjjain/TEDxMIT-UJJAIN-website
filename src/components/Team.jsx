import React from "react";
import TeamInfo from "./currentSpeakers";
import speakers from "./Utility/speakers";
import Navbar from "./Navbar";

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

function Team() {
  return (
    <div className="all" id="Team">
      <Navbar />
      <div className="blackback">
        <h1 className="team-heading">
          <span>LICENSE</span> <span className="team-heading-red">HOLDER</span>
        </h1>
        <TeamInfo
          key={speakers[0].key}
          imgURL={speakers[0].imgURL}
          name={speakers[0].name}
          profession={speakers[0].profession}
        />

        <h1 className="team-heading">
          <span>CORE</span> <span className="team-heading-red">TEAM</span>
        </h1>
        {speakers.map(CreateSpeakerCard)}
        {speakers.map(CreateSpeakerCard)}

        <h1 className="team-heading">
          <span>VOLUNTEERS</span>
        </h1>
        {speakers.map(CreateSpeakerCard)}

        {/* <h1 className="team-heading">
          <span>ANCHORING</span>
        </h1>
        <TeamInfo
          key={speakers[3].key}
          imgURL={speakers[3].imgURL}
          name={speakers[3].name}
          profession={speakers[3].profession}
        />
        <TeamInfo
          key={speakers[2].key}
          imgURL={speakers[2].imgURL}
          name={speakers[2].name}
          profession={speakers[2].profession}
        /> */}

        <h1 className="team-heading">
          <span>TECHNICAL</span> <span className="team-heading-red">TEAM</span>
        </h1>
        {speakers.map(CreateSpeakerCard)}
      </div>
    </div>
  );
}

export default Team;
