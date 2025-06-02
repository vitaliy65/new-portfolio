interface Social {
  img: string;
  name: string;
  myTag: string;
  link: string;
  canBeCopied?: boolean;
}

export const socials: Social[] = [
  {
    img: "/socials/linkedIn.svg",
    name: "LinkedIn",
    myTag: "@vitaliy-posvistak",
    link: "https://www.linkedin.com/in/vitaliy-posvistak-7887082b8/",
  },
  {
    img: "/socials/telegram.svg",
    name: "Telegram",
    myTag: "@Vitalas_P",
    link: "https://t.me/Vitalas_P",
  },
  {
    img: "/socials/instagram.svg",
    name: "Instagram",
    myTag: "@_vitalio.p_",
    link: "https://www.instagram.com/_vitalio.p_/",
  },
  {
    img: "/socials/discord.svg",
    name: "Discord",
    myTag: "@vurbin66",
    link: "vurbin66",
    canBeCopied: true,
  },
];
