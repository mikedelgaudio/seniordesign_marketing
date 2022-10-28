export interface BlogPost {
  date: Date;
  title: string;
  imgUrl?: string;
  imgAlt?: string;
  membersInAttendance: string;
  topicsOfDiscussion: string[];
}

export const blogs: BlogPost[] = [
  {
    date: new Date("10/20/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "Advisor, All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Reviewed current state and plan for upcoming deliverables for meeting with advisor following day",
      "Presented website, rendering/concepts, discussed purchasing of domain",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("10/19/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Created presentation on current state and plan for upcoming deliverables for meeting with advisor following day",
      "Assigned responsibilities for upcoming deliverables",
      "Presented current state of website",
    ],
  },
  {
    date: new Date("10/06/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "Advisor, All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Completed, Reviewed, and Rehearsed Phase 1 Presentation",
    ],
  },
  {
    date: new Date("10/03/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: ["Completed Phase 1 Report and Reviewed Content"],
    imgUrl:
      "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("09/21/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Agreed upon following major design elements such as:\n3D-Printed Body with 5 sides. Last side will be slide/screw fit to allow inside access\nSides will be color-coded as well as numbered (Ensures accessibility for color-blindness)\nAccelerometer on the inside will capture/post the data\nBasic website design agreed upon (Screenshot of concept included at end of report)",
      "Shared work done since last meeting (Technical aspect ideas, website design concepts, physical design concepts, report work done individually)",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("09/12/2022"),
    title: "Team Meeting",
    membersInAttendance:
      "All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Main Features, Rough Project Scope",
      "Brainstorming mechanical construction (3D Printing, Purchased Components)",
      "Brainstorming technical construction (On-Board Chip, Data Connection, Bluetooth, Raspberry Pi Server)",
      "Discussion of Phase 1 Progress Report Requirements",
      "Review of website concepts (Very rough)",
      "Set expectations for everyone to create sketches and generate ideas for features/construction",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    imgAlt: "Banner",
  },
  {
    date: new Date("09/08/2022"),
    title: "Initial Meeting with Advisor",
    membersInAttendance:
      "Advisor, All Members (Zain Aamer, Michael DelGaudio, Leticia Gonzalez Marquez, Christopher Kurtz, William Reynolds, Marc Terranova)",
    topicsOfDiscussion: [
      "Introductions",
      "Project Overview",
      "Establishment of Communication Method (Slack Channel Created)",
      "Review of Deliverables (Phase 1 Report/Presentation & Progress Report)",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    imgAlt: "Banner",
  },
];
