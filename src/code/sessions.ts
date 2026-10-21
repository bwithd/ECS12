import type { Person } from "./people";
import {
  adam_simpkin,
  ailsa_powell,
  alisia_fadini,
  conor_wild,
  ed_griffen,
  eda_capkin,
  eugene_krissinel,
  fergus_imrie,
  filipe_menezes,
  fiona_sorrell,
  frank_von_delft,
  genevieve_evans,
  ibrahim_roshan_kunnakattu,
  ilaria_gimondi,
  jasmin_aschenbrenner,
  lucrezia_catapano,
  maria_jose_sanchez_barrena,
  pat_walters,
  rowan_walker_gibbons,
  tom_davies,
  warren_thompson,
} from "./people";

export type SessionType =
  | "Lecture"
  | "Practical"
  | "Meal"
  | "Break"
  | "Other"
  | "Sponsor"
  | "Students"
  | "Social";

// Slot colours, matching the original schedule spreadsheet
export const colourForType: Record<SessionType, string> = {
  Lecture: "#e2efda",
  Practical: "#d9e1f2",
  Meal: "#fff2cc",
  Break: "#fff2cc",
  Other: "#ffffff",
  Sponsor: "#93c47d",
  Students: "#9fc5e8",
  Social: "#ffccff",
};

export interface Session {
  title: string;
  type: SessionType;
  time: string;
  speakers?: Person[];
}

export interface Day {
  title: string;
  tab: { day: string; sub: string };
  sessions: Session[];
}

const day1: Day = {
  title: "Day 1 - Mon 21st Jun: Overview",
  tab: { day: "Day 1", sub: "Mon 21 Jun · Overview" },
  sessions: [
    {
      title: "Registration",
      type: "Other",
      time: "09:00",
    },
    {
      title: "Opening",
      type: "Other",
      time: "09:30",
    },
    {
      title: "Introduction to Design-Make-Test aspects of the DMTA drug-discovery pipeline",
      type: "Lecture",
      time: "10:00",
      speakers: [warren_thompson],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "Role of CCP4 in drug discovery",
      type: "Lecture",
      time: "11:15",
      speakers: [eugene_krissinel],
    },
    {
      title: "CCP4 Cloud: ligand fitting",
      type: "Practical",
      time: "12:00",
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:30",
    },
    {
      title: "Using machine learning approaches in early SBDD",
      type: "Lecture",
      time: "13:30",
      speakers: [adam_simpkin],
    },
    {
      title: "Fragment screening in drug discovery at Diamond",
      type: "Lecture",
      time: "14:15",
      speakers: [ailsa_powell],
    },
    {
      title: "Break",
      type: "Break",
      time: "15:00",
    },
    {
      title: "DECTRIS",
      type: "Sponsor",
      time: "15:15",
    },
    {
      title: "Students introduction",
      type: "Students",
      time: "16:15",
    },
    {
      title: "Social",
      type: "Social",
      time: "17:30",
    },
  ],
};

const day2: Day = {
  title: "Day 2 - Tue 22nd Jun: Design",
  tab: { day: "Day 2", sub: "Tue 22 Jun · Design" },
  sessions: [
    {
      title: "Medicinal chemistry for SBDD",
      type: "Lecture",
      time: "09:00",
      speakers: [ed_griffen],
    },
    {
      title: "Case studies in drug design",
      type: "Lecture",
      time: "10:00",
      speakers: [maria_jose_sanchez_barrena],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "OpenBind",
      type: "Lecture",
      time: "11:15",
      speakers: [frank_von_delft],
    },
    {
      title: "GOLD for protein-ligand docking",
      type: "Practical",
      time: "12:00",
      speakers: [ilaria_gimondi],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:30",
    },
    {
      title: "GOLD for protein-ligand docking",
      type: "Practical",
      time: "13:30",
      speakers: [ilaria_gimondi],
    },
    {
      title: "Practical",
      type: "Practical",
      time: "14:15",
    },
    {
      title: "Break",
      type: "Break",
      time: "15:00",
    },
    {
      title: "Enamine",
      type: "Sponsor",
      time: "15:15",
    },
    {
      title: "Students introduction",
      type: "Students",
      time: "16:15",
    },
    {
      title: "Diamond tour",
      type: "Social",
      time: "17:30",
    },
  ],
};

const day3: Day = {
  title: "Day 3 - Wed 23rd Jun: Make",
  tab: { day: "Day 3", sub: "Wed 23 Jun · Make" },
  sessions: [
    {
      title: "OpenFold and ROCKET",
      type: "Lecture",
      time: "09:00",
      speakers: [alisia_fadini],
    },
    {
      title: "Affinity predictions/ML",
      type: "Lecture",
      time: "10:00",
      speakers: [fergus_imrie],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "Next generation co-folding models, blind challenges and data",
      type: "Lecture",
      time: "11:15",
      speakers: [pat_walters],
    },
    {
      title: "Practical",
      type: "Practical",
      time: "12:00",
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:30",
    },
    {
      title: "Practical",
      type: "Practical",
      time: "13:30",
    },
    {
      title: "Break",
      type: "Break",
      time: "15:00",
    },
    {
      title: "Eli Lilly",
      type: "Sponsor",
      time: "15:15",
    },
    {
      title: "Practical",
      type: "Practical",
      time: "16:15",
    },
    {
      title: "Excursion",
      type: "Social",
      time: "17:30",
    },
  ],
};

const day4: Day = {
  title: "Day 4 - Thu 24th Jun: Test",
  tab: { day: "Day 4", sub: "Thu 24 Jun · Test" },
  sessions: [
    {
      title: "HT structural data generation",
      type: "Lecture",
      time: "09:00",
      speakers: [jasmin_aschenbrenner],
    },
    {
      title: "HT structure analysis",
      type: "Lecture",
      time: "10:00",
      speakers: [conor_wild],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "HT affinity data generation",
      type: "Lecture",
      time: "11:15",
      speakers: [eda_capkin],
    },
    {
      title: "PANDDA",
      type: "Practical",
      time: "12:00",
      speakers: [conor_wild],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:30",
    },
    {
      title: "COOT & Moorhen",
      type: "Practical",
      time: "13:30",
      speakers: [lucrezia_catapano],
    },
    {
      title: "Practical",
      type: "Practical",
      time: "14:15",
    },
    {
      title: "Break",
      type: "Break",
      time: "15:00",
    },
    {
      title: "High-throughput determination of protein-ligand complexes",
      type: "Sponsor",
      time: "15:15",
      speakers: [tom_davies],
    },
    {
      title: "Practical",
      type: "Practical",
      time: "16:15",
    },
    {
      title: "School dinner",
      type: "Social",
      time: "17:30",
    },
  ],
};

const day5: Day = {
  title: "Day 5 - Fri 25th Jun: Analyse",
  tab: { day: "Day 5", sub: "Fri 25 Jun · Analyse" },
  sessions: [
    {
      title: "Ligand tools in PDBe",
      type: "Lecture",
      time: "09:00",
      speakers: [ibrahim_roshan_kunnakattu, genevieve_evans],
    },
    {
      title: "QM for ligands",
      type: "Lecture",
      time: "10:00",
      speakers: [filipe_menezes],
    },
    {
      title: "Break",
      type: "Break",
      time: "11:00",
    },
    {
      title: "Lecture (TBC)",
      type: "Lecture",
      time: "11:15",
    },
    {
      title: "PDBe",
      type: "Practical",
      time: "12:00",
      speakers: [ibrahim_roshan_kunnakattu],
    },
    {
      title: "Lunch",
      type: "Meal",
      time: "12:30",
    },
    {
      title: "CSD-CrossMiner",
      type: "Practical",
      time: "13:30",
      speakers: [ilaria_gimondi],
    },
    {
      title: "InPocket",
      type: "Practical",
      time: "14:15",
      speakers: [filipe_menezes],
    },
    {
      title: "Break",
      type: "Break",
      time: "15:00",
    },
    {
      title: "Proteintech",
      type: "Sponsor",
      time: "15:15",
    },
    {
      title: "XChem Pipeline",
      type: "Practical",
      time: "16:15",
      speakers: [rowan_walker_gibbons, fiona_sorrell],
    },
    {
      title: "Farewell",
      type: "Social",
      time: "17:15",
    },
  ],
};

export const days = [day1, day2, day3, day4, day5];
