export interface Person {
  name: string;
  email?: string;
  photo?: string;
  tags?: string[];
  homepage?: string;
  availability?: string[];
}

export const maria_fando: Person = {
  name: "Maria Fando",
  email: "maria.fando@stfc.ac.uk",
  photo: "maria_fando.png",
  tags: ["CCP4", "Cloud", "Molecular Replacement", "Organiser", "Phasing", "Model Building", "Ligands"],
  homepage: "https://www.rc-harwell.ac.uk/who-we-are/researchers/maria-fando",
  availability: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
};

export const david_waterman: Person = {
  name: "David Waterman",
  email: "david.waterman@stfc.ac.uk",
  homepage: "https://www.rc-harwell.ac.uk/who-we-are/researchers/david-waterman",
  tags: ["CCP4", "Data Processing", "Organiser"],
  photo: "david_waterman.jpg",
  availability: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
};

export const chris_orr: Person = {
  name: "Christian Orr",
  email: "christian.orr@diamond.ac.uk",
  photo: "chris_orr.jpg",
  homepage: "https://www.diamond.ac.uk/Instruments/Mx/I23/Staff/Christian-Orr.html",
  tags: ["Data Collection", "Synchrotrons", "Data Processing", "Phasing", "SAD", "Ions/Metals", "Laser shaping", "Organiser"],
  availability: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
};

export const lucrezia_catapano: Person = {
  name: "Lucrezia Catapano",
  email: "lucrezia@mrc-lmb.cam.ac.uk",
  photo: "lucrezia_catapano.jpg",
  homepage: "https://bioinfotraining.bio.cam.ac.uk/staff/lucrezia-catapano-phd",
  tags: ["Refinement", "Model Building", "Moorhen", "COOT",  "Organiser"],
  availability: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
};
export const ilaria_gimondi : Person = {
  name: "Ilaria Gimondi",
  email: "igimondi@ccdc.cam.ac.uk",
  photo: "Ilaria.png",
  homepage: "",
  tags: [ "Organiser"],
  availability: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
};
export const warren_thompson : Person = {
  name: "Warren Thompson",
  email: "warren.thompson@diamond.ac.uk",
  photo: "warren_thompson_0.jpg",
  homepage: "",
  tags: [ "Organiser"],
  availability: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
};

export const eugene_krissinel: Person = { name: "Eugene Krissinel" };
export const adam_simpkin: Person = { name: "Adam Simpkin" };
export const ailsa_powell: Person = { name: "Ailsa Powell" };
export const ed_griffen: Person = { name: "Ed Griffen" };
export const maria_jose_sanchez_barrena: Person = { name: "Maria Jose Sanchez Barrena" };
export const frank_von_delft: Person = { name: "Frank von Delft" };
export const alisia_fadini: Person = { name: "Alisia Fadini" };
export const fergus_imrie: Person = { name: "Fergus Imrie" };
export const pat_walters: Person = { name: "Pat Walters" };
export const jasmin_aschenbrenner: Person = { name: "Jasmin Aschenbrenner" };
export const conor_wild: Person = { name: "Conor Wild" };
export const eda_capkin: Person = { name: "Eda Capkin" };
export const tom_davies: Person = { name: "Tom Davies" };
export const ibrahim_roshan_kunnakattu: Person = { name: "Ibrahim Roshan Kunnakattu" };
export const genevieve_evans: Person = { name: "Genevieve Evans" };
export const filipe_menezes: Person = { name: "Filipe Menezes" };
export const rowan_walker_gibbons: Person = { name: "Rowan Walker-Gibbons" };
export const fiona_sorrell: Person = { name: "Fiona Sorrell" };

export const people: Person[] = [maria_fando, david_waterman, chris_orr, lucrezia_catapano, ilaria_gimondi, warren_thompson];
