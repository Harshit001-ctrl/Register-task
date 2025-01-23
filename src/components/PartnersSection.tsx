
const partners = [
  { name: 'Coinbase', logo: 'https://logos-world.net/wp-content/uploads/2023/02/Coinbase-Logo.png' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg' },
  { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Dropbox', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg' },
  { name: 'Webflow', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnmobUg51AiE9xXF6W_2NIezLlicKDOaxqQ&s' },
  { name: 'Zoom', logo: 'https://t4.ftcdn.net/jpg/03/75/33/61/360_F_375336103_KQSAG9rQuOgdSx01GNIPK9abZaIeGoGR.jpg' },
];

const PartnersSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;