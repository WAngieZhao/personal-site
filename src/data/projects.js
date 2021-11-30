// TODO Add a couple lines about each project
const data = [
  {
    title: 'Water Occlusion Detection in Aerial LiDAR Point Clouds',
    subtitle: '2019 NYU CUSP Research Project with Dr. Debra F. Laefer',
    image: '/images/projects/Water.png',
    link: 'https://github.com/WAngieZhao/Water-Occlusion-Detection-in-Aerial-LiDAR-Point-Clouds',
    date: '2019-06-01',
    desc:
      'Developed an algorithm that locates and extracts water occlusion outline '
      + 'by testing return time and horizontal distributions of the LIDAR points. '
      + 'Time gaps between points were used to locate the existence of occlusions, '
      + 'and water occlusion was specified by clustering and testing z-coordination standard deviation. '
      + 'The algorithm generated 90% of occlusions caused '
      + 'by water with different levels of outline complexity.',
  },
  {
    title: 'Aerial Lidar Data Restoration with Convolutional Neural Network',
    subtitle: '2020 NYU CUSP Research Project with Dr. Debra F. Laefer',
    link: 'https://github.com/mihamerstan/D-FCN',
    image: '/images/projects/D-FCN.png',
    date: '2020-06-01',
    desc:
      'Altering the D-FCN '
      + '(Directionally Constrained Fully Convolutional Neural Network For Airborne Lidar Point Cloud Classification) '
      + 'model to apply on high density aerial LIDAR data set with high accuracy. '
      + 'Planning on using output result to remove unwanted vehicles and restore road surface data. ',
  },
  {
    title: 'Solidary Cafe',
    subtitle: 'girls.exe’s Hack the Gap - Most Innovative Hack',
    link: 'https://github.com/ziyanan/SolidarityCafe',
    image: '/images/projects/SolidarityCafe.png',
    date: '2021-06-01',
    desc:
      'SolidarityCafe is an online chat room app for women solidarity and support. '
      + 'Developed by women and designed for women. '
      + 'We would like to support mental health for women by providing a platform for women to seek and lend. '
      + 'help when they need someplace to confide their concerns and release their pressures and depressions. '
      + 'SolidarityCafe is coded with PHP, MySQL and javascript.',
  },
  {
    title: 'CourXive',
    subtitle: 'Course project for CS-UY4523 Design Project',
    link: 'https://github.com/ziyanan/CourXive',
    image: '/images/projects/CourXive.png',
    date: '2021-11-01',
    desc:
      'CourXive is a platform that offers online learning navigation including course comparison and recommendation. '
      + 'Developed by women and designed for women. '
      + 'We aim at integrating online courses and study materials from various learning websites. '
      + 'No matter you are a student at school, a professional, or an individual learner, '
      + 'there is no need to look around for your best fit on different learning websites separately.',
  },
  {
    title: 'Automatic 15 Puzzle Solver with A* Search',
    subtitle: 'Coursework for CS-UY4613 Artificial Intelligence',
    image: '/images/projects/15Puzzle.png',
    link: 'https://drive.google.com/drive/folders/1Vea8bndyIHnkz3_KTwmESJxWkCGrKo4y?usp=sharing',
    date: '2020-04-01',
    desc:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
      + 'Over 60,000 cats were classified before server bills made the project too expensive '
      + 'to continue hosting.',
  },
  {
    title: 'Automatic Futoshiki Solver with Back Tracking Algorithm',
    subtitle: 'Coursework for CS-UY4613 Artificial Intelligence',
    image: '/images/projects/Futoshiki.png',
    link: 'https://drive.google.com/drive/folders/1Ig963jA3xleC8g3iV-amZ4DoUEe4hwZO?usp=sharing',
    date: '2020-05-01',
    desc:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
      + 'Over 60,000 cats were classified before server bills made the project too expensive '
      + 'to continue hosting.',
  },
];

export default data;
