export const executives: TeamMember = {
  2024: [
    {
      name: "Tony Lim",
      role: "President",
      imageName: "tony",
      linkedIn: "https://www.linkedin.com/in/tonylxm/",
    },
    {
      name: "Adwait Mane",
      role: "Vice President",
      imageName: "adwait",
      linkedIn: "https://www.linkedin.com/in/adwaitm/",
    },
    {
      name: "Varshil Patel",
      role: "Treasurer",
      imageName: "varsh",
      linkedIn: "https://www.linkedin.com/in/varshil-patel-8007b5223/",
    },
    {
      name: "Jamie Lee",
      role: "Secretary",
      imageName: "jamie",
      linkedIn: "https://www.linkedin.com/in/jamieleenz/",
    },
    {
      name: "Alex Liang",
      role: "Industry Lead",
      imageName: "alex_l",
      linkedIn: "https://www.linkedin.com/in/alexliang1/",
    },
    {
      name: "Alex Hope",
      role: "Social Lead",
      imageName: "alex_h",
      linkedIn: "https://www.linkedin.com/in/alexhope02/",
    },
    {
      name: "Andy Zhang",
      role: "Marketing Lead",
      imageName: "andy",
      linkedIn: "https://www.linkedin.com/in/andy-zhang-40160926b/",
    },
    {
      name: "Victor Qiu",
      role: "Sponsorship Manager",
      imageName: "victor",
      linkedIn: "https://www.linkedin.com/in/vqiu25/",
    },
    {
      name: "Grace Kerr",
      role: "Women's Representative",
      imageName: "grace",
      linkedIn: "https://www.linkedin.com/in/gracekerrstudent/",
    },
    {
      name: "Becky Ngan",
      role: "Marketing Coordinator",
      imageName: "becky",
      linkedIn: "https://www.linkedin.com/in/becky-ngan/",
    },
    {
      name: "Connie Ding",
      role: "Marketing Coordinator",
      imageName: "connie",
      linkedIn: "https://www.linkedin.com/in/connie-ding/",
    },
    {
      name: "Sunny Setia",
      role: "Industry Event Coordinator",
      imageName: "sunny",
      linkedIn: "https://www.linkedin.com/in/sunnyysetia/",
    },
    {
      name: "Oorja Gandhi",
      role: "Industry Event Coordinator",
      imageName: "oorja",
      linkedIn: "https://www.linkedin.com/in/oorja-gandhi/",
    },
    {
      name: "Uday Jain",
      role: "Industry Event Coordinator",
      imageName: "uday",
      linkedIn: "https://www.linkedin.com/in/uday-jain-0782a02b7/",
    },
    {
      name: "Nadia Askari",
      role: "Social Event Coordinator",
      imageName: "nadia",
      linkedIn: "https://www.linkedin.com/in/nadiaaskari/",
    },
    {
      name: "Richman Tan",
      role: "Social Event Coordinator",
      imageName: "richman",
      linkedIn: "https://www.linkedin.com/in/richman-tan-9961442b1/",
    },
    {
      name: "Miguel Balingit",
      role: "Social Event Coordinator",
      imageName: "miguel",
      linkedIn: "https://www.linkedin.com/in/miguelbalingit/",
    },
  ]
}

export type TeamMember = {
  [year: number]: {
    name: string;
    role: string;
    imageName: string;
    linkedIn: string;
  }[];
};
