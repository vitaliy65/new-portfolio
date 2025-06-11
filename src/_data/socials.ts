interface Social {
  img: string;
  name: string;
  myTag: string;
  link: string;
  alt: string;
  canBeCopied?: boolean;
}

export const socials: Social[] = [
  {
    img: "/socials/linkedIn.svg",
    name: "LinkedIn",
    myTag: "@vitaliy-posvistak",
    link: "https://www.linkedin.com/in/vitaliy-posvistak-7887082b8/",
    alt: "my linkedin account",
  },
  {
    img: "/socials/telegram.svg",
    name: "Telegram",
    myTag: "@Vitalas_P",
    link: "https://t.me/Vitalas_P",
    alt: "my telegram account",
  },
  {
    img: "/socials/instagram.svg",
    name: "Instagram",
    myTag: "@_vitalio.p_",
    link: "https://www.instagram.com/_vitalio.p_/",
    alt: "my instagram account",
  },
  {
    img: "/socials/discord.svg",
    name: "Discord",
    myTag: "@vurbin66",
    link: "vurbin66",
    canBeCopied: true,
    alt: "my discord username",
  },
];
