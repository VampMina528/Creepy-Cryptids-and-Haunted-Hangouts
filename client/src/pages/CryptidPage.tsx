import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import GlobeView from '../components/GlobeView';
import '../styles/spooky.css';

export const cryptids = [
  {
    id: 'mothman',
    name: 'Mothman',
    location: 'Point Pleasant, West Virginia',
    description:
      'In the shadows of Point Pleasant lurks a winged enigma. The Mothman — eyes glowing crimson — glides through the night air, foretelling doom. Its legend began during a flurry of sightings in 1966, culminating in the Silver Bridge collapse. Some say it still watches, waiting...',
    icon: '/icons/Mothman-icon.jpg',
    images: [
      '/icons/Mothman-icon.jpg',
      '/icons/mothman-main.jpg',
      '/icons/mothman-bridge.jpg',
    ],
    videos: [
      'https://www.amazon.com/gp/video/detail/amzn1.dv.gti.feadd323-fea6-24f0-7424-5eb967fedac9',
      'https://www.youtube.com/watch?v=LwZugcEFHD0',
    ],
  },
  {
    id: 'sasquatch',
    name: 'Sasquatch',
    location: 'Everett, Washington',
    description:
      'He roams the forests like a phantom — massive, matted, and menacing. Sasquatch, or Bigfoot, is said to be a wild man from ancient tales. Those who glimpse him report a stench of decay... and the feeling they’re being hunted.',
    icon: '/icons/bigfoot-icon.jpg',
    images: [
      '/icons/bigfoot-icon.jpg',
      '/icons/bigfoot-woods.jpg',
      '/icons/bigfoot-black.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=lx8URas59_Y',
      'https://www.youtube.com/watch?v=f50yp-OndFQ',
    ],
  },
  {
    id: 'skinwalker',
    name: 'Skinwalker',
    location: 'Uintah Basin, Utah',
    description:
      'At Skinwalker Ranch, the land seethes with ancient malice. Cattle are found dismembered. Lights dance in the dark. The Skinwalker — a cursed Navajo witch — can wear the shape of beast or man, and speaks in voices that don’t belong.',
    icon: '/icons/skinwalker-riding.jpg',
    images: [
      '/icons/skinwalker-horned.jpg',
      '/icons/skinwalker-corpsey.jpg',
      '/icons/skinwalker-riding.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=RYccS3r95GU',
      'https://www.youtube.com/watch?v=o5PrjKTKALM',
    ],
  },
  {
    id: 'headless-men',
    name: 'Headless Men',
    location: 'Cherryvale, Kansas',
    description:
      'In the plains of Kansas, headless wanderers — the Blemmyes — haunt the edges of forgotten fields. Their hollow shoulders breathe, and their faces emerge where chests should be. They are remnants of a time when monsters walked in plain sight.',
    icon: '/icons/headless-icon.jpg',
    images: [
      '/icons/headless-icon.jpg',
      '/icons/headless-ancient.jpg',
      '/icons/headless-men.jpg',
      '/icons/headless.jpg',
      '/icons/headless-couple.jpg',
    ],
    videos: [
      'https://www.youtube.com/shorts/qAWO_8WFFLI',
      'https://www.youtube.com/watch?v=YrUYXkbMnrM',
    ],
  },
  {
    id: 'el-chupacabra',
    name: 'El Chupacabra',
    location: 'Colfax County, New Mexico',
    description:
      'With fangs like needles and leathery wings, El Chupacabra stalks the night. Born from blood and myth, it drains livestock dry and vanishes into the dark. Some say it’s a failed experiment. Others know it’s worse.',
    icon: '/icons/chupacabra-icon.jpg',
    images: [
      '/icons/chupacabra-icon.jpg',
      '/icons/chupacabra.jpg',
      '/icons/chupacabra-blurry.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=V25GZ3hUS3g',
      'https://www.youtube.com/watch?v=CwJakDoNefY',
    ],
  },
  {
    id: 'curupira',
    name: 'Curupira',
    location: 'São Paulo, Brazil',
    description:
      'Deep in the rainforest walks Curupira — backwards feet twisting tracks in tangled roots. He defends the forest with illusion and madness, punishing intruders with endless wandering.',
    icon: '/icons/curupira-icon.jpg',
    images: [
      '/icons/curupira-icon.jpg',
      '/icons/curupira-ian-matias.jpg',
      '/icons/curupira-art.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=0Xl7oRy9bEo',
      'https://www.youtube.com/watch?v=ahSm_Bk2HQE',
    ],
  },
  {
    id: 'loch-ness-monster',
    name: 'Loch-Ness Monster "Nessie"',
    location: 'Lake Loch Ness, Scotland',
    description:
      'Below the black waters of Loch Ness, something vast stirs. Nessie — long-necked and ancient — emerges in ripples and mist. Eyewitnesses whisper, sonar pings vanish, and the legend never sleeps.',
    icon: '/icons/loch-ness-icon.jpg',
    images: [
      '/icons/loch-ness-monster.jpg',
      '/icons/loch-ness-nessie.jpg',
      '/icons/loch-ness-icon.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=HHhdfXUNk0I',
      'https://www.youtube.com/watch?v=aTwxg_BH-jw',
    ],
  },
  {
    id: 'aswang',
    name: 'Aswang',
    location: 'Baguio, Philippines',
    description:
      'As night falls in the Philippines, the Aswang awakens. Shape-shifting into winged beasts, it hunts expectant mothers, drinks blood, and drifts through roofs as smoke. Even the brave bolt doors tight.',
    icon: '/icons/aswang.jpg',
    images: [
      '/icons/aswang.jpg',
      '/icons/aswang-wings.jpg',
      '/icons/aswang-manangal.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=ffopH2lcjpM',
      'https://www.youtube.com/watch?v=b6zkQOECykw',
    ],
  },
  {
    id: 'jersey-devil',
    name: 'Jersey Devil',
    location: 'Pine Barrens, New Jersey',
    description:
      'In the Pine Barrens, it screams. The Jersey Devil — twisted limbs, horns, hooves, wings — is said to be cursed from birth. Hunters have seen its shadow; none have seen it twice.',
    icon: '/icons/jersey-devil-icon.jpg',
    images: [
      '/icons/jersey-devil-icon.jpg',
      '/icons/jersey-devil.jpg',
      '/icons/jersey-devil-illustration.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=QHRLgcNsIBg',
      'https://www.youtube.com/watch?v=l58ut7hcy4I',
    ],
  },
  {
    id: 'beast-of-bray-road',
    name: 'Beast of Bray Road',
    location: 'Elkhorn, Wisconsin',
    description:
      'Something massive lurks near Bray Road — a snarling, upright wolf with human eyes. Sightings date to 1936. Locals warn: if you see it once, don’t look back.',
    icon: '/icons/Bray-Road-Beast-icon.jpg',
    images: [
      '/icons/Bray-Road-Beast-icon.jpg',
      '/icons/beastofbrayroad.jpg',
      '/icons/beast-of-bray-road-mystery.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=351sbXxUYBc',
      'https://www.imdb.com/title/tt0462193/',
    ],
  },
  {
    id: 'dark-watchers',
    name: 'Dark Watchers',
    location: 'Santa Lucia Mountains, California',
    description:
      'Silhouettes stretch along California ridges — tall, cloaked, unmoving. The Dark Watchers stand at dusk and vanish if approached. They never speak. They only observe.',
    icon: '/icons/dark-watchers-icon.jpg',
    images: [
      '/icons/dark-watchers-icon.jpg',
      '/icons/darkwatcher.png',
      '/icons/dark-watcher.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=xmlWSMorow8',
      'https://www.youtube.com/watch?v=DO20EXED02I',
    ],
  },
];

const CryptidPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage-container">
      <div className="map-section">
        <GlobeView />
      </div>
      <div className="search-buttons">
        <button
          className="lantern-glow-button"
          onClick={() => navigate('/wikipedia?type=cryptid')}
        >
          Search for Cryptids
        </button>
        <button
          className="lantern-glow-button"
          onClick={() => navigate('/wikipedia?type=haunted')}
        >
          Search for Haunted Hangouts
        </button>
      </div>
    </div>
  );
};

export default CryptidPage;
