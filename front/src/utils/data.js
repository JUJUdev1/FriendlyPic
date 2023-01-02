export const categories = [
  {
    name: 'Les préparatifs',
    image: 'https://provence-emoi.com/wp-content/uploads/2020/09/organisation-mariage-rentr%C3%A9e-septembre-pr%C3%A9paratifs-wedding-planner-provence-4.jpg',
  },
  {
    name: 'Les mariés',
    image: 'https://www.poitiers.catholique.fr/wp-content/uploads/2019/12/midsection-of-woman-making-heart-shape-with-hands-256737-scaled.jpg',
  },
  {
    name: 'Les invités',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjvb1INKuZo96BY18Fev9vBhHV2xVo-5TUyPZOOfZR0ZuN84ZkgHC87xh8Riu99Pmqus&usqp=CAU',
  },
  {
    name: 'La mairie',
    image: 'https://www.italianipocket.com/wp-content/uploads/2017/02/mairie.png',
  },
  {
    name: 'La cérémonie',
    image: 'https://www.mariage.be/images/conseils-mariage/photo-mariage/deroulement-ceremonie-laique.jpg',
  },
  {
    name: 'Le vin d’honneur',
    image: 'https://www.zankyou.fr/images/mag-card-c/d8a/156e/878/623/-/fr/wp-content/uploads/2018/08/befunky-collage-2019-10-28t225300960.jpg',
  },
  {
    name: 'La réception',
    image: 'https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2018/01/web3-wedding-the-elegant-dinner-table-on-the-beach-shutterstock_623074871.jpg?w=620&h=348&crop=1',
  },
  {
    name: 'La soirée',
    image: 'https://animafunparty.com/wp-content/uploads/2016/02/mariage-7.jpg',
  }, {
    name: 'Divers',
    image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
}; 