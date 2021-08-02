const INITIAL_STATE={
    sections:[
        {
          title: 'Caps',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/caps'
        },
        {
          title: 'Jacken',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
         linkUrl: 'shop/jacken'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'Frauen',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/Frauen'
        },
        {
          title: 'Männer',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 5,
          size:'large',
          linkUrl: 'shop/männer'
        }]
};

const directoryReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        default:
            return state;
    }
};

export default directoryReducer;