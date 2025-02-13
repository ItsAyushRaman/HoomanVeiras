import {
    AlgoArena,
    BugThug,
    CaptureTheFlag,
    CodeMesh,
    CSEQuiz,
    pixel,
    buildthebridge,
    droneDash,
    roboRace,
    roboWar,
    roboSoccer,
    bestOutOfWaste,
  } from "../AllAssets";
  
  export interface cardContentType {
      time: string;
      date: string;
      location: string;
      title: string;
      desc: string;
      bgImage: string;
      modalContent: string[];
      chip: string;
    }
    
    export const cardContentDay1: cardContentType[] = [
      {
        time: "9:00 AM to 11:00 AM",
        date: "28th March 2025",
        location: "Seminar Hall, 2nd floor",
        title: "Algorithmic Arena",
        desc: "A programming contest to test problem-solving and data structures & algorithms skills. Solve problems in an optimized and efficient way.",
        bgImage: AlgoArena,
        modalContent: [
          "Hosted on HackerRank.",
          "Two divisions: Junior (1st-2nd year) and Senior (3rd-4th year).",
          "Junior: 2 Easy, 2 Medium, 1 Hard. Senior: 1 Easy, 2 Medium, 2 Hard.",
          "First three participants to submit all correct solutions win.",
          "Participants must bring their own laptops.",
        ],
        chip: "Computer Science",
      },
      {
        time: "9:00 AM to 11:00 AM",
        date: "28th March 2025",
        location: "Seminar Hall, 2nd floor",
        title: "Capture The Flag",
        desc: "A cybersecurity challenge where participants find hidden flags in vulnerable programs.",
        bgImage: CaptureTheFlag,
        modalContent: [
          "Solo participation.",
          "Challenges involve cryptography, steganography, and binary exploitation.",
          "6 questions, 5 levels (all interrelated).",
          "Hints are provided for decoding flags.",
          "Plagiarism leads to disqualification.",
        ],
        chip: "Computer Science",
      },
      {
        time: "11:15 AM to 1:15 PM",
        date: "28th March 2025",
        location: "Seminar Hall, 2nd floor",
        title: "Bug Thug",
        desc: "A debugging competition where participants fix code issues and implement missing logic.",
        bgImage: BugThug,
        modalContent: [
          "Solo participation.",
          "Hosted on GitHub with real bug issues.",
          "Web development-based debugging (HTML, CSS, JS only).",
          "Two divisions: Junior & Senior.",
          "Plagiarism leads to disqualification.",
        ],
        chip: "Computer Science",
      },
      {
        time: "2:15 PM to 4:15 PM",
        date: "28th March 2025",
        location: "Seminar Hall, 2nd floor",
        title: "Code Mesh",
        desc: "A pattern recognition coding challenge with increasing difficulty levels.",
        bgImage: CodeMesh,
        modalContent: [
          "Two divisions: Junior and Senior.",
          "Hosted on HackerRank.",
          "6 questions: 2 Easy, 2 Medium, 2 Hard.",
          "Solo participation.",
          "Participants must bring their own laptops.",
        ],
        chip: "Computer Science",
      },
      {
        time: "2:15 PM to 4:15 PM",
        date: "28th March 2025",
        location: "Seminar Hall, 2nd floor",
        title: "CSE Quiz",
        desc: "A technical quiz testing programming concepts and problem-solving skills.",
        bgImage: CSEQuiz,
        modalContent: [
          "Teams of 3-4 members.",
          "Two rounds: Elimination (MCQs) and Finals (direct questions).",
          "Top 4-5 teams qualify for the final round.",
          "Tiebreaker: Rapid-fire round.",
        ],
        chip: "Computer Science",
      },
      {
        time: "4:30 PM to 6:30 PM",
        date: "28th March 2025",
        location: "Seminar Hall, 1st floor",
        title: "Pixel to Prototype",
        desc: "A frontend challenge to convert a Figma design into a fully functional website.",
        bgImage: pixel,
        modalContent: [
          "Solo or team (up to 3 members).",
          "Tech stack: HTML, CSS, JS, Bootstrap/Tailwind, external libraries.",
          "Submissions include code files and hosted demo.",
          "Judged on design accuracy, responsiveness, code quality, and creativity.",
        ],
        chip: "Computer Science",
      },
    ];
    
    export const cardContentDay2: cardContentType[] = [
      {
        time: "9:00 AM to 11:00 AM",
        date: "29th March 2025",
        location: "Badminton Court, Old Building",
        title: "Robo Race",
        desc: "An exciting race where robots navigate obstacles with speed and accuracy.",
        bgImage: roboRace,
        modalContent: [
          "Teams of 1-4 members.",
          "Judged on speed, agility, and accuracy.",
          "Participants must bring their own equipment.",
          "Disqualification for safety violations or interference.",
        ],
        chip: "Robotics",
      },
      {
        time: "11:15 AM to 1:15 PM",
        date: "29th March 2025",
        location: "Badminton Court, Old Building",
        title: "Robo War",
        desc: "Battle between robots judged on strategy, durability, and combat ability.",
        bgImage: roboWar,
        modalContent: [
          "Teams of 1-4 members.",
          "Robots must pass a safety inspection before competing.",
          "Last robot standing wins.",
          "No external interference allowed.",
        ],
        chip: "Mechanical",
      },
      {
        time: "2:15 PM to 4:15 PM",
        date: "29th March 2025",
        location: "Classroom, 2nd floor",
        title: "Build the Bridge",
        desc: "An engineering challenge to design and prototype a bridge using AutoCAD.",
        bgImage: buildthebridge,
        modalContent: [
          "Solo participation.",
          "Judged on design, load-bearing capacity, and aesthetics.",
          "Participants must bring laptops with AutoCAD installed.",
        ],
        chip: "Civil",
      },
      {
        time: "2:15 PM to 4:15 PM",
        date: "29th March 2025",
        location: "Ground Floor, New Building",
        title: "Best Out of Waste",
        desc: "A sustainability challenge to create functional items from waste materials.",
        bgImage: bestOutOfWaste,
        modalContent: [
          "Teams of 1-4 members.",
          "Judged on efficiency, functionality, and creativity.",
          "Teams must bring pre-prepared models.",
        ],
        chip: "Environmental",
      },
      {
        time: "4:30 PM to 6:30 PM",
        date: "29th March 2025",
        location: "Badminton Court, Old Building",
        title: "Robo Soccer",
        desc: "Autonomous robots compete in soccer matches.",
        bgImage: roboSoccer,
        modalContent: [
          "1v1 tournament.",
          "Teams must bring their own robots.",
        ],
        chip: "Mechanical",
      },
      {
        time: "4:30 PM to 6:30 PM",
        date: "29th March 2025",
        location: "Parking, New Block",
        title: "Drone Dash",
        desc: "A drone race testing precision, speed, and control.",
        bgImage: droneDash,
        modalContent: [
          "Teams of 1-4 members.",
          "Track details revealed 30 minutes before the event.",
          "Penalties for missing checkpoints or collisions.",
        ],
        chip: "Mechanical",
      },
    ];
    