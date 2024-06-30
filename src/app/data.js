/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

// export const projectsData = [
//   {
//     id: 1,
//     name: "Alice",
//     email: "alice.johnson@example.com",
//     projects: [
//       {
//         id: 1,
//         name: "EcoTracker",
//         description: "Track your carbon footprint",
//         date: "2022-08-15",
//         demoLink: "https://ecotracker.example.com",
//       },
//       {
//         id: 2,
//         name: "ArtGallery Online",
//         description: "Digital art showcase platform",
//         date: "2022-06-20",
//         demoLink: "https://artgalleryonline.example.com",
//       },
//       {
//         id: 3,
//         name: "BudgetPlanner",
//         description: "Plan and track expenses",
//         date: "2022-09-10",
//         demoLink: "https://budgetplanner.example.com",
//       },
//       {
//         id: 4,
//         name: "HealthBeat",
//         description: "Monitor heart rate zones",
//         date: "2022-05-30",
//         demoLink: "https://healthbeat.example.com",
//       },
//       {
//         id: 5,
//         name: "RecipeFinder",
//         description: "Discover new recipes",
//         date: "2022-07-12",
//         demoLink: "https://recipefinder.example.com",
//       },
//       {
//         id: 6,
//         name: "JourneyLogger",
//         description: "Log your travels",
//         date: "2022-10-01",
//         demoLink: "https://journeylogger.example.com",
//       },
//       {
//         id: 7,
//         name: "StudyBuddy",
//         description: "Collaborative learning platform",
//         date: "2022-04-18",
//         demoLink: "https://studybuddy.example.com",
//       },
//       {
//         id: 8,
//         name: "TechTalk",
//         description: "Tech news aggregator",
//         date: "2022-11-05",
//         demoLink: "https://techtalk.example.com",
//       },
//       {
//         id: 9,
//         name: "FitTrack",
//         description: "Fitness and workout tracker",
//         date: "2022-03-22",
//         demoLink: "https://fittrack.example.com",
//       },
//       {
//         id: 10,
//         name: "MindfulMoments",
//         description: "Meditation and mindfulness app",
//         date: "2022-02-14",
//         demoLink: "https://mindfulmoments.example.com",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     email: "bob.smith@example.com",
//     projects: [
//       {
//         id: 1,
//         name: "eeeee",
//         description: "Track your carbon footprint",
//         date: "2022-08-15",
//         demoLink: "https://ecotracker.example.com",
//       },
//       {
//         id: 2,
//         name: "ArtGallery Online",
//         description: "Digital art showcase platform",
//         date: "2022-06-20",
//         demoLink: "https://artgalleryonline.example.com",
//       },
//       {
//         id: 3,
//         name: "BudgetPlanner",
//         description: "Plan and track expenses",
//         date: "2022-09-10",
//         demoLink: "https://budgetplanner.example.com",
//       },
//       {
//         id: 4,
//         name: "HealthBeat",
//         description: "Monitor heart rate zones",
//         date: "2022-05-30",
//         demoLink: "https://healthbeat.example.com",
//       },
//       {
//         id: 5,
//         name: "RecipeFinder",
//         description: "Discover new recipes",
//         date: "2022-07-12",
//         demoLink: "https://recipefinder.example.com",
//       },
//       {
//         id: 6,
//         name: "JourneyLogger",
//         description: "Log your travels",
//         date: "2022-10-01",
//         demoLink: "https://journeylogger.example.com",
//       },
//       {
//         id: 7,
//         name: "StudyBuddy",
//         description: "Collaborative learning platform",
//         date: "2022-04-18",
//         demoLink: "https://studybuddy.example.com",
//       },
//       {
//         id: 8,
//         name: "TechTalk",
//         description: "Tech news aggregator",
//         date: "2022-11-05",
//         demoLink: "https://techtalk.example.com",
//       },
//       {
//         id: 9,
//         name: "FitTrack",
//         description: "Fitness and workout tracker",
//         date: "2022-03-22",
//         demoLink: "https://fittrack.example.com",
//       },
//       {
//         id: 10,
//         name: "MindfulMoments",
//         description: "Meditation and mindfulness app",
//         date: "2022-02-14",
//         demoLink: "https://mindfulmoments.example.com",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     email: "charlie.davis@example.com",
//     projects: [
//       {
//         id: 1,
//         name: "EcoTracker",
//         description: "Track your carbon footprint",
//         date: "2022-08-15",
//         demoLink: "https://ecotracker.example.com",
//       },
//       {
//         id: 2,
//         name: "ArtGallery Online",
//         description: "Digital art showcase platform",
//         date: "2022-06-20",
//         demoLink: "https://artgalleryonline.example.com",
//       },
//       {
//         id: 3,
//         name: "BudgetPlanner",
//         description: "Plan and track expenses",
//         date: "2022-09-10",
//         demoLink: "https://budgetplanner.example.com",
//       },
//       {
//         id: 4,
//         name: "HealthBeat",
//         description: "Monitor heart rate zones",
//         date: "2022-05-30",
//         demoLink: "https://healthbeat.example.com",
//       },
//       {
//         id: 5,
//         name: "RecipeFinder",
//         description: "Discover new recipes",
//         date: "2022-07-12",
//         demoLink: "https://recipefinder.example.com",
//       },
//       {
//         id: 6,
//         name: "JourneyLogger",
//         description: "Log your travels",
//         date: "2022-10-01",
//         demoLink: "https://journeylogger.example.com",
//       },
//       {
//         id: 7,
//         name: "StudyBuddy",
//         description: "Collaborative learning platform",
//         date: "2022-04-18",
//         demoLink: "https://studybuddy.example.com",
//       },
//       {
//         id: 8,
//         name: "TechTalk",
//         description: "Tech news aggregator",
//         date: "2022-11-05",
//         demoLink: "https://techtalk.example.com",
//       },
//       {
//         id: 9,
//         name: "FitTrack",
//         description: "Fitness and workout tracker",
//         date: "2022-03-22",
//         demoLink: "https://fittrack.example.com",
//       },
//       {
//         id: 10,
//         name: "MindfulMoments",
//         description: "Meditation and mindfulness app",
//         date: "2022-02-14",
//         demoLink: "https://mindfulmoments.example.com",
//       },
//     ],
//   },
// ];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Figma",
    link: "https://www.figma.com/files/team/1198140580282520836/recents-and-sharing/recently-viewed?fuid=1198140569727893980",
    icon: "figma",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/millan-makokha-88a96a256/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/MakokhaMillan",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Millan_Resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
